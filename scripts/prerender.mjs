import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
let template = await readFile(path.join(dist, "index.html"), "utf8");
const stylesheet = template.match(/<link rel="stylesheet" crossorigin href="([^"]+\.css)">/);
if (stylesheet) {
  const css = await readFile(path.join(dist, stylesheet[1].replace(/^\//, "")), "utf8");
  template = template.replace(stylesheet[0], `<style data-critical-css>${css}</style>`);
}
const serverEntry = path.join(dist, "server", "entry-server.js");
const { getMetadata, getSiteUrl, render } = await import(`${pathToFileURL(serverEntry).href}?t=${Date.now()}`);

const routes = ["/", "/products", "/services", "/about", "/contact"];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function absoluteUrl(siteUrl, pathname) {
  if (!siteUrl) return "";
  return pathname === "/" ? siteUrl : `${siteUrl}${pathname}`;
}

function absoluteAssetUrl(siteUrl, asset) {
  if (!siteUrl || !asset) return "";
  return asset.startsWith("http") ? asset : `${siteUrl}${asset.startsWith("/") ? "" : "/"}${asset}`;
}

function serializeJsonLd(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

function buildHead(metadata, siteUrl) {
  const canonical = metadata.canonical === false ? "" : absoluteUrl(siteUrl, metadata.pathname);
  const image = absoluteAssetUrl(siteUrl, metadata.image);
  const tags = [
    `<meta name="robots" content="${escapeHtml(metadata.robots ?? "index, follow")}" />`,
    `<meta property="og:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(metadata.description)}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:locale" content="fr_FR" />',
    '<meta property="og:site_name" content="BenDjo" />',
    `<meta name="twitter:card" content="${image ? "summary_large_image" : "summary"}" />`,
    `<meta name="twitter:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(metadata.description)}" />`,
  ];

  if (canonical) {
    tags.push(`<link rel="canonical" href="${escapeHtml(canonical)}" />`);
    tags.push(`<meta property="og:url" content="${escapeHtml(canonical)}" />`);
  }
  if (image) {
    tags.push(`<meta property="og:image" content="${escapeHtml(image)}" />`);
    tags.push(`<meta name="twitter:image" content="${escapeHtml(image)}" />`);
  }
  if (metadata.structuredData) {
    tags.push(`<script type="application/ld+json" data-seo-json-ld="true">${serializeJsonLd(metadata.structuredData)}</script>`);
  }

  return tags.join("\n    ");
}

function createDocument(route, metadata, appHtml, siteUrl) {
  const contactPreselection = route === "/contact"
    ? '<script>(()=>{const type=new URLSearchParams(location.search).get("type");if(["petit-dejeuner","traiteur","lancement","autre"].includes(type)){const select=document.getElementById("contact-service-type");if(select)select.value=type}})();</script>'
    : "";

  return template
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(metadata.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escapeHtml(metadata.description)}" />`)
    .replace("</head>", `    ${buildHead(metadata, siteUrl)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>${contactPreselection}`);
}

const siteUrl = getSiteUrl();

for (const route of routes) {
  const metadata = getMetadata(route);
  const document = createDocument(route, metadata, render(route), siteUrl);
  const filename = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  await writeFile(path.join(dist, filename), document, "utf8");
}

const notFoundMetadata = getMetadata("/404");
await writeFile(
  path.join(dist, "404.html"),
  createDocument("/404", notFoundMetadata, render("/404"), siteUrl),
  "utf8",
);

const robots = ["User-agent: *", "Allow: /"];
if (siteUrl) robots.push(`Sitemap: ${siteUrl}/sitemap.xml`);
await writeFile(path.join(dist, "robots.txt"), `${robots.join("\n")}\n`, "utf8");

if (siteUrl) {
  const urls = routes.map((route) => `  <url><loc>${escapeHtml(absoluteUrl(siteUrl, route))}</loc></url>`).join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");
}

await rm(path.join(dist, "server"), { recursive: true, force: true });

console.log(`Prerendered ${routes.length} public routes${siteUrl ? " with canonical URLs and sitemap" : " without canonical URLs (VITE_SITE_URL is not set)"}.`);
