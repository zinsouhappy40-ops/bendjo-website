import { Link, useLocation } from "react-router-dom";
import { FacebookLogo, LinkedinLogo, MapPin } from "@phosphor-icons/react";

function Footer() {
  const { pathname } = useLocation();
  const isAboutPage = pathname === "/about";
  const isProductsPage = pathname === "/products";

  return (
    <footer className={isProductsPage ? "border-t border-ink/25 bg-kraft text-ink" : "bg-kraft text-ink"}>
      <div className={isAboutPage
        ? "mx-auto grid w-full max-w-5xl items-start gap-6 px-5 py-7 sm:gap-7 sm:px-6 sm:py-8 md:grid-cols-3 md:gap-8 lg:px-8"
        : isProductsPage
          ? "mx-auto grid w-full max-w-6xl items-start gap-6 px-5 py-6 sm:gap-7 sm:px-6 sm:py-7 md:grid-cols-3 md:gap-8 lg:px-8"
          : "mx-auto grid w-full max-w-6xl gap-8 px-5 py-8 sm:gap-7 sm:px-6 sm:py-9 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8"}
      >
        <div className="min-w-0">
          <Link className="inline-flex min-h-11 items-center rounded-bendjo-sm text-xl font-semibold tracking-[-0.01em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink" to="/">
            BenDjo
          </Link>
          <p className="mt-2 max-w-xs text-sm leading-6 text-ink">
            La marque qui vous reconnecte à vos origines.
          </p>
        </div>

        <nav aria-label="Navigation secondaire">
          <p className="text-sm font-medium">Navigation</p>
            <div className={isAboutPage || isProductsPage ? "mt-2 flex flex-col items-start gap-1.5 text-sm text-ink" : "mt-2 flex flex-col items-start gap-2 text-sm text-ink"}>
            <Link className="inline-flex min-h-11 items-center rounded-bendjo-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink" to="/about">À propos</Link>
            <Link className="inline-flex min-h-11 items-center rounded-bendjo-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink" to="/products">Infusions</Link>
            <Link className="inline-flex min-h-11 items-center rounded-bendjo-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink" to="/services">Services</Link>
            <Link className="inline-flex min-h-11 items-center rounded-bendjo-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink" to="/contact">Contact</Link>
          </div>
        </nav>

        <div className="min-w-0">
          <p className="text-sm font-medium">Ancrage</p>
           <p className="mt-2 flex items-center gap-2 text-sm leading-6 text-ink"><MapPin size={17} weight="regular" aria-hidden="true" />Cotonou, Bénin</p>
          <div className={isAboutPage || isProductsPage ? "mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-ink" : "mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink"}>
            <a className="inline-flex min-h-11 items-center gap-2 rounded-bendjo-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink" href="https://www.facebook.com/BenDjoBenin" target="_blank" rel="noreferrer"><FacebookLogo size={21} weight="fill" aria-hidden="true" />Facebook</a>
            <a className="inline-flex min-h-11 items-center gap-2 rounded-bendjo-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink" href="https://www.linkedin.com/company/bendjo/" target="_blank" rel="noreferrer"><LinkedinLogo size={21} weight="fill" aria-hidden="true" />LinkedIn</a>
          </div>
        </div>
      </div>
      <p className={isAboutPage || isProductsPage
        ? "border-t border-ink/35 px-5 py-3.5 text-center text-xs text-ink sm:px-6 lg:px-8"
         : "border-t border-ink/25 px-5 py-3.5 text-center text-xs text-ink sm:px-6 lg:px-8"}
      >
        © {new Date().getFullYear()} BenDjo. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
