import { Link, useSearchParams } from "react-router-dom";
import ContactForm from "../components/features/ContactForm";
import DocumentMeta from "../components/SEO/DocumentMeta";
import BrandIcon from "../components/ui/BrandIcon";
import Container from "../components/ui/Container";

function Contact() {
  const [searchParams] = useSearchParams();
  const initialServiceType = searchParams.get("type") ?? "";

  return (
    <>
      <DocumentMeta title="Contactez BenDjo | Infusions et services en entreprise" description="Contactez BenDjo à Cotonou pour vos questions sur les infusions naturelles, le petit-déjeuner en entreprise et le service traiteur." />
      <div>
        <section className="overflow-hidden bg-cream bg-grain py-20 sm:py-28 lg:py-40" aria-labelledby="contact-title">
          <Container className="relative grid min-w-0 gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
            <span className="pointer-events-none absolute -right-8 top-0 font-display text-[14rem] leading-none text-leaf/[0.06] sm:text-[20rem]" aria-hidden="true">04</span>
            <div className="relative z-10 min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/75">Contact</p>
              <h1 id="contact-title" className="mt-5 max-w-[10ch] font-display text-6xl leading-[0.92] text-ink sm:text-7xl lg:text-[6.5rem]">Un mot, une idée, un moment.</h1>
            </div>
            <p className="max-w-md text-base leading-8 text-ink/80 sm:text-lg">Une question sur les infusions, un besoin pour votre entreprise ou un événement à préparer ? Écrivez à BenDjo.</p>
          </Container>
        </section>

        <section className="bg-kraft/15 py-20 sm:py-28 lg:py-36" aria-labelledby="contact-form-title">
          <Container className="grid min-w-0 gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-24">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink/75">Demande professionnelle</p>
              <h2 id="contact-form-title" className="mt-5 font-display text-5xl leading-[0.98] text-ink sm:text-6xl">Présentez votre besoin.</h2>
              <p className="mt-5 max-w-xl leading-7 text-ink/80">Renseignez les éléments dont vous disposez. Votre demande sera préparée dans WhatsApp avant que vous ne choisissiez de l’envoyer.</p>
              <div className="mt-10 min-w-0 max-w-2xl">
                <ContactForm key={initialServiceType || "direct"} initialServiceType={initialServiceType} />
              </div>
            </div>

            <div className="min-w-0 space-y-6 self-start">
              <aside className="relative overflow-hidden rounded-bendjo-lg bg-ink p-8 text-cream shadow-bendjo-soft sm:p-10" aria-labelledby="individual-contact-title">
                <BrandIcon name="leaf" className="h-12 w-12 text-kraft" aria-hidden="true" />
                <h2 id="individual-contact-title" className="mt-7 font-display text-3xl text-cream">Vous êtes un particulier ?</h2>
                <p className="mt-4 leading-7 text-cream/80">Découvrez les infusions, ajoutez votre sélection au panier, puis préparez votre commande avec le bouton WhatsApp existant.</p>
                <Link to="/products" className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-cream px-6 py-3 font-semibold text-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto">Choisir une infusion</Link>
              </aside>

              <aside className="relative overflow-hidden rounded-bendjo-lg bg-cream p-8 shadow-bendjo-soft sm:p-10" aria-labelledby="direct-contact-title">
                <span className="absolute -right-8 -top-8 font-display text-[9rem] leading-none text-kraft/15" aria-hidden="true">@</span>
                <BrandIcon name="cup" className="relative h-14 w-14 text-leaf" aria-hidden="true" />
                <h2 id="direct-contact-title" className="relative mt-8 font-display text-3xl text-ink">Écrivez-nous directement.</h2>
                <p className="relative mt-4 leading-7 text-ink/80">Vous pouvez aussi joindre BenDjo par email ou par téléphone.</p>
                <div className="relative mt-8 flex flex-col border-t border-leaf/15 pt-4 text-sm">
                  <a href="mailto:bendjobenin@gmail.com" className="inline-flex min-h-11 items-center rounded-bendjo-sm font-medium text-ink hover:text-ink/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf">bendjobenin@gmail.com</a>
                  <a href="tel:+2290153148013" className="inline-flex min-h-11 items-center rounded-bendjo-sm font-medium text-ink hover:text-ink/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf">+229 01 53 14 80 13</a>
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Contact;
