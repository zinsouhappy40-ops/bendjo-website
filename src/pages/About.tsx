import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import PageHero from "../components/sections/PageHero";
import DocumentMeta from "../components/SEO/DocumentMeta";
import { routeMetadata } from "../seo/metadata";
import { products } from "../data/products";
import aboutHeroImage480 from "../assets/images/optimized/about-hero-480.webp";
import aboutHeroImage1024 from "../assets/images/optimized/about-hero-1024.webp";
import gestureImage480 from "../assets/images/optimized/about-gesture-480.webp";
import gestureImage1024 from "../assets/images/optimized/about-gesture-1024.webp";
import servingImage480 from "../assets/images/optimized/about-serving-480.webp";
import servingImage768 from "../assets/images/optimized/about-serving-768.webp";
import hibiscusIngredientImage480 from "../assets/images/optimized/ingredient-hibiscus-480.webp";
import hibiscusIngredientImage1024 from "../assets/images/optimized/ingredient-hibiscus-1024.webp";
import basilIngredientImage480 from "../assets/images/optimized/ingredient-basilic-480.webp";
import basilIngredientImage1024 from "../assets/images/optimized/ingredient-basilic-1024.webp";
import lemongrassIngredientImage480 from "../assets/images/optimized/ingredient-citronnelle-480.webp";
import lemongrassIngredientImage1024 from "../assets/images/optimized/ingredient-citronnelle-1024.webp";
import aproposHibiscusImage480 from "../assets/images/optimized/packaging-hibiscus-480.webp";
import aproposHibiscusImage768 from "../assets/images/optimized/packaging-hibiscus-768.webp";
import aproposBasilicImage480 from "../assets/images/optimized/packaging-basilic-480.webp";
import aproposBasilicImage768 from "../assets/images/optimized/packaging-basilic-768.webp";
import aproposCitronnelleImage480 from "../assets/images/optimized/packaging-citronnelle-480.webp";
import aproposCitronnelleImage768 from "../assets/images/optimized/packaging-citronnelle-768.webp";
import { ArrowRight } from "@phosphor-icons/react";

const principles = [
  {
    title: "Des ingrédients identifiables",
    text: "Hibiscus, basilic, citronnelle et clou de girofle composent les références actuelles.",
  },
  {
    title: "Une fabrication ancrée au Bénin",
    text: "Les infusions BenDjo sont fabriquées au Bénin avec des ingrédients locaux.",
  },
  {
    title: "Une attention portée au produit",
    text: "Chaque infusion est proposée dans un format clair : une boîte de 10 sachets.",
  },
  {
    title: "Des moments à partager",
    text: "Les infusions accompagnent les particuliers ; les services répondent aux besoins des entreprises.",
  },
];

const infusionProfiles = [
  {
    product: products[0],
    profile: "Fruité et rafraîchissant",
    description: "Fleurs d’hibiscus séchées au Bénin, pour une infusion rubis et légèrement acidulée.",
    tone: "bg-hibiscus",
    textTone: "text-on-leaf",
    imagePosition: "object-center",
    image: aproposHibiscusImage768,
    imageSrcSet: `${aproposHibiscusImage480} 480w, ${aproposHibiscusImage768} 768w`,
    imageWidth: 768,
    imageHeight: 768,
  },
  {
    product: products[1],
    profile: "Doux et aromatique",
    description: "Feuilles de basilic cultivées localement, pour une infusion douce et herbacée.",
    tone: "bg-basil",
    textTone: "text-leaf",
    imagePosition: "object-[center_38%]",
    image: aproposBasilicImage768,
    imageSrcSet: `${aproposBasilicImage480} 480w, ${aproposBasilicImage768} 768w`,
    imageWidth: 768,
    imageHeight: 768,
  },
  {
    product: products[2],
    profile: "Végétal et épicé",
    description: "Fraîcheur végétale de la citronnelle et pointe épicée du clou de girofle, à savourer chaud.",
    tone: "bg-lemongrass",
    textTone: "text-leaf",
    imagePosition: "object-center",
    image: aproposCitronnelleImage768,
    imageSrcSet: `${aproposCitronnelleImage480} 480w, ${aproposCitronnelleImage768} 768w`,
    imageWidth: 768,
    imageHeight: 768,
  },
];

const primaryLinkStyles =
  "inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-cream px-7 py-3.5 text-sm font-semibold text-copy transition-colors duration-300 hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-leaf sm:w-auto";

const secondaryLinkStyles =
  "inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md border border-lemongrass bg-lemongrass px-7 py-3.5 text-sm font-semibold text-copy transition-colors duration-300 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto";

