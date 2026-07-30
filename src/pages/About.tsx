import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import ImageBlock from "../components/ui/ImageBlock";
import BrandIcon from "../components/ui/BrandIcon";
import rangeImage from "../assets/images/products/WhatsApp Image 2026-07-22 at 22.23.10.jpeg";
import detailImage from "../assets/images/products/WhatsApp Image 2026-07-22 at 22.22.58 (1).jpeg";
import DocumentMeta from "../components/SEO/DocumentMeta";

function About() {
  return (
    <>
      <DocumentMeta
        title="À propos de BenDjo | Une marque béninoise"
        description="Découvrez BenDjo, marque béninoise basée à Cotonou, autour des infusions naturelles et des services en entreprise."
      />
      <div>
        <section className="bg-cream bg-grain overflow-hidden py-20 sm:py-28 lg:py-40" aria-labelledby="about-title">
          <Container className="relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
            <span className="pointer-events-none absolute -right-10 top-4 font-display text-[14rem] leading-none text-leaf/[0.06] sm:text-[20rem]" aria-hidden="true">B</span>
            <div className="relative z-10 lg:pb-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/75">À propos de BenDjo</p>
              <h1 id="about-title" className="mt-5 max-w-[10ch] font-display text-6xl leading-[0.92] text-leaf sm:text-7xl lg:text-[6.5rem]">
                Une origine qui se partage.
              </h1>
              <p className="mt-8 max-w-md text-base leading-8 text-ink/80 sm:text-lg">
                Basée à Cotonou, BenDjo fait entrer les ingrédients locaux dans les habitudes d’aujourd’hui.
              </p>
            </div>
            <div className="relative lg:-mr-10">
              <div className="absolute -top-4 left-8 right-8 h-1 bg-kraft/70" aria-hidden="true" />
              <ImageBlock src={rangeImage} alt="Coffret ouvert contenant six boîtes d’infusion Citronnelle BenDjo" width="1280" height="1155" ratio="landscape" loading="eager" fetchPriority="high" />
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-ink/75">Cotonou, Bénin</p>
            </div>
          </Container>
        </section>

        <section className="bg-kraft/15 py-20 sm:py-28 lg:py-36" aria-labelledby="about-origin-title">
          <Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">
            <div className="order-2 lg:order-1 lg:pl-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/75">01 · L’ancrage</p>
              <h2 id="about-origin-title" className="mt-5 max-w-xl font-display text-5xl leading-[0.98] text-leaf sm:text-6xl">Le local comme point de départ.</h2>
              <p className="mt-7 max-w-lg text-base leading-8 text-ink/80 sm:text-lg">
                BenDjo valorise les produits locaux à travers ses infusions naturelles et accompagne aussi les entreprises avec des services pensés pour leurs moments de partage.
              </p>
              <div className="mt-10 flex items-center gap-4 border-t border-leaf/15 pt-5 text-sm text-ink/80">
                <BrandIcon name="leaf" className="h-10 w-10 text-leaf" />
                <span>Une marque béninoise basée à Cotonou.</span>
              </div>
            </div>
            <figure className="order-1 lg:order-2">
              <img src={detailImage} alt="Détail du packaging d’une infusion BenDjo" className="aspect-[4/5] w-full rounded-bendjo-lg object-cover lg:-rotate-2" width="574" height="800" loading="lazy" decoding="async" />
              <figcaption className="mt-4 max-w-xs font-display text-2xl leading-tight text-leaf">Des ingrédients locaux dans les infusions BenDjo.</figcaption>
            </figure>
          </Container>
        </section>

        <section className="bg-cream py-20 sm:py-28 lg:py-36" aria-labelledby="about-provenance-title">
          <Container className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
            <div><p className="font-display text-[7rem] leading-none text-kraft/25 sm:text-[10rem]" aria-hidden="true">02</p><p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/75">La provenance</p></div>
            <div className="max-w-3xl border-t border-leaf/15 pt-6">
              <h2 id="about-provenance-title" className="font-display text-5xl leading-[0.98] text-leaf sm:text-6xl">Des ingrédients locaux aux moments partagés.</h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-ink/80 sm:text-lg">BenDjo fabrique au Bénin des infusions à partir d’ingrédients locaux. Les références confirmées sont l’Hibiscus, le Basilic et la Citronnelle associée au clou de girofle.</p>
              <div className="mt-10 flex items-center gap-4 text-ink/80"><BrandIcon name="hibiscus" className="h-12 w-12 text-hibiscus" /><span className="text-sm">BenDjo relie ses produits alimentaires locaux aux moments partagés, avec ses infusions et ses services pour les entreprises.</span></div>
            </div>
          </Container>
        </section>

        <section className="bg-leaf bg-grain py-20 text-cream sm:py-28 lg:py-32" aria-labelledby="about-cta-title">
          <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-white">03 · Poursuivre</p><h2 id="about-cta-title" className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl">Des infusions à découvrir, des moments à partager.</h2></div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link to="/products" className="inline-flex min-h-11 w-full items-center justify-center rounded-bendjo-md border border-cream bg-transparent px-6 py-3 font-semibold text-cream transition-all duration-300 ease-bendjo hover:-translate-y-0.5 hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-leaf sm:w-auto">Découvrir nos infusions</Link>
              <Link to="/services" className="inline-flex min-h-11 w-full items-center justify-center rounded-bendjo-md border border-cream bg-transparent px-6 py-3 font-semibold text-cream transition-all duration-300 ease-bendjo hover:-translate-y-0.5 hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-leaf sm:w-auto">Découvrir nos services</Link>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default About;
