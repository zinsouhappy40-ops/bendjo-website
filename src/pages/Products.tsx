import Container from "../components/ui/Container";
import InfusionStory from "../components/features/InfusionStory";
import PageHero from "../components/sections/PageHero";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";
import DocumentMeta from "../components/SEO/DocumentMeta";
import { routeMetadata } from "../seo/metadata";
import hibiscusPackagingImage480 from "../assets/images/optimized/packaging-hibiscus-480.webp";
import hibiscusPackagingImage768 from "../assets/images/optimized/packaging-hibiscus-768.webp";
import basilPackagingImage480 from "../assets/images/optimized/packaging-basilic-480.webp";
import basilPackagingImage768 from "../assets/images/optimized/packaging-basilic-768.webp";
import lemongrassPackagingImage480 from "../assets/images/optimized/packaging-citronnelle-480.webp";
import lemongrassPackagingImage768 from "../assets/images/optimized/packaging-citronnelle-768.webp";
import threeInfusionsImage480 from "../assets/images/optimized/products-hero-480.webp";
import threeInfusionsImage1024 from "../assets/images/optimized/products-hero-1024.webp";
import hibiscusIngredientImage480 from "../assets/images/optimized/ingredient-hibiscus-480.webp";
import hibiscusIngredientImage1024 from "../assets/images/optimized/ingredient-hibiscus-1024.webp";
import basilIngredientImage480 from "../assets/images/optimized/ingredient-basilic-480.webp";
import basilIngredientImage1024 from "../assets/images/optimized/ingredient-basilic-1024.webp";
import lemongrassIngredientImage480 from "../assets/images/optimized/ingredient-citronnelle-480.webp";
import lemongrassIngredientImage1024 from "../assets/images/optimized/ingredient-citronnelle-1024.webp";

const infusionDetails = [
  {
    product: products[0],
    profile: "Fruité et rafraîchissant",
    story: "Récoltées et séchées au Bénin, les fleurs d’hibiscus donnent une infusion rouge rubis, vive et légèrement acidulée. Une pause fraîche, à tout moment de la journée.",
    tone: "hibiscus" as const,
    layout: "feature" as const,
    packagingWidth: 768,
    packagingHeight: 768,
    packagingImage: hibiscusPackagingImage768,
    packagingSrcSet: `${hibiscusPackagingImage480} 480w, ${hibiscusPackagingImage768} 768w`,
    packagingAlt: "Packaging réel et tasse d’infusion Hibiscus BenDjo",
    packagingPosition: "center",
    packagingScale: 1,
    packagingOrigin: "center",
    materialImage: hibiscusIngredientImage1024,
    materialSrcSet: `${hibiscusIngredientImage480} 480w, ${hibiscusIngredientImage1024} 1024w`,
    materialAlt: "Fleurs d’hibiscus parmi les ingrédients locaux des infusions BenDjo",
    materialWidth: 1024,
    materialHeight: 1024,
    materialPosition: "center",
    sectionClassName: "border-t border-leaf/10",
    featureClassName: "md:col-span-7 md:pr-2",
    informationClassName: "md:col-span-5 md:pl-2",
    packagingClassName: "sm:translate-y-2",
    materialClassName: "sm:-translate-y-2",
  },
  {
    product: products[1],
    profile: "Doux et aromatique",
    story: "Le basilic infusé libère un parfum doux et herbacé, cultivé et séché localement. Une infusion apaisante, pour ralentir entre deux rendez-vous.",
    tone: "basil" as const,
    layout: "feature" as const,
    contentFirst: true,
    packagingWidth: 768,
    packagingHeight: 768,
    packagingImage: basilPackagingImage768,
    packagingSrcSet: `${basilPackagingImage480} 480w, ${basilPackagingImage768} 768w`,
    packagingAlt: "Composition éditoriale autour d’une boîte d’infusion Basilic BenDjo et de feuilles fraîches",
    packagingPosition: "center",
    packagingScale: 1,
    packagingOrigin: "center",
    materialImage: basilIngredientImage1024,
    materialSrcSet: `${basilIngredientImage480} 480w, ${basilIngredientImage1024} 1024w`,
    materialAlt: "Feuilles fraîches de basilic visibles dans une composition végétale",
    materialWidth: 1024,
    materialHeight: 1024,
    materialPosition: "center",
  },
  {
    product: products[2],
    profile: "Végétal et épicé",
    story: "La citronnelle apporte sa fraîcheur végétale, le clou de girofle une pointe chaleureuse et épicée. Un mariage typiquement béninois, à savourer chaud.",
    tone: "lemongrass" as const,
    layout: "feature" as const,
    packagingWidth: 768,
    packagingHeight: 768,
    packagingImage: lemongrassPackagingImage768,
    packagingSrcSet: `${lemongrassPackagingImage480} 480w, ${lemongrassPackagingImage768} 768w`,
    packagingAlt: "Composition éditoriale autour d’une boîte d’infusion Citronnelle et clou de girofle BenDjo",
    packagingPosition: "center",
    packagingScale: 1,
    packagingOrigin: "center",
    materialImage: lemongrassIngredientImage1024,
    materialSrcSet: `${lemongrassIngredientImage480} 480w, ${lemongrassIngredientImage1024} 1024w`,
    materialAlt: "Tiges de citronnelle parmi les ingrédients locaux des infusions BenDjo",
    materialWidth: 1024,
    materialHeight: 1024,
    materialPosition: "center",
    sectionClassName: "lg:py-16",
    featureClassName: "",
    informationClassName: "md:col-span-6 lg:col-span-5 lg:pl-2",
    packagingClassName: "sm:-translate-y-1",
    materialClassName: "sm:translate-y-1",
  },
];

