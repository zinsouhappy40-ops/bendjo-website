import { Link, useSearchParams } from "react-router-dom";
import ContactForm from "../components/features/ContactForm";
import DocumentMeta from "../components/SEO/DocumentMeta";
import { routeMetadata } from "../seo/metadata";
import BrandIcon from "../components/ui/BrandIcon";
import Container from "../components/ui/Container";
import PageHero from "../components/sections/PageHero";
import serviceImage480 from "../assets/images/optimized/contact-hero-480.webp";
import serviceImage1024 from "../assets/images/optimized/contact-hero-1024.webp";
import { ArrowRight, EnvelopeSimple, Phone } from "@phosphor-icons/react";

const serviceTypes = new Set(["petit-dejeuner", "traiteur", "lancement", "autre"]);

function Contact() {
  const [searchParams] = useSearchParams();
  const requestedServiceType = searchParams.get("type");
  const initialServiceType = requestedServiceType && serviceTypes.has(requestedServiceType) ? requestedServiceType : "";

  return (
    <>
      <DocumentMeta {...routeMetadata.contact} />
      <div>
          <PageHero id="contact-title" label="Contact" title="Un mot, une idée, un moment." description="Une question sur les infusions, un besoin pour votre entreprise ou un événement à préparer ? Écrivez à BenDjo." image={serviceImage1024} imageSrcSet={`${serviceImage480} 480w, ${serviceImage1024} 1024w`} imageSizes="(min-width: 1024px) 619px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)" imageAlt="Une boîte d’infusion BenDjo, une tasse chaude et un carnet sur une table." imageWidth={1024} imageHeight={1024} labelItems={[{ label: "Parcours", value: "Particulier ou entreprise" }]} actions={<><a href="#contact-form-title" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-bendjo-md bg-leaf px-7 py-3.5 text-sm font-semibold text-on-leaf transition-colors hover:bg-leaf/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">Accéder au formulaire <ArrowRight size={18} weight="regular" aria-hidden="true" /></a><Link to="/products" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-bendjo-md border border-lemongrass bg-lemongrass px-7 py-3.5 text-sm font-semibold text-copy transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">Choisir une infusion <ArrowRight size={17} weight="regular" aria-hidden="true" /></Link></>} />

        <section className="bg-leaf py-5 text-on-leaf sm:py-6" aria-label="Choisir un parcours de contact">
          <Container className="grid gap-7 md:grid-cols-[1.2fr_0.8fr] md:gap-0">
            <div className="md:border-r md:border-cream/20 md:pr-10 lg:pr-14">
              <p className="type-label text-kraft">Demande professionnelle</p>
              <p className="mt-2 font-display text-2xl font-semibold leading-tight text-on-leaf">Petit-déjeuner, traiteur ou lancement de produit.</p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-on-leaf">Présentez votre besoin dans le formulaire ci-dessous.</p>
              <a href="#contact-form-title" className="type-action mt-3 inline-flex min-h-11 items-center rounded-bendjo-sm text-on-leaf underline decoration-kraft decoration-2 underline-offset-4 hover:text-on-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream">Accéder au formulaire</a>
            </div>
            <div className="border-t border-cream/20 pt-7 md:border-t-0 md:pl-10 md:pt-0 lg:pl-14">
              <p className="type-kicker text-on-leaf">Pour une commande personnelle</p>
              <p className="mt-2 max-w-md text-sm leading-6 text-on-leaf">Découvrez les infusions, préparez votre sélection, puis poursuivez avec le bouton WhatsApp du panier.</p>
              <Link to="/products" className="type-action mt-3 inline-flex min-h-11 items-center rounded-bendjo-sm text-on-leaf underline decoration-kraft decoration-2 underline-offset-4 hover:text-on-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream">Choisir une infusion</Link>
            </div>
          </Container>
        </section>

        <section className="bg-kraft/15 py-8 sm:py-10 lg:py-12" aria-labelledby="contact-form-title">
          <Container className="grid min-w-0 gap-y-8 lg:gap-y-10">
            <div className="min-w-0 lg:max-w-2xl">
              <p className="type-label text-copy">Demande professionnelle</p>
              <h2 id="contact-form-title" className="type-section-title-lg mt-3 scroll-mt-24 text-leaf">Présentez votre besoin.</h2>
              <p className="type-body mt-4 max-w-xl text-pretty text-copy">Renseignez les éléments dont vous disposez. Votre demande sera préparée dans WhatsApp avant que vous ne choisissiez de l’envoyer.</p>
            </div>

            <div className="min-w-0 border-t border-leaf/20 pt-7 lg:col-span-2 lg:max-w-4xl lg:pt-8">
              <ContactForm key={initialServiceType || "direct"} initialServiceType={initialServiceType} />
            </div>

            <div className="min-w-0 max-w-4xl border-t border-leaf/30 pt-5 sm:pt-6">
              <aside aria-labelledby="direct-contact-title">
                <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                  <BrandIcon name="cup" className="mt-0.5 h-9 w-9 shrink-0 text-leaf sm:mt-0 sm:h-10 sm:w-10" aria-hidden="true" />
                  <h2 id="direct-contact-title" className="type-section-title-compact text-leaf">Écrivez-nous directement.</h2>
                </div>
                <p className="mt-2 max-w-xl leading-7 text-copy sm:mt-3">Vous pouvez aussi joindre BenDjo par email ou par téléphone.</p>
                <div className="mt-3 flex flex-col gap-1 text-sm sm:mt-4 sm:flex-row sm:flex-wrap sm:gap-x-6">
                   <a href="mailto:bendjobenin@gmail.com" className="inline-flex min-h-11 w-fit items-center gap-2 rounded-bendjo-sm font-semibold text-leaf underline decoration-kraft decoration-2 underline-offset-4 hover:text-copy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf"><EnvelopeSimple size={18} weight="regular" aria-hidden="true" />bendjobenin@gmail.com</a>
                   <a href="tel:+2290153148013" className="inline-flex min-h-11 w-fit items-center gap-2 rounded-bendjo-sm font-semibold text-leaf underline decoration-kraft decoration-2 underline-offset-4 hover:text-copy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf"><Phone size={18} weight="regular" aria-hidden="true" />+229 01 53 14 80 13</a>
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
