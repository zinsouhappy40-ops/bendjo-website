import Container from "../ui/Container";
import TextLink from "../ui/TextLink";
import HomeProductRow from "./HomeProductRow";
import { products } from "../../data/products";
import { useCart } from "../../hooks/useCart";
import hibiscusPackaging480 from "../../assets/images/optimized/home-hibiscus-480.webp";
import hibiscusPackaging768 from "../../assets/images/optimized/home-hibiscus-768.webp";
import hibiscusPackaging1024 from "../../assets/images/optimized/home-hibiscus-1024.webp";
import basilPackaging480 from "../../assets/images/optimized/home-basilic-480.webp";
import basilPackaging768 from "../../assets/images/optimized/home-basilic-768.webp";
import basilPackaging1024 from "../../assets/images/optimized/home-basilic-1024.webp";
import citronnellePackaging480 from "../../assets/images/optimized/home-citronnelle-480.webp";
import citronnellePackaging768 from "../../assets/images/optimized/home-citronnelle-768.webp";
import citronnellePackaging1024 from "../../assets/images/optimized/home-citronnelle-1024.webp";
import { ArrowRight } from "@phosphor-icons/react";

const homeProducts = [
  {
    product: { ...products[0], image: hibiscusPackaging1024, alt: "Composition éditoriale autour d’une boîte d’infusion Hibiscus BenDjo, de fleurs d’Hibiscus et d’une tasse d’infusion" },
    imageSrcSet: `${hibiscusPackaging480} 480w, ${hibiscusPackaging768} 768w, ${hibiscusPackaging1024} 1024w`,
    profile: "Fruité et rafraîchissant",
    tone: "hibiscus" as const,
    imagePosition: "center",
    imageWidth: 1024,
    imageHeight: 1024,
  },
  {
    product: { ...products[1], image: basilPackaging1024, alt: "Composition éditoriale autour d’une boîte d’infusion Basilic BenDjo, de feuilles de basilic et d’une tasse d’infusion" },
    imageSrcSet: `${basilPackaging480} 480w, ${basilPackaging768} 768w, ${basilPackaging1024} 1024w`,
    profile: "Doux et aromatique",
    tone: "basil" as const,
    imagePosition: "center",
    imageWidth: 1024,
    imageHeight: 1024,
  },
  {
    product: { ...products[2], image: citronnellePackaging1024, alt: "Composition éditoriale autour d’une boîte d’infusion Citronnelle & Clou de girofle BenDjo, de citronnelle et d’une tasse d’infusion" },
    imageSrcSet: `${citronnellePackaging480} 480w, ${citronnellePackaging768} 768w, ${citronnellePackaging1024} 1024w`,
    profile: "Végétal et épicé",
    tone: "lemongrass" as const,
    imagePosition: "center",
    imageWidth: 1024,
    imageHeight: 1024,
  },
];

function InfusionChooser() {
  const { state, dispatch } = useCart();

  return (
    <section id="infusions" className="bg-ink py-16 text-cream sm:py-20 lg:py-24" aria-labelledby="infusions-title">
      <Container>
        <div className="grid gap-5 border-b border-cream/25 pb-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16">
          <div>
            <p className="type-label text-cream/70">Pour les particuliers</p>
            <h2 id="infusions-title" className="type-section-title mt-3 text-cream">
              Choisir votre infusion
            </h2>
          </div>
          <div className="max-w-xl">
            <p className="type-body text-pretty text-cream/80 sm:text-lg sm:leading-8">
              Trois infusions naturelles, fabriquées au Bénin, dans le même format et au même prix.
            </p>
            <TextLink to="/products" tone="dark" className="mt-3 gap-2 font-semibold">Découvrir les infusions <ArrowRight size={17} weight="regular" aria-hidden="true" /></TextLink>
          </div>
        </div>

        <div data-motion-group>
          {homeProducts.map((item) => {
            const quantity = state.items.find(({ product }) => product.id === item.product.id)?.quantity ?? 0;
            return (
              <HomeProductRow
                key={item.product.id}
                {...item}
                quantity={quantity}
                onAdd={(product) => dispatch({ type: "add", product })}
              />
            );
          })}
        </div>

      </Container>
    </section>
  );
}

export default InfusionChooser;
