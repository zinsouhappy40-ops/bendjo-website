import { renderToString } from "react-dom/server";
import ServerApp from "./ServerApp";
import { getSiteUrl, routeMetadata, type RouteMetadata } from "./seo/metadata";

const metadataByPath = new Map<string, RouteMetadata>([
  [routeMetadata.home.pathname, routeMetadata.home],
  [routeMetadata.products.pathname, routeMetadata.products],
  [routeMetadata.services.pathname, routeMetadata.services],
  [routeMetadata.about.pathname, routeMetadata.about],
  [routeMetadata.contact.pathname, routeMetadata.contact],
]);

export function render(url: string) {
  return renderToString(<ServerApp location={url} />);
}

export function getMetadata(pathname: string) {
  return metadataByPath.get(pathname) ?? routeMetadata.notFound;
}

export { getSiteUrl };
