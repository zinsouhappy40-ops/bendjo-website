import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import ImageBlock from "../components/ui/ImageBlock";
import Button from "../components/ui/Button";
import BrandIcon from "../components/ui/BrandIcon";
import rangeImage from "../assets/images/products/WhatsApp Image 2026-07-22 at 22.23.10.jpeg";
import detailImage from "../assets/images/products/WhatsApp Image 2026-07-22 at 22.22.58 (1).jpeg";
import DocumentMeta from "../components/SEO/DocumentMeta";

function About() {
  return (
    <>
      <DocumentMeta
        title="À propos de BenDjo | Une marque béninoise"
        description="Découvrez BenDjo, marque béninoise fondée en 2025 et basée à Cotonou, autour des infusions naturelles et des services en entreprise."
      />
      <div>
        <section className="bg-cream bg-grain overflow-hidden py-20 sm:py-28 lg:py-40" aria-labelledby="about-title">
          <Container className="relative grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
            <span className="pointer-events-none absolute -right-10 top-4 font-display text-[14rem] leading-none text-leaf/[0.06] sm:text-[20rem]" aria-hidden="true">B</span>
            <div className="relative z-10 lg:pb-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-kraft">À propos de BenDjo</p>
              <h1 id="about-title" className="mt-5 max-w-[10ch] font-display text-6xl leading-[0.92] text-leaf sm:text-7xl lg:text-[6.5rem]">
                Une origine qui se partage.
              </h1>
              <p className="mt-8 max-w-md text-base leading-8 text-leaf/75 sm:text-lg">
                Fondée en 2025 et basée à Cotonou, BenDjo fait entrer les ingrédients locaux dans les habitudes d’aujourd’hui.
              </p>
            </div>
            <div className="relative lg:-mr-10">
              <div className="absolute -top-4 left-8 right-8 h-1 bg-kraft/70" aria-hidden="true" />
              <ImageBlock src={rangeImage} alt="Gamme d’infusions BenDjo présentée dans son packaging réel" width="1280" height="1155" ratio="landscape" />
              <p className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-leaf/55"><span>Cotonou, Bénin</span><span>Depuis 2025</span></p>
            </div>
          </Container>
        </section>

        <section className="bg-kraft/15 py-20 sm:py-28 lg:py-36" aria-labelledby="about-origin-title">
          <Container className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">
            <div className="order-2 lg:order-1 lg:pl-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-kraft">01 · L’ancrage</p>
              <h2 id="about-origin-title" className="mt-5 max-w-xl font-display text-5xl leading-[0.98] text-leaf sm:text-6xl">Le local comme point de départ.</h2>
              <p className="mt-7 max-w-lg text-base leading-8 text-leaf/75 sm:text-lg">
                BenDjo valorise les produits locaux à travers ses infusions naturelles et accompagne aussi les entreprises avec des services pensés pour leurs moments de partage.
              </p>
              <div className="mt-10 flex items-center gap-4 border-t border-leaf/15 pt-5 text-sm text-leaf/70">
                <BrandIcon name="leaf" className="h-10 w-10 text-leaf" />
                <span>Une présence béninoise, une composition contemporaine.</span>
              </div>
            </div>
            <figure className="order-1 lg:order-2">
              <img src={detailImage} alt="Détail du packaging d’une infusion BenDjo" className="aspect-[4/5] w-full rounded-bendjo-lg object-cover lg:-rotate-2" width="574" height="800" loading="lazy" decoding="async" />
              <figcaption className="mt-4 max-w-xs font-display text-2xl leading-tight text-leaf">L’héritage dans la matière, la modernité dans la composition.</figcaption>
            </figure>
          </Container>
        </section>

        <section className="bg-cream py-20 sm:py-28 lg:py-36" aria-labelledby="about-story-title">
          <Container className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
            <div><p className="font-display text-[7rem] leading-none text-kraft/25 sm:text-[10rem]" aria-hidden="true">02</p><p className="text-xs font-medium uppercase tracking-[0.2em] text-kraft">Notre histoire</p></div>
            <div className="max-w-3xl border-t border-leaf/15 pt-6">
              <h2 id="about-story-title" className="font-display text-5xl leading-[0.98] text-leaf sm:text-6xl">Une histoire qui sera racontée avec justesse.</h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-leaf/75 sm:text-lg">La naissance de BenDjo, l’origine de son nom et les personnes derrière la marque seront complétées avec l’équipe BenDjo, à partir d’informations validées. Nous préférons laisser une place honnête à cette parole plutôt que d’inventer ce qui doit venir d’elle.</p>
              <div className="mt-10 flex items-center gap-4 text-leaf/70"><BrandIcon name="hibiscus" className="h-12 w-12 text-hibiscus" /><span className="text-sm">Une marque en construction, avec ses racines bien présentes.</span></div>
            </div>
          </Container>
        </section>

        <section className="bg-leaf bg-grain py-20 text-cream sm:py-28 lg:py-32" aria-labelledby="about-cta-title">
          <Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            <div><p className="text-xs font-medium uppercase tracking-[0.2em] text-cream/60">03 · Poursuivre</p><h2 id="about-cta-title" className="mt-5 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl">Des racines à découvrir, des moments à créer.</h2></div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link to="/products"><Button variant="secondary" className="w-full border-cream text-cream hover:bg-cream/10 sm:w-auto">Découvrir nos infusions</Button></Link><Link to="/services"><Button variant="secondary" className="w-full border-cream text-cream hover:bg-cream/10 sm:w-auto">Découvrir nos services</Button></Link></div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default About;
