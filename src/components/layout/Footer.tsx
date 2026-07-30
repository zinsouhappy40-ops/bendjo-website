import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-16 bg-ink text-cream">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Link className="rounded-bendjo-sm font-display text-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" to="/">
            BenDjo
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-cream/80">
            La marque qui vous reconnecte à vos origines.
          </p>
        </div>

        <nav aria-label="Navigation secondaire">
          <p className="text-sm font-medium">Navigation</p>
          <div className="mt-3 flex flex-col items-start gap-2 text-sm text-cream/80">
            <Link className="rounded-bendjo-sm hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" to="/about">À propos</Link>
            <Link className="rounded-bendjo-sm hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" to="/products">Infusions</Link>
            <Link className="rounded-bendjo-sm hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" to="/services">Services</Link>
            <Link className="rounded-bendjo-sm hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" to="/contact">Contact</Link>
          </div>
        </nav>

        <div>
          <p className="text-sm font-medium">Ancrage</p>
          <p className="mt-3 text-sm leading-6 text-cream/80">Cotonou, Bénin</p>
        </div>
      </div>
      <p className="border-t border-cream/20 px-5 py-4 text-center text-xs text-cream/70 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} BenDjo. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
