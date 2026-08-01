import { Link, useLocation } from "react-router-dom";
import { MapPin } from "@phosphor-icons/react";

function Footer() {
  const { pathname } = useLocation();
  const isAboutPage = pathname === "/about";
  const isProductsPage = pathname === "/products";

  return (
    <footer className={isProductsPage ? "border-t border-cream/20 bg-kraft text-cream" : "bg-kraft text-cream"}>
      <div className={isAboutPage
        ? "mx-auto grid w-full max-w-5xl items-start gap-6 px-5 py-7 sm:gap-7 sm:px-6 sm:py-8 md:grid-cols-3 md:gap-8 lg:px-8"
        : isProductsPage
          ? "mx-auto grid w-full max-w-6xl items-start gap-6 px-5 py-6 sm:gap-7 sm:px-6 sm:py-7 md:grid-cols-3 md:gap-8 lg:px-8"
          : "mx-auto grid w-full max-w-6xl gap-8 px-5 py-8 sm:gap-7 sm:px-6 sm:py-9 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8"}
      >
        <div className="min-w-0">
          <Link className="rounded-bendjo-sm text-xl font-semibold tracking-[-0.01em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" to="/">
            BenDjo
          </Link>
          <p className={isAboutPage || isProductsPage ? "mt-2 max-w-xs text-sm leading-6 text-cream" : "mt-2 max-w-xs text-sm leading-6 text-cream/90"}>
            La marque qui vous reconnecte à vos origines.
          </p>
        </div>

        <nav aria-label="Navigation secondaire">
          <p className="text-sm font-medium">Navigation</p>
            <div className={isAboutPage || isProductsPage ? "mt-2 flex flex-col items-start gap-1.5 text-sm text-cream" : "mt-2 flex flex-col items-start gap-2 text-sm text-cream/90"}>
            <Link className="rounded-bendjo-sm hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" to="/about">À propos</Link>
            <Link className="rounded-bendjo-sm hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" to="/products">Infusions</Link>
            <Link className="rounded-bendjo-sm hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" to="/services">Services</Link>
            <Link className="rounded-bendjo-sm hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" to="/contact">Contact</Link>
          </div>
        </nav>

        <div className="min-w-0">
          <p className="text-sm font-medium">Ancrage</p>
           <p className={isAboutPage || isProductsPage ? "mt-2 flex items-center gap-2 text-sm leading-6 text-cream" : "mt-2 flex items-center gap-2 text-sm leading-6 text-cream/90"}><MapPin size={17} weight="regular" aria-hidden="true" />Cotonou, Bénin</p>
          <div className={isAboutPage || isProductsPage ? "mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-cream" : "mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-cream/90"}>
            <a className="rounded-bendjo-sm hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" href="https://www.facebook.com/BenDjoBenin" target="_blank" rel="noreferrer">Facebook</a>
            <a className="rounded-bendjo-sm hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream" href="https://www.linkedin.com/company/bendjo/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <p className={isAboutPage || isProductsPage
        ? "border-t border-cream/35 px-5 py-3.5 text-center text-xs text-cream sm:px-6 lg:px-8"
         : "border-t border-cream/25 px-5 py-3.5 text-center text-xs text-cream/85 sm:px-6 lg:px-8"}
      >
        © {new Date().getFullYear()} BenDjo. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
