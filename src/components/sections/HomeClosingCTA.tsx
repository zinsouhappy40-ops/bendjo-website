import { Link } from "react-router-dom";
import Container from "../ui/Container";

const primaryLinkStyles = "inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-ink px-6 py-3 font-semibold text-cream transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto";
const secondaryLinkStyles = "inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md border border-ink px-6 py-3 font-semibold text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto";

function HomeClosingCTA() {
  return (
    <section className="bg-kraft/20 py-20 sm:py-28" aria-labelledby="home-closing-title">
      <Container>
        <h2 id="home-closing-title" className="max-w-4xl font-display text-4xl leading-[0.98] text-ink sm:text-5xl lg:text-6xl">
          Choisissez votre infusion ou présentez votre besoin.
        </h2>
        <div className="mt-12 grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-semibold text-ink">Pour les particuliers</p>
            <p className="mt-3 max-w-md leading-7 text-ink/80">Découvrez les infusions BenDjo et préparez votre sélection.</p>
            <Link to="/products" className={`${primaryLinkStyles} mt-6`}>Choisir une infusion</Link>
          </div>
          <div className="border-t border-ink/15 pt-8 md:border-l md:border-t-0 md:pl-16 md:pt-0">
            <p className="font-semibold text-ink">Pour les entreprises</p>
            <p className="mt-3 max-w-md leading-7 text-ink/80">Présentez votre besoin de petit-déjeuner ou de service traiteur.</p>
            <Link to="/contact" className={`${secondaryLinkStyles} mt-6`}>Présenter votre besoin</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeClosingCTA;
