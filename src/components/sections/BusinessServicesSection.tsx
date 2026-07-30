import { Link } from "react-router-dom";
import Container from "../ui/Container";
import serviceImage from "../../assets/images/products/729161180_122187701708783112_2133895267397082137_n.jpg";

const contactLinkStyles = "inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-cream px-6 py-3 font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto";

function BusinessServicesSection() {
  return (
    <section className="bg-ink py-20 text-cream sm:py-28 lg:py-32" aria-labelledby="business-services-title">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
        <div>
          <p className="text-sm font-semibold text-cream/75">Pour les entreprises</p>
          <h2 id="business-services-title" className="mt-3 max-w-xl font-display text-4xl leading-[0.98] text-cream sm:text-5xl lg:text-6xl">
            Des services pour vos moments de partage.
          </h2>
          <div className="mt-10 border-t border-cream/25">
            <article className="grid gap-3 border-b border-cream/25 py-7 sm:grid-cols-[0.7fr_1fr] sm:gap-8">
              <h3 className="font-display text-2xl text-cream">Petit-déjeuner en entreprise</h3>
              <p className="leading-7 text-cream/80">BenDjo propose un service de petit-déjeuner destiné aux entreprises.</p>
            </article>
            <article className="grid gap-3 border-b border-cream/25 py-7 sm:grid-cols-[0.7fr_1fr] sm:gap-8">
              <h3 className="font-display text-2xl text-cream">Service traiteur</h3>
              <p className="leading-7 text-cream/80">BenDjo propose un service traiteur, notamment pour les événements de lancement de produit.</p>
            </article>
          </div>
          <Link to="/contact" className={`${contactLinkStyles} mt-8`}>Présenter votre besoin</Link>
        </div>

        <figure>
          <img
            src={serviceImage}
            alt="Équipe servant des boissons BenDjo lors d’un événement"
            className="aspect-[4/3] w-full rounded-bendjo-md bg-kraft/10 object-cover lg:aspect-[4/5]"
            width="1170"
            height="1077"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </Container>
    </section>
  );
}

export default BusinessServicesSection;
