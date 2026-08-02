import { Link } from "react-router-dom";
import Container from "../ui/Container";
import serviceImage480 from "../../assets/images/optimized/home-services-480.webp";
import serviceImage1024 from "../../assets/images/optimized/home-services-1024.webp";

const contactLinkStyles = "type-action inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-cream px-6 py-3 text-copy transition-colors hover:bg-cream/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-leaf sm:w-auto";

function BusinessServicesSection() {
  return (
    <section className="bg-leaf py-16 text-on-leaf sm:py-20 lg:py-24" aria-labelledby="business-services-title">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <p className="type-kicker text-on-leaf">Pour les entreprises</p>
          <h2 id="business-services-title" className="type-section-title-lg mt-3 text-on-leaf">
            Des services pour vos moments de partage.
          </h2>
          <div data-motion-group className="mt-10 border-t border-cream/25">
            <article data-motion-item className="grid gap-3 border-b border-cream/25 py-7 sm:grid-cols-[0.7fr_1fr] sm:gap-8">
              <h3 className="font-display text-2xl leading-tight text-on-leaf">Petit-déjeuner en entreprise</h3>
              <p className="leading-7 text-on-leaf">BenDjo propose un service de petit-déjeuner destiné aux entreprises.</p>
            </article>
            <article data-motion-item className="grid gap-3 border-b border-cream/25 py-7 sm:grid-cols-[0.7fr_1fr] sm:gap-8">
              <h3 className="font-display text-2xl leading-tight text-on-leaf">Service traiteur</h3>
              <p className="leading-7 text-on-leaf">BenDjo propose un service traiteur, notamment pour les événements de lancement de produit.</p>
            </article>
          </div>
          <Link to="/contact" className={`${contactLinkStyles} mt-8`}>Présenter votre besoin</Link>
        </div>

        <figure>
          <img
            src={serviceImage1024}
            srcSet={`${serviceImage480} 480w, ${serviceImage1024} 1024w`}
            sizes="(min-width: 1024px) 570px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)"
            alt="Table préparée avec une tasse d’infusion et des éléments de petit-déjeuner dans une ambiance chaleureuse"
            className="aspect-[4/3] w-full rounded-bendjo-md bg-kraft/10 object-cover lg:aspect-[4/5]"
            width="1024"
            height="1365"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </Container>
    </section>
  );
}

export default BusinessServicesSection;
