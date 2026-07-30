import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { navigationItems } from "../../data/navigation";
import logo from "../../assets/images/logo/bendjo-logo.png.jpeg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isMenuOpen) firstMenuLinkRef.current?.focus();
  }, [isMenuOpen]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-ink/10 bg-cream text-ink" aria-label="Navigation principale">
      <div className="mx-auto grid min-h-[76px] w-full max-w-6xl grid-cols-[1fr_auto] items-center px-5 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <NavLink
          to="/"
          end
          className="inline-flex w-fit items-center gap-2 rounded-bendjo-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={logo} alt="" className="h-11 w-11 object-contain" width="44" height="44" />
          <span className="font-display text-xl text-ink">BenDjo</span>
          <span className="sr-only">, accueil</span>
        </NavLink>

        <div className="hidden items-center justify-center gap-7 lg:flex">
          {navigationItems.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `relative py-2 text-[0.8125rem] font-semibold tracking-[0.02em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-leaf after:transition-[width] after:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf ${
                  isActive ? "text-ink after:w-full" : "text-ink/70 after:w-0 hover:text-ink hover:after:w-full"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/products"
          className="hidden min-h-11 items-center justify-self-end rounded-bendjo-md bg-ink px-5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream lg:inline-flex"
        >
          Choisir une infusion
        </NavLink>

        <button
          ref={menuButtonRef}
          type="button"
          className="group inline-flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 justify-self-end rounded-bendjo-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={`h-px w-5 bg-current transition-transform duration-300 ${isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} aria-hidden="true" />
          <span className={`h-px w-5 bg-current transition-transform duration-300 ${isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`grid border-t border-ink/10 bg-cream transition-[grid-template-rows,opacity] duration-500 ease-out lg:hidden ${
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-7 pt-4 sm:px-6">
            {navigationItems.map(({ label, to }, index) => (
              <NavLink
                key={to}
                ref={index === 0 ? firstMenuLinkRef : undefined}
                to={to}
                end={to === "/"}
                tabIndex={isMenuOpen ? 0 : -1}
                className={({ isActive }) =>
                  `flex min-h-12 items-center border-b border-leaf/10 font-display text-2xl transition-[color,padding] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf ${
                     isActive ? "pl-2 text-ink" : "text-ink/70 hover:pl-2 hover:text-ink"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <NavLink to="/products" tabIndex={isMenuOpen ? 0 : -1} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-bendjo-md bg-ink px-6 font-medium text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream" onClick={() => setIsMenuOpen(false)}>
              Choisir une infusion
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
