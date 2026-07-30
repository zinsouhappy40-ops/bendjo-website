import Container from "../ui/Container";
import Cart from "../features/Cart";
import HomeProductRow from "./HomeProductRow";
import { products } from "../../data/products";
import { useCart } from "../../hooks/useCart";
import hibiscusPackaging from "../../assets/images/products/WhatsApp Image 2026-07-22 at 22.21.54.jpeg";
import basilPackaging from "../../assets/images/products/637760295_122173934096783112_5011838352445723711_n.jpg";
import lemongrassPackaging from "../../assets/images/products/515492394_122145102872783112_1937735358128729147_n.jpg";

const homeProducts = [
  {
    product: { ...products[0], image: hibiscusPackaging, alt: "Packaging réel de l’infusion Hibiscus BenDjo" },
    profile: "Fruité et rafraîchissant",
    tone: "hibiscus" as const,
    imagePosition: "center 48%",
    imageWidth: 810,
    imageHeight: 1080,
  },
  {
    product: { ...products[1], image: basilPackaging, alt: "Packaging réel des infusions BenDjo, dont l’infusion Basilic" },
    profile: "Doux et aromatique",
    tone: "basil" as const,
    imagePosition: "62% 22%",
    imageWidth: 1536,
    imageHeight: 2048,
  },
  {
    product: { ...products[2], image: lemongrassPackaging, alt: "Packaging réel de l’infusion Citronnelle et clou de girofle BenDjo" },
    profile: "Végétal et épicé",
    tone: "lemongrass" as const,
    imagePosition: "center 22%",
    imageWidth: 1536,
    imageHeight: 2048,
  },
];

function InfusionChooser() {
  const { state, dispatch } = useCart();

  return (
    <section id="infusions" className="bg-cream py-20 sm:py-28 lg:py-32" aria-labelledby="infusions-title">
      <Container>
        <div className="grid gap-6 border-b border-ink/20 pb-10 lg:grid-cols-[0.75fr_1fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-ink/75">Pour les particuliers</p>
            <h2 id="infusions-title" className="mt-3 max-w-xl font-display text-4xl leading-[0.98] text-ink sm:text-5xl lg:text-6xl">
              Choisir une infusion
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-ink/80 sm:text-lg">
            Chaque infusion est proposée en boîte de 10 sachets au prix de 1 500 FCFA.
          </p>
        </div>

        <div>
          {homeProducts.map((item, index) => {
            const quantity = state.items.find(({ product }) => product.id === item.product.id)?.quantity ?? 0;
            return (
              <HomeProductRow
                key={item.product.id}
                {...item}
                quantity={quantity}
                reverse={index % 2 === 1}
                onAdd={(product) => dispatch({ type: "add", product })}
              />
            );
          })}
        </div>

        {state.items.length > 0 && <Cart />}
      </Container>
    </section>
  );
}

export default InfusionChooser;