const toneDots = ["bg-hibiscus", "bg-basil", "bg-lemongrass"];

function Products() {
  const { state, dispatch } = useCart();

  return (
    <>
      <DocumentMeta {...routeMetadata.products} />

      <PageHero
        id="products-title"
        label="La gamme BenDjo"
        title="Trois infusions fabriquées au Bénin."
        description="Comparez les profils, découvrez chaque packaging et préparez votre sélection avant de commander sur WhatsApp."
        image={threeInfusionsImage1024}
        imageSrcSet={`${threeInfusionsImage480} 480w, ${threeInfusionsImage1024} 1024w`}
        imageSizes="(min-width: 1024px) 619px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)"
        imageAlt="Les trois packagings des infusions naturelles BenDjo"
        imageWidth={1024}
        imageHeight={1024}
        labelItems={[
          { label: "Gamme", value: "3 infusions" },
          { label: "Format", value: "10 sachets" },
          { label: "Prix", value: "1 500 FCFA" },
        ]}
        actions={<><a href="#hibiscus" className="inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-leaf px-7 py-3.5 text-sm font-semibold text-on-leaf transition-colors hover:bg-leaf/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">Choisir une infusion</a><a href="#comptoir" className="inline-flex min-h-11 w-full items-center justify-center rounded-bendjo-sm px-1 text-sm font-semibold text-copy underline decoration-leaf/35 underline-offset-4 transition-colors hover:decoration-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">Comparer les infusions</a></>}
      />

      <section id="comptoir" className="scroll-mt-20 bg-leaf py-16 text-on-leaf sm:py-20 lg:py-24" aria-labelledby="comparison-title">
        <Container>
          <div className="grid gap-4 border-b border-cream/30 pb-7 md:grid-cols-[0.72fr_1fr] md:items-end md:gap-8">
            <div>
              <p className="type-label text-on-leaf">Comparaison rapide</p>
              <h2 id="comparison-title" className="type-section-title-compact mt-2 text-on-leaf">Le comptoir</h2>
            </div>
            <p className="max-w-xl leading-6 text-on-leaf">Trois profils sensoriels. Un même format et un même prix.</p>
          </div>

          <div data-motion-group className="divide-y divide-cream/20">
            {infusionDetails.map(({ product, profile }, index) => (
              <article data-motion-item key={product.id} className="grid grid-cols-2 gap-x-5 gap-y-4 py-5 first:pt-6 last:pb-0 sm:grid-cols-4 sm:gap-x-7 sm:py-6 lg:grid-cols-[1.35fr_1fr_0.8fr_0.8fr_1fr] lg:items-center lg:gap-x-8">
                <a href={`#${product.id}`} className="col-span-2 flex min-h-11 items-center gap-3 rounded-bendjo-sm font-display text-2xl leading-none text-on-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream sm:col-span-4 lg:col-span-1">
                  <span className={`h-3 w-3 shrink-0 rounded-full ring-2 ring-cream ${toneDots[index]}`} aria-hidden="true" />
                  <span>{product.name.replace("Infusion ", "")}</span>
                </a>
                <dl className="contents">
                  <div>
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-on-leaf">Profil</dt>
                    <dd className="mt-1 text-sm leading-5 text-on-leaf">{profile}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-on-leaf">Format</dt>
                    <dd className="mt-1 text-sm leading-5 text-on-leaf">10 sachets</dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-on-leaf">Prix</dt>
                    <dd className="mt-1 text-sm font-semibold leading-5 text-on-leaf">1 500 FCFA</dd>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-on-leaf">Disponibilité</dt>
                    <dd className="mt-1 text-sm leading-5 text-on-leaf">À confirmer sur WhatsApp</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {infusionDetails.map((detail) => {
        const quantity = state.items.find(({ product }) => product.id === detail.product.id)?.quantity ?? 0;
        return (
          <InfusionStory
            key={detail.product.id}
            {...detail}
            quantity={quantity}
            onAdd={(product) => dispatch({ type: "add", product })}
          />
        );
      })}

    </>
  );
}

export default Products;
