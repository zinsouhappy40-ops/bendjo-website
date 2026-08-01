import { Link } from "react-router-dom";
import Container from "../ui/Container";

const primaryLinkStyles = "type-action inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-ink px-6 py-3 text-cream transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto";
const secondaryLinkStyles = "type-action inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md border border-ink px-6 py-3 text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto";

function HomeClosingCTA() {
  return (
    <section className="bg-kraft/20 pb-10 pt-14 sm:pb-12 sm:pt-16" aria-labelledby="home-closing-title">
      <Container>
        <p className="type-label text-ink/70">À vous de choisir la suite</p>
        <h2 id="home-closing-title" className="type-section-title-lg mt-3 max-w-[16ch] text-ink">
          Choisissez votre infusion ou présentez votre besoin.
        </h2>
        <div className="mt-7 grid gap-6 border-t border-ink/20 pt-6 md:grid-cols-[1.1fr_0.9fr] md:gap-0">
          <div>
            <p className="font-semibold text-ink">Pour les particuliers</p>
            <p className="mt-2 max-w-md leading-7 text-ink/80">Retrouvez les trois infusions et préparez votre sélection.</p>
            <Link to="/products" className={`${primaryLinkStyles} mt-5`}>Choisir une infusion</Link>
          </div>
          <div className="border-t border-ink/15 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="font-semibold text-ink">Pour les entreprises</p>
            <p className="mt-2 max-w-md leading-7 text-ink/80">Parlez-nous de votre petit-déjeuner ou de votre événement.</p>
            <Link to="/contact" className={`${secondaryLinkStyles} mt-5`}>Présenter votre besoin</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeClosingCTA;
