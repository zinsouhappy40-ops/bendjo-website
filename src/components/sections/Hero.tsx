import { Link } from "react-router-dom";
import PageHero from "./PageHero";
import heroImage480 from "../../assets/images/optimized/home-hero-480.webp";
import heroImage1024 from "../../assets/images/optimized/home-hero-1024.webp";
import heroImage480Avif from "../../assets/images/optimized/home-hero-480.avif";
import heroImage768Avif from "../../assets/images/optimized/home-hero-768.avif";
import heroImage1024Avif from "../../assets/images/optimized/home-hero-1024.avif";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";

const whatsappNumber = "2290162014161";
const whatsappMessage = encodeURIComponent("Bonjour BenDjo, je souhaite commander vos infusions naturelles.");

const primaryLinkStyles = "inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-leaf px-7 py-3.5 text-sm font-semibold text-on-leaf transition-colors duration-300 hover:bg-leaf/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto";
const secondaryLinkStyles = "inline-flex min-h-11 w-full items-center justify-center px-2 py-2 text-sm font-semibold text-copy underline decoration-leaf/35 underline-offset-4 transition-colors duration-300 hover:text-copy hover:decoration-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto";

function Hero() {
  return (
    <PageHero id="hero-title" label="Infusions naturelles fabriquées au Bénin" title="Des infusions qui nous rassemblent." description="Des infusions naturelles pensées pour les moments que l’on partage." image={heroImage1024} imageSrcSet={`${heroImage480} 480w, ${heroImage1024} 1024w`} imageAvif={heroImage1024Avif} imageAvifSrcSet={`${heroImage480Avif} 480w, ${heroImage768Avif} 768w, ${heroImage1024Avif} 1024w`} imageSizes="(min-width: 1024px) 619px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)" imageAlt="Packaging réel des infusions BenDjo présenté lors de leur préparation" imageWidth={1024} imageHeight={1365} imagePosition="center 58%" labelItems={[{ label: "Origine", value: "Fabriqué au Bénin" }]} actions={<><Link to="/products" className={`${primaryLinkStyles} gap-2`}>Choisir mon infusion <ArrowRight size={18} weight="regular" aria-hidden="true" /></Link><a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className={`${secondaryLinkStyles} gap-2`}><WhatsappLogo size={19} weight="fill" aria-hidden="true" />Commander sur WhatsApp</a></>} />
  );
}

export default Hero;
