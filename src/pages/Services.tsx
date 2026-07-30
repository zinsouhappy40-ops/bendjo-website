import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import TextLink from "../components/ui/TextLink";
import BrandIcon, { type BrandIconName } from "../components/ui/BrandIcon";
import { services } from "../data/services";
import DocumentMeta from "../components/SEO/DocumentMeta";
import servicesHeroImage from "../assets/images/products/729161180_122187701708783112_2133895267397082137_n.jpg";
import breakfastImage from "../assets/images/products/peti-dejeuner.jpg";
import cateringImage from "../assets/images/restauration/517380751_122141964872783112_1122872636327833203_n.jpg";

const serviceLabels: Record<string, string> = { infusions: "Infusions", "corporate-breakfast": "Entreprises", catering: "Événements" };
const serviceIcons: Record<string, BrandIconName> = { infusions: "leaf", "corporate-breakfast": "cup", catering: "hibiscus" };
const serviceTones: Record<string, string> = { infusions: "text-leaf", "corporate-breakfast": "text-lemongrass", catering: "text-hibiscus" };
const whatsappNumber = "2290162014161";
const whatsappMessage = encodeURIComponent("Bonjour BenDjo, je souhaite vous présenter un besoin pour mon entreprise.");

function Services() {
  return (
    <>
      <DocumentMeta title="Services BenDjo | Petit-déjeuner et traiteur en entreprise" description="Découvrez les services BenDjo : infusions naturelles, petit-déjeuner en entreprise et service traiteur pour les événements de lancement de produit." />
      <div>
        <section className="overflow-hidden bg-cream" aria-labelledby="services-title">
          <Container className="grid gap-8 py-10 sm:gap-10 sm:py-14 md:py-16 lg:min-h-[calc(100svh-76px)] lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch lg:gap-16 lg:py-8">
            <div className="flex flex-col justify-center lg:py-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-kraft" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/75">Services pour entreprises</p>
              </div>
              <h1 id="services-title" className="mt-5 max-w-[12ch] font-display text-[clamp(2.25rem,10vw,3rem)] leading-[0.95] tracking-[-0.025em] text-ink sm:text-6xl lg:text-[4.5rem]">Petit-déjeuner en entreprise et service traiteur.</h1>
              <div className="mt-6 max-w-lg border-t border-ink/15 pt-5 sm:mt-8 sm:pt-6">
                <p className="text-base leading-7 text-ink/80 sm:text-lg sm:leading-8">BenDjo propose des prestations pour les entreprises et leurs événements.</p>
                <p className="mt-3 text-sm font-semibold text-ink">Cotonou et Abomey-Calavi</p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Link to="/contact" className="inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">Présenter votre besoin</Link>
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md border border-ink/70 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">Échanger sur WhatsApp</a>
              </div>
            </div>

            <figure className="relative min-h-0 bg-kraft/20 lg:my-4">
              <img
                src={servicesHeroImage}
                alt="Deux personnes préparent de nombreux gobelets sur un stand où la marque BenDjo est affichée."
                width="1170"
                height="1077"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="aspect-[16/10] h-full min-h-0 w-full object-cover object-center sm:aspect-[16/9] lg:aspect-auto"
              />
              <figcaption className="mx-4 -mt-5 grid grid-cols-2 border border-ink/10 bg-cream text-ink sm:absolute sm:bottom-5 sm:left-5 sm:mx-0 sm:mt-0 sm:min-w-[25rem] sm:shadow-[0_18px_45px_rgba(32,59,40,0.18)]">
                <span className="border-r border-ink/15 px-4 py-3">
                  <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink/70">Offres</span>
                  <span className="mt-1 block text-sm font-semibold leading-5">Petit-déjeuner · Traiteur</span>
                </span>
                <span className="px-4 py-3">
                  <span className="block text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink/70">Zone</span>
                  <span className="mt-1 block text-sm font-semibold leading-5">Cotonou · Abomey-Calavi</span>
                </span>
              </figcaption>
            </figure>
          </Container>
        </section>

        <section className="bg-ink py-16 text-cream sm:py-20 lg:py-24" aria-labelledby="services-context-title">
          <Container className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-cream/70">Pour votre entreprise</p>
              <h2 id="services-context-title" className="mt-3 max-w-[12ch] font-display text-4xl leading-[1.02] text-cream sm:text-5xl">Choisir selon votre contexte</h2>
            </div>

            <div className="border-t border-cream/25">
              <article className="grid gap-4 border-b border-cream/25 py-6 sm:grid-cols-[0.8fr_1fr] sm:gap-8 lg:grid-cols-[0.8fr_1fr_auto] lg:items-center">
                <h3 className="font-display text-2xl leading-tight text-cream">Petit-déjeuner en entreprise</h3>
                <p className="leading-7 text-cream/75">BenDjo propose un service de petit-déjeuner destiné aux entreprises.</p>
                <TextLink to="/contact" className="text-cream decoration-cream/40 hover:text-cream/75 focus-visible:ring-cream focus-visible:ring-offset-ink sm:col-start-2 lg:col-start-auto">Présenter ce besoin</TextLink>
              </article>
              <article className="grid gap-4 border-b border-cream/25 py-6 sm:grid-cols-[0.8fr_1fr] sm:gap-8 lg:grid-cols-[0.8fr_1fr_auto] lg:items-center">
                <h3 className="font-display text-2xl leading-tight text-cream">Événement professionnel</h3>
                <p className="leading-7 text-cream/75">BenDjo propose un service traiteur pour les événements professionnels.</p>
                <TextLink to="/contact" className="text-cream decoration-cream/40 hover:text-cream/75 focus-visible:ring-cream focus-visible:ring-offset-ink sm:col-start-2 lg:col-start-auto">Parler de votre événement</TextLink>
              </article>
              <article className="grid gap-4 border-b border-cream/25 py-6 sm:grid-cols-[0.8fr_1fr] sm:gap-8 lg:grid-cols-[0.8fr_1fr_auto] lg:items-center">
                <h3 className="font-display text-2xl leading-tight text-cream">Lancement de produit</h3>
                <p className="leading-7 text-cream/75">Le service traiteur BenDjo est notamment proposé pour les événements de lancement de produit.</p>
                <TextLink to="/contact" className="text-cream decoration-cream/40 hover:text-cream/75 focus-visible:ring-cream focus-visible:ring-offset-ink sm:col-start-2 lg:col-start-auto">Parler de votre lancement</TextLink>
              </article>
            </div>
          </Container>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-28" aria-labelledby="corporate-breakfast-title">
          <Container className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-ink/75">Petit-déjeuner en entreprise</p>
              <h2 id="corporate-breakfast-title" className="mt-3 max-w-[12ch] font-display text-4xl leading-[1.02] text-leaf sm:text-5xl lg:text-6xl">Un petit-déjeuner pour votre temps d’équipe.</h2>
              <img
                src={breakfastImage}
                alt="Un gobelet BenDjo et un repas emballé posés sur un bureau."
                width="1536"
                height="2048"
                loading="lazy"
                decoding="async"
                className="mt-8 aspect-[4/3] h-auto w-full rounded-bendjo-md object-cover object-[center_38%] sm:aspect-video lg:aspect-[4/5]"
              />
            </div>

            <div className="border-t border-leaf/20 pt-7 lg:mt-2">
              <p className="max-w-2xl text-lg leading-8 text-ink/80 sm:text-xl sm:leading-9">BenDjo propose un service de petit-déjeuner destiné aux entreprises, pour une réunion ou un moment d’équipe.</p>
              <div className="mt-8 border-y border-leaf/20 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/75">Contextes concernés</p>
                <p className="mt-3 font-display text-2xl leading-snug text-leaf">Entreprise · Réunion · Moment d’équipe</p>
              </div>
              <p className="mt-7 max-w-xl leading-7 text-ink/70">Les modalités sont définies avec BenDjo selon le besoin de votre entreprise.</p>
              <Link to="/contact" className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">Présenter votre besoin</Link>
            </div>
          </Container>
        </section>

        <section className="bg-ink py-16 text-cream sm:py-20 lg:py-28" aria-labelledby="catering-events-title">
          <Container className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-20">
            <div className="lg:order-2">
              <p className="text-sm font-semibold text-cream/70">Traiteur et événements</p>
              <h2 id="catering-events-title" className="mt-3 max-w-[12ch] font-display text-4xl leading-[1.02] text-cream sm:text-5xl lg:text-6xl">Un service traiteur pour vos événements professionnels.</h2>
              <img
                src={cateringImage}
                alt="Plusieurs emballages BenDjo préparés et alignés sur une table."
                width="960"
                height="720"
                loading="lazy"
                decoding="async"
                className="mt-8 aspect-[4/3] h-auto w-full rounded-bendjo-md object-cover"
              />
            </div>

            <div className="border-t border-cream/25 pt-7 lg:order-1 lg:mt-2">
              <p className="max-w-2xl text-lg leading-8 text-cream/80 sm:text-xl sm:leading-9">BenDjo propose un service traiteur destiné aux événements professionnels, notamment aux lancements de produit.</p>
              <div className="mt-8 border-y border-cream/25">
                <p className="py-4 font-display text-2xl leading-snug text-cream">Événement professionnel</p>
                <p className="border-t border-cream/25 py-4 font-display text-2xl leading-snug text-cream">Lancement de produit</p>
                <p className="border-t border-cream/25 py-4 font-display text-2xl leading-snug text-cream">Réception ou moment de marque</p>
              </div>
              <p className="mt-7 max-w-xl leading-7 text-cream/75">La prestation est définie avec BenDjo selon le besoin de votre entreprise.</p>
              <Link to="/contact" className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto">Présenter votre besoin</Link>
            </div>
          </Container>
        </section>

        <section className="bg-cream py-16 sm:py-20 lg:py-24" aria-labelledby="services-contribution-title">
          <Container className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-ink/75">Ce que BenDjo apporte</p>
              <h2 id="services-contribution-title" className="mt-3 max-w-[13ch] font-display text-4xl leading-[1.02] text-leaf sm:text-5xl">Une offre pensée pour vos moments professionnels</h2>
            </div>

            <ul className="border-t border-leaf/20 text-leaf">
              <li className="border-b border-leaf/20 py-5 font-display text-2xl leading-snug">Les infusions naturelles BenDjo</li>
              <li className="border-b border-leaf/20 py-5 font-display text-2xl leading-snug">L’accompagnement des entreprises</li>
              <li className="border-b border-leaf/20 py-5 font-display text-2xl leading-snug">Un ancrage à Cotonou et Abomey-Calavi</li>
              <li className="border-b border-leaf/20 py-5 font-display text-2xl leading-snug">Une approche adaptée au contexte de chaque demande</li>
            </ul>
          </Container>
        </section>

        <section className="bg-kraft/15 py-16 sm:py-20 lg:py-24" aria-labelledby="prepare-request-title">
          <Container className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
            <div>
              <h2 id="prepare-request-title" className="max-w-[12ch] font-display text-4xl leading-[1.02] text-leaf sm:text-5xl">Préparer votre demande</h2>
              <p className="mt-5 max-w-lg leading-7 text-ink/75">Ces informations peuvent aider BenDjo à orienter votre demande. Elles ne constituent pas une procédure obligatoire.</p>
            </div>

            <div>
              <ul className="border-t border-leaf/20 text-leaf">
                <li className="border-b border-leaf/20 py-4 text-lg font-medium">Le type de besoin</li>
                <li className="border-b border-leaf/20 py-4 text-lg font-medium">Le lieu</li>
                <li className="border-b border-leaf/20 py-4 text-lg font-medium">La date envisagée</li>
                <li className="border-b border-leaf/20 py-4 text-lg font-medium">Le nombre approximatif de personnes, si connu</li>
              </ul>
              <p className="mt-7 max-w-xl leading-7 text-ink/75">Vous pourrez transmettre les éléments dont vous disposez au moment de présenter votre besoin.</p>
            </div>
          </Container>
        </section>

        <section className="bg-kraft/15 py-20 sm:py-28 lg:py-36" aria-labelledby="services-list-title">
          <Container>
            <div className="mb-14 grid gap-6 lg:grid-cols-[0.5fr_1fr] lg:items-end"><p id="services-list-title" className="text-xs font-medium uppercase tracking-[0.2em] text-kraft">Une offre en trois gestes</p><p className="max-w-xl font-display text-3xl leading-tight text-leaf sm:text-4xl">Des réponses simples, pensées pour le quotidien comme pour les temps forts.</p></div>
            <div className="space-y-20">
              {services.map((service, index) => (
                <article key={service.id} className={`grid gap-8 border-t border-leaf/20 pt-6 md:grid-cols-[0.35fr_1fr_0.4fr] md:gap-12 ${index % 2 === 1 ? "md:pl-[8%]" : ""}`}>
                  <div className="flex items-start justify-between gap-5 md:block"><p className="text-xs font-medium uppercase tracking-[0.18em] text-kraft">{String(index + 1).padStart(2, "0")} · {serviceLabels[service.id]}</p><BrandIcon name={serviceIcons[service.id]} className={`h-12 w-12 shrink-0 md:mt-12 ${serviceTones[service.id]}`} /></div>
                  <div className="max-w-2xl"><h2 className="font-display text-4xl leading-tight text-leaf sm:text-5xl">{service.name}</h2><p className="mt-5 text-base leading-8 text-leaf/75 sm:text-lg">{service.description}</p></div>
                  <div className="self-end"><TextLink to={service.ctaTarget}>{service.ctaLabel}</TextLink><p className="mt-3 text-xs leading-5 text-leaf/55">Échangeons avec BenDjo pour préciser votre besoin.</p></div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-ink py-16 text-cream sm:py-20 lg:py-24" aria-labelledby="services-contact-title">
          <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-cream/70">Votre demande</p>
              <h2 id="services-contact-title" className="mt-3 max-w-[13ch] font-display text-4xl leading-[1.02] text-cream sm:text-5xl lg:text-6xl">Présentez votre besoin à BenDjo</h2>
            </div>
            <div>
              <p className="max-w-xl leading-7 text-cream/80">Présentez votre contexte à BenDjo avec les informations dont vous disposez : type de besoin, lieu, date envisagée et nombre approximatif de personnes si connu.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto">Présenter votre besoin</Link>
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md border border-cream px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto">Échanger sur WhatsApp</a>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Services;