function About() {
  return (
    <>
      <DocumentMeta {...routeMetadata.about} />

      <div>
        <PageHero id="about-title" label="La provenance vivante" title="Retrouver le goût des origines." description="Un geste simple, des ingrédients locaux et des infusions fabriquées au Bénin." image={aboutHeroImage1024} imageSrcSet={`${aboutHeroImage480} 480w, ${aboutHeroImage1024} 1024w`} imageSizes="(min-width: 1024px) 619px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)" imageAlt="Infusion BenDjo préparée avec des feuilles fraîches, des plantes aromatiques et des sachets individuels" imageWidth={1024} imageHeight={1024} imagePosition="50% 50%" imageScale={1.18} labelItems={[{ label: "Origine", value: "Bénin" }, { label: "Matière", value: "Ingrédients locaux" }, { label: "Geste", value: "Infuser et partager" }]} actions={<a href="#provenance" className="inline-flex min-h-11 items-center rounded-bendjo-sm text-sm font-semibold text-copy underline decoration-leaf/35 underline-offset-4 transition-colors hover:text-copy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream">Suivre la provenance</a>} />

        <section className="bg-leaf py-10 text-on-leaf sm:py-14 lg:py-18" aria-labelledby="purpose-title">
          <Container>
            <div className="grid gap-6 border-t border-cream/25 pt-5 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-14">
              <div>
                <p className="type-kicker max-w-xs text-on-leaf">Pourquoi valoriser ces infusions</p>
                <h2 id="purpose-title" className="type-section-title-lg mt-4 max-w-[15ch] text-on-leaf">
                  Le terroir béninois trouve sa place dans les gestes de tous les jours.
                </h2>
              </div>
              <div className="grid gap-5 border-t border-cream/20 pt-5 sm:grid-cols-2 sm:gap-8 md:mt-8 md:self-end">
                <p className="max-w-md text-base leading-8 text-on-leaf">
                  Les infusions BenDjo réunissent des ingrédients locaux dans un format conçu pour la préparation d’une tasse.
                </p>
                <p className="max-w-md text-base leading-8 text-on-leaf">
                  Leur fabrication au Bénin relie la provenance du produit au moment où l’on prépare et partage une infusion.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="provenance" className="scroll-mt-20 bg-kraft/20 py-12 sm:py-16 lg:py-20" aria-labelledby="terroir-title">
          <Container>
            <div className="grid gap-5 md:grid-cols-[0.78fr_1.22fr] md:items-end md:gap-10 lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-kraft" aria-hidden="true" />
                  <p className="type-label text-copy">Terroir béninois</p>
                </div>
                <h2 id="terroir-title" className="type-section-title-lg mt-4 max-w-[10ch] text-leaf sm:mt-5">
                  La matière avant les mots.
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-copy md:pb-1 sm:text-xl sm:leading-9">
                Feuilles, fleurs et tiges donnent à chaque infusion sa couleur, son parfum et sa présence.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <figure className="col-span-2 lg:col-span-1">
                <img src={hibiscusIngredientImage1024} srcSet={`${hibiscusIngredientImage480} 480w, ${hibiscusIngredientImage1024} 1024w`} sizes="(min-width: 1024px) 619px, calc(100vw - 40px)" alt="Fleurs d’hibiscus séchées" className="aspect-[4/3] w-full rounded-bendjo-md object-cover lg:aspect-[4/5]" width="1024" height="1024" loading="lazy" decoding="async" />
                <figcaption className="mt-2 text-sm font-semibold text-copy sm:mt-3">Hibiscus</figcaption>
              </figure>
              <div className="col-span-2 grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-1 lg:grid-cols-1">
                <figure>
                  <img src={basilIngredientImage1024} srcSet={`${basilIngredientImage480} 480w, ${basilIngredientImage1024} 1024w`} sizes="(min-width: 1024px) 413px, (min-width: 640px) calc(50vw - 30px), calc(50vw - 24px)" alt="Feuilles de basilic fraîches" className="aspect-[4/3] w-full rounded-bendjo-md object-cover lg:aspect-[5/4]" width="1024" height="1024" loading="lazy" decoding="async" />
                  <figcaption className="mt-2 text-sm font-semibold text-copy sm:mt-3">Basilic</figcaption>
                </figure>
                <figure>
                  <img src={lemongrassIngredientImage1024} srcSet={`${lemongrassIngredientImage480} 480w, ${lemongrassIngredientImage1024} 1024w`} sizes="(min-width: 1024px) 413px, (min-width: 640px) calc(50vw - 30px), calc(50vw - 24px)" alt="Tiges de citronnelle et clous de girofle" className="aspect-[4/3] w-full rounded-bendjo-md object-cover lg:aspect-[5/4]" width="1024" height="1024" loading="lazy" decoding="async" />
                  <figcaption className="mt-2 text-sm font-semibold text-copy sm:mt-3">Citronnelle et clou de girofle</figcaption>
                </figure>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-leaf py-10 text-on-leaf sm:py-12 lg:py-14" aria-labelledby="philosophy-title">
          <Container>
            <div className="border-t border-cream/25 pt-4 sm:pt-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <div>
                  <p className="type-kicker text-on-leaf">La philosophie, dans les faits</p>
                  <h2 id="philosophy-title" className="type-section-title mt-2 max-w-[16ch] text-on-leaf">
                  Une identité visible dans l’offre.
                  </h2>
                </div>
                <p className="max-w-md border-l border-kraft pl-4 text-sm leading-7 text-on-leaf sm:mb-1 sm:max-w-xs">
                  Des choix simples, lisibles dans chaque infusion et dans les moments qu’elle accompagne.
                </p>
              </div>
              <ol data-motion-group className="mt-7 grid border-t border-cream/25 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4" aria-label="Principes de BenDjo">
                {principles.map((principle) => (
                  <li data-motion-item key={principle.title} className="grid gap-2 border-b border-cream/25 py-4 sm:min-h-40 sm:border-r sm:px-5 sm:py-5 first:pl-0 last:border-r-0 last:pr-0 lg:min-h-44 lg:px-6">
                    <h3 className="max-w-[18ch] font-display text-xl leading-tight text-on-leaf sm:text-2xl">{principle.title}</h3>
                    <p className="max-w-[28ch] text-sm leading-6 text-on-leaf">{principle.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        <section className="overflow-hidden bg-cream pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14" aria-labelledby="gestures-title">
          <Container>
            <div className="grid gap-6 border-t border-leaf/20 pt-5 md:grid-cols-[0.82fr_1.18fr] md:items-end md:gap-10 lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-kraft" aria-hidden="true" />
                  <p className="type-label text-copy">Les gestes</p>
                </div>
                <h2 id="gestures-title" className="type-section-title-lg mt-4 max-w-[9ch] text-leaf">Préparer. Verser. Partager.</h2>
              </div>
              <p className="max-w-lg text-base leading-7 text-copy md:pb-1 sm:text-lg sm:leading-8">Le produit prend sa place au milieu des mains, des sachets et des tasses prêtes à être servies.</p>
            </div>

            <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-[1.32fr_0.68fr] md:items-end md:gap-5">
              <figure className="relative">
                <img src={gestureImage1024} srcSet={`${gestureImage480} 480w, ${gestureImage1024} 1024w`} sizes="(min-width: 768px) 705px, calc(100vw - 40px)" alt="Deux personnes préparent et servent des infusions BenDjo dans plusieurs tasses" className="aspect-[4/3] w-full rounded-bendjo-md object-cover object-center md:aspect-[16/9]" width="1024" height="1024" loading="lazy" decoding="async" />
                <figcaption className="mt-2 max-w-lg text-sm leading-6 text-copy sm:mt-3">Préparer plusieurs tasses, rendre le geste visible, laisser les infusions circuler.</figcaption>
              </figure>
              <figure className="md:pb-7">
                <img src={servingImage768} srcSet={`${servingImage480} 480w, ${servingImage768} 768w`} sizes="(min-width: 768px) 363px, calc(100vw - 40px)" alt="Infusion BenDjo versée dans une tasse près des boîtes et des sachets" className="aspect-[4/3] w-full rounded-bendjo-md object-cover object-center md:aspect-[4/5]" width="768" height="768" loading="lazy" decoding="async" />
              </figure>
            </div>
          </Container>
        </section>

        <section className="bg-cream pb-16 sm:pb-20 lg:pb-28" aria-labelledby="products-life-title">
          <Container>
            <div className="grid gap-6 border-t border-leaf/20 pt-8 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-12 lg:gap-20">
              <div>
                <p className="type-kicker text-copy">Les produits prennent vie</p>
                <h2 id="products-life-title" className="type-section-title mt-3 max-w-[11ch] text-leaf">Trois expressions du même terroir.</h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-copy md:pb-1">Chaque infusion porte une matière, une couleur et un profil distincts. Le packaging réel permet de les reconnaître.</p>
            </div>

            <div data-motion-group className="mt-8 grid gap-3 sm:mt-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {infusionProfiles.map(({ product, profile, description, tone, textTone, imagePosition, image, imageSrcSet, imageWidth, imageHeight }) => (
                <article data-motion-item key={product.id} className={`overflow-hidden rounded-bendjo-md ${tone} ${textTone} shadow-bendjo-card ring-1 ring-inset ring-leaf/10`}>
                  <figure className="aspect-[4/3] overflow-hidden">
                    <img src={image} srcSet={imageSrcSet} sizes="(min-width: 1024px) 341px, (min-width: 768px) calc(50vw - 36px), calc(100vw - 40px)" alt={product.alt} className={`h-full w-full object-cover ${imagePosition}`} width={imageWidth} height={imageHeight} loading="lazy" decoding="async" />
                  </figure>
                  <div className="flex min-h-48 flex-col justify-between gap-7 p-5 sm:min-h-52 sm:p-6 lg:p-7">
                    <p className="type-label w-fit bg-cream px-2 py-1 text-copy">Infusion naturelle</p>
                    <div>
                      <h3 className="type-product-title-sm">{product.name.replace("Infusion ", "")}</h3>
                      <p className="mt-3 text-sm font-semibold leading-5">{profile}</p>
                      <p className="mt-2 text-sm leading-6 opacity-90">{description}</p>
                      <p className="mt-2 text-xs">Boîte de 10 sachets</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-leaf py-16 text-on-leaf sm:py-20 lg:py-24" aria-labelledby="today-title">
          <Container>
            <div className="grid gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
              <div>
                <p className="type-kicker w-fit bg-cream px-2 py-1 text-copy">BenDjo aujourd’hui</p>
                <h2 id="today-title" className="type-section-title-lg mt-4 max-w-[10ch] text-on-leaf">Ancrée ici, présente au quotidien.</h2>
              </div>
              <dl className="grid border-t border-cream/30 sm:grid-cols-2">
                <div className="border-b border-cream/30 py-6 sm:pr-8">
                  <dt className="type-label w-fit bg-cream px-2 py-1 text-copy">Ancrage</dt>
                  <dd className="mt-2 font-display text-2xl text-on-leaf">Entreprise béninoise basée à Cotonou</dd>
                </div>
                <div className="border-b border-cream/30 py-6 sm:border-l sm:pl-8">
                  <dt className="type-label w-fit bg-cream px-2 py-1 text-copy">Produits</dt>
                  <dd className="mt-2 font-display text-2xl text-on-leaf">Infusions naturelles fabriquées au Bénin</dd>
                </div>
                <div className="border-b border-cream/30 py-6 sm:pr-8">
                  <dt className="type-label w-fit bg-cream px-2 py-1 text-copy">Entreprises</dt>
                  <dd className="mt-2 font-display text-2xl text-on-leaf">Petit-déjeuner en entreprise</dd>
                </div>
                <div className="border-b border-cream/30 py-6 sm:border-l sm:pl-8">
                  <dt className="type-label w-fit bg-cream px-2 py-1 text-copy">Événements</dt>
                  <dd className="mt-2 font-display text-2xl text-on-leaf">Service traiteur professionnel</dd>
                </div>
              </dl>
            </div>
          </Container>
        </section>

        <section className="bg-kraft/20 pb-10 pt-12 sm:pb-12 sm:pt-14 lg:pb-14 lg:pt-16" aria-labelledby="people-title">
          <Container>
            <div className="grid gap-5 border-t border-leaf/20 pt-5 md:grid-cols-[0.78fr_1.22fr] md:gap-10 lg:gap-16">
              <div>
                <p className="type-kicker text-copy">La marque, ici</p>
                <h2 id="people-title" className="type-section-title mt-3 max-w-[11ch] text-leaf">Une marque ancrée au Bénin.</h2>
              </div>
              <div className="border-y border-leaf/20 py-5 sm:py-6">
                <p className="max-w-2xl text-base leading-8 text-copy sm:text-lg">BenDjo propose des infusions naturelles fabriquées au Bénin, à partir d’ingrédients locaux.</p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-leaf pb-14 pt-10 text-on-leaf sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14" aria-labelledby="about-cta-title">
          <Container>
            <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-kraft" aria-hidden="true" />
                  <p className="type-label text-on-leaf">Prolonger l’expérience</p>
                </div>
                <h2 id="about-cta-title" className="type-section-title-lg mt-4 text-on-leaf">Choisir ce que vous souhaitez partager.</h2>
              </div>
              <div className="lg:pb-1">
                <p className="max-w-xl leading-8 text-on-leaf">Une infusion pour votre quotidien ou un moment à imaginer avec BenDjo pour votre entreprise.</p>
                <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row lg:mt-7">
                  <Link to="/products" className={`${primaryLinkStyles} gap-2 sm:min-w-52`}>Découvrir les infusions <ArrowRight size={18} weight="regular" aria-hidden="true" /></Link>
                  <Link to="/contact" className={`${secondaryLinkStyles} sm:min-w-44`}>Présenter un besoin</Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default About;
