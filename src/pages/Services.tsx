import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import PageHero from "../components/sections/PageHero";
import DocumentMeta from "../components/SEO/DocumentMeta";
import servicesHeroImage480 from "../assets/images/optimized/services-hero-480.webp";
import servicesHeroImage1024 from "../assets/images/optimized/services-hero-1024.webp";
import breakfastImage480 from "../assets/images/optimized/services-breakfast-480.webp";
import breakfastImage1024 from "../assets/images/optimized/services-breakfast-1024.webp";
import breakfastSecondaryImage480 from "../assets/images/optimized/services-breakfast-detail-480.webp";
import breakfastSecondaryImage1024 from "../assets/images/optimized/services-breakfast-detail-1024.webp";
import cateringImage480 from "../assets/images/optimized/services-event-480.webp";
import cateringSecondaryImage480 from "../assets/images/optimized/services-event-detail-480.webp";
import { ArrowUpRight } from "@phosphor-icons/react";

const whatsappNumber = "2290162014161";
const whatsappMessage = encodeURIComponent("Bonjour BenDjo, je souhaite vous présenter un besoin pour mon entreprise.");

function Services() {
  return (
    <>
      <DocumentMeta title="Services BenDjo | Petit-déjeuner et traiteur en entreprise" description="Découvrez les services BenDjo : infusions naturelles, petit-déjeuner en entreprise et service traiteur pour les événements de lancement de produit." />
      <div>
         <PageHero id="services-title" label="Services pour entreprises" title="Petit-déjeuner en entreprise et service traiteur." description={<><span>BenDjo propose des prestations pour les entreprises et leurs événements.</span><span className="mt-3 block text-sm font-semibold text-ink">Cotonou et Abomey-Calavi</span></>} image={servicesHeroImage1024} imageSrcSet={`${servicesHeroImage480} 480w, ${servicesHeroImage1024} 1024w`} imageSizes="(min-width: 1024px) 619px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)" imageAlt="Table préparée avec des tasses d’infusion et une présentation de restauration pour un moment professionnel" imageWidth={1024} imageHeight={576} imagePosition="center" labelItems={[{ label: "Parcours", value: "Entreprises" }]} actions={<><Link to="/contact" className="inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">Présenter votre besoin</Link><a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-bendjo-md border border-ink/70 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">Échanger sur WhatsApp <ArrowUpRight size={18} weight="regular" aria-hidden="true" /></a></>} />

        <section className="bg-ink py-9 text-cream sm:py-11 lg:py-12" aria-labelledby="services-context-title">
          <Container className="grid gap-6 lg:grid-cols-[0.55fr_1fr] lg:gap-12">
            <div>
              <p className="type-kicker text-cream/70">Pour votre entreprise</p>
              <h2 id="services-context-title" className="type-section-title mt-3 text-cream">Choisir selon votre contexte</h2>
            </div>

            <div data-motion-group className="border-t border-cream/25">
              <article data-motion-item className="grid gap-2 border-b border-cream/25 py-4 sm:grid-cols-[0.8fr_1fr] sm:gap-x-8 lg:grid-cols-[0.8fr_1fr_auto] lg:items-center">
                <h3 className="font-display text-2xl leading-tight text-cream">Petit-déjeuner en entreprise</h3>
                <p className="leading-7 text-cream/75">BenDjo propose un service de petit-déjeuner destiné aux entreprises.</p>
                <a href="#petit-dejeuner" className="inline-flex min-h-11 items-center rounded-bendjo-sm text-cream underline decoration-cream/40 underline-offset-4 transition-colors hover:text-cream/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:col-start-2 lg:col-start-auto">Découvrir l’offre</a>
              </article>
              <article data-motion-item className="grid gap-2 border-b border-cream/25 py-4 sm:grid-cols-[0.8fr_1fr] sm:gap-x-8 lg:grid-cols-[0.8fr_1fr_auto] lg:items-center">
                <h3 className="font-display text-2xl leading-tight text-cream">Événement professionnel</h3>
                <p className="leading-7 text-cream/75">BenDjo propose un service traiteur pour les événements professionnels.</p>
                <a href="#traiteur-evenements" className="inline-flex min-h-11 items-center rounded-bendjo-sm text-cream underline decoration-cream/40 underline-offset-4 transition-colors hover:text-cream/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:col-start-2 lg:col-start-auto">Découvrir l’offre</a>
              </article>
              <article data-motion-item className="grid gap-2 border-b border-cream/25 py-3 sm:grid-cols-[0.8fr_1fr] sm:gap-x-8 lg:grid-cols-[0.8fr_1fr_auto] lg:items-center">
                <h3 className="font-display text-xl leading-tight text-cream/85">Lancement de produit</h3>
                <p className="leading-7 text-cream/75">Le service traiteur BenDjo est notamment proposé pour les événements de lancement de produit.</p>
                <a href="/contact?type=lancement" className="inline-flex min-h-11 items-center rounded-bendjo-sm text-cream underline decoration-cream/40 underline-offset-4 transition-colors hover:text-cream/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:col-start-2 lg:col-start-auto">Voir le contexte</a>
              </article>
            </div>
          </Container>
        </section>

        <section id="petit-dejeuner" className="scroll-mt-20 bg-cream py-14 sm:py-16 lg:py-20" aria-labelledby="corporate-breakfast-title">
          <Container>
            <div className="grid gap-7 border-t border-ink/20 pt-7 md:grid-cols-[0.7fr_1fr] md:gap-10 md:pt-8 lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-kraft" aria-hidden="true" />
                  <p className="type-label text-ink/75">Petit-déjeuner en entreprise</p>
                </div>
                <h2 id="corporate-breakfast-title" className="type-section-title-lg type-section-title-narrow mt-4 text-ink sm:mt-5">Un petit-déjeuner pour votre temps d’équipe.</h2>
              </div>

              <div>
                <p className="type-lead text-pretty text-ink/80 sm:text-xl sm:leading-9">BenDjo propose un service de petit-déjeuner destiné aux entreprises, pour une réunion ou un moment d’équipe.</p>
                <div className="mt-7 border-y border-leaf/20 py-5">
                  <p className="type-label text-ink/75">Contextes concernés</p>
                  <p className="mt-3 text-lg font-semibold leading-7 text-leaf">Entreprise · Réunion · Moment d’équipe</p>
                </div>
                <p className="mt-7 max-w-xl leading-7 text-ink/70">Les modalités sont définies avec BenDjo selon le besoin de votre entreprise.</p>
                <Link to="/contact?type=petit-dejeuner" className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">Présenter votre besoin</Link>
              </div>
            </div>

            <div className="mt-9 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12">
              <img
                src={breakfastImage1024}
                srcSet={`${breakfastImage480} 480w, ${breakfastImage1024} 1024w`}
                sizes="(min-width: 640px) calc(50vw - 32px), calc(100vw - 40px)"
                alt="Un gobelet BenDjo et un repas emballé posés sur un bureau."
                width="1024"
                height="1365"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-auto w-full rounded-bendjo-md object-cover object-[center_38%] lg:aspect-[16/9]"
              />
              <img
                src={breakfastSecondaryImage1024}
                srcSet={`${breakfastSecondaryImage480} 480w, ${breakfastSecondaryImage1024} 1024w`}
                sizes="(min-width: 640px) calc(50vw - 32px), calc(100vw - 40px)"
                alt="Un plat préparé avec des légumes, devant des bananes plantain et un bocal."
                width="1024"
                height="1365"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-auto w-full rounded-bendjo-md object-cover object-center lg:aspect-[16/9]"
              />
            </div>
          </Container>
        </section>

        <section id="traiteur-evenements" className="scroll-mt-20 bg-ink py-14 text-cream sm:py-16 lg:py-20" aria-labelledby="catering-events-title">
          <Container className="grid gap-7 border-t border-cream/25 pt-7 md:grid-cols-[1fr_0.7fr] md:gap-x-10 md:gap-y-8 md:pt-8 lg:gap-x-16">
            <div className="md:col-start-2 md:row-start-1">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-kraft" aria-hidden="true" />
                <p className="type-label text-cream/75">Traiteur et événements</p>
              </div>
              <h2 id="catering-events-title" className="type-section-title-lg type-section-title-narrow mt-4 text-cream sm:mt-5">Un service traiteur pour vos événements professionnels.</h2>
            </div>

            <div className="md:col-start-1 md:row-span-2 md:row-start-1">
              <p className="type-lead text-pretty text-cream/80 sm:text-xl sm:leading-9">BenDjo propose un service traiteur destiné aux événements professionnels, notamment aux lancements de produit.</p>
              <div className="mt-7 border-y border-cream/25">
                <p className="py-4 text-lg font-semibold leading-7 text-cream">Événement professionnel</p>
                <p id="lancement-produit" className="scroll-mt-24 border-t border-cream/25 py-4 text-lg font-semibold leading-7 text-cream">Lancement de produit</p>
                <p className="border-t border-cream/25 py-4 text-lg font-semibold leading-7 text-cream">Réception ou moment de marque</p>
              </div>
              <p className="mt-7 max-w-xl leading-7 text-cream/75">La prestation est définie avec BenDjo selon le besoin de votre entreprise.</p>
              <Link to="/contact?type=traiteur" className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto">Présenter votre besoin</Link>
            </div>

            <div className="grid grid-cols-2 gap-3 md:col-start-2 md:row-start-2 lg:gap-4">
              <img
                src={cateringImage480}
                alt="Service traiteur BenDjo préparé pour un événement professionnel."
                width="480"
                height="480"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-auto w-full rounded-bendjo-md object-cover"
              />
              <img
                src={cateringSecondaryImage480}
                alt="Réception professionnelle avec service traiteur et infusions BenDjo."
                width="480"
                height="480"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-auto w-full rounded-bendjo-md object-cover"
              />
            </div>
          </Container>
        </section>

        <section className="bg-cream py-12 sm:py-14 lg:py-16" aria-labelledby="services-contribution-title">
          <Container>
            <div className="grid gap-7 border-t border-ink/20 pt-7 md:grid-cols-[0.8fr_1fr] md:items-start md:gap-10 md:pt-8 lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-kraft" aria-hidden="true" />
                  <p className="type-label text-ink/75">Ce que BenDjo apporte</p>
                </div>
                <h2 id="services-contribution-title" className="type-section-title mt-4 max-w-[13ch] text-ink sm:mt-5">Une offre pensée pour vos moments professionnels</h2>
              </div>

              <ul className="text-ink">
                <li className="border-b border-ink/20 pb-4">
                  <span className="type-label block text-ink/65">En complément des prestations</span>
                  <span className="mt-2 block font-display text-xl leading-snug text-leaf">Les infusions naturelles BenDjo</span>
                </li>
                <li className="border-b border-ink/20 py-4 text-lg font-medium leading-7">L’accompagnement des entreprises</li>
                <li className="border-b border-ink/20 py-4 text-lg font-medium leading-7">Un ancrage à Cotonou et Abomey-Calavi</li>
                <li className="border-b border-ink/20 py-4 text-lg font-medium leading-7">Une approche adaptée au contexte de chaque demande</li>
              </ul>
            </div>
          </Container>
        </section>

        <section className="bg-kraft/15 py-12 sm:py-14 lg:py-16" aria-labelledby="prepare-request-title">
          <Container>
            <div className="grid gap-7 border-t border-ink/20 pt-7 md:grid-cols-[0.8fr_1fr] md:gap-10 md:pt-8 lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-kraft" aria-hidden="true" />
                  <p className="type-label text-ink/75">Informations utiles</p>
                </div>
                <h2 id="prepare-request-title" className="type-section-title mt-4 text-ink sm:mt-5">Préparer votre demande</h2>
                <p className="mt-5 max-w-lg leading-7 text-ink/80">Ces informations peuvent aider BenDjo à orienter votre demande. Elles ne constituent pas une procédure obligatoire.</p>
              </div>

              <div>
                <ul className="text-ink">
                  <li className="border-b border-ink/20 py-4 text-lg font-medium">Le type de besoin</li>
                  <li className="border-b border-ink/20 py-4 text-lg font-medium">Le lieu</li>
                  <li className="border-b border-ink/20 py-4 text-lg font-medium">La date envisagée</li>
                  <li className="border-b border-ink/20 py-4 text-lg font-medium">Le nombre approximatif de personnes, si connu</li>
                </ul>
                <p className="mt-7 max-w-xl leading-7 text-ink/80">Vous pourrez transmettre les éléments dont vous disposez au moment de présenter votre besoin.</p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-cream py-12 text-ink sm:py-16 lg:py-20" aria-labelledby="services-contact-title">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-kraft" aria-hidden="true" />
                   <p className="type-label text-ink/75">Votre demande</p>
                 </div>
                 <h2 id="services-contact-title" className="type-section-title-lg mt-4 text-ink sm:mt-5">Présentez votre contexte à BenDjo.</h2>
               </div>
               <div>
                 <p className="max-w-xl leading-7 text-ink/80">Indiquez les informations dont vous disposez pour orienter l’échange.</p>
                 <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                   <Link to="/contact" className="inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto lg:w-full xl:w-auto">Présenter votre besoin</Link>
                   <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md border border-ink/70 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto lg:w-full xl:w-auto">Échanger sur WhatsApp</a>
                 </div>
              </div>
            </div>

          </Container>
        </section>
      </div>
    </>
  );
}

export default Services;
