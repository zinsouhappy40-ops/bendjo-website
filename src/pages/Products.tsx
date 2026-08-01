import Container from "../components/ui/Container";
import ProvenanceLabel from "../components/ui/ProvenanceLabel";
import InfusionStory from "../components/features/InfusionStory";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";
import DocumentMeta from "../components/SEO/DocumentMeta";
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
    story: "Une infusion naturelle à base d’hibiscus, fabriquée au Bénin à partir d’ingrédients locaux.",
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
    sectionClassName: "border-t border-ink/10",
    featureClassName: "md:col-span-7 md:pr-2",
    informationClassName: "md:col-span-5 md:pl-2",
    packagingClassName: "sm:translate-y-2",
    materialClassName: "sm:-translate-y-2",
  },
  {
    product: products[1],
    profile: "Doux et aromatique",
    story: "Une infusion naturelle à base de basilic, fabriquée au Bénin à partir d’ingrédients locaux.",
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
    story: "BenDjo associe la citronnelle et le clou de girofle dans une infusion naturelle fabriquée au Bénin.",
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
      <DocumentMeta
        title="Nos infusions naturelles | BenDjo"
        description="Comparez les trois infusions naturelles BenDjo, fabriquées au Bénin, puis préparez votre sélection pour WhatsApp."
      />

       <section data-motion-hero className="overflow-hidden bg-cream py-10 sm:py-12 lg:min-h-[min(42rem,calc(100svh-76px))] lg:py-16" aria-labelledby="products-title">
        <Container>
           <div className="grid items-center gap-8 lg:grid-cols-[2fr_3fr] lg:gap-14">
            <div className="max-w-xl">
               <div data-motion-step className="type-label flex items-center gap-3 text-ink/75"><span className="h-px w-10 bg-kraft" aria-hidden="true" />La gamme BenDjo</div>
               <h1 data-motion-step id="products-title" className="type-hero-title mt-4 text-ink sm:mt-5">
                Trois infusions fabriquées au Bénin.
              </h1>
               <p data-motion-step className="type-body mt-5 max-w-lg text-pretty text-ink/80 sm:mt-6 sm:text-lg sm:leading-8">
                Comparez les profils, découvrez chaque packaging et préparez votre sélection avant de commander sur WhatsApp.
              </p>
               <div data-motion-step className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a href="#hibiscus" className="inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">
                  Choisir une infusion
                </a>
                <a href="#comptoir" className="inline-flex min-h-11 items-center rounded-bendjo-sm px-1 text-sm font-semibold text-ink underline decoration-ink/35 underline-offset-4 transition-colors hover:decoration-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream">
                  Comparer les infusions
                </a>
              </div>
            </div>

              <figure data-motion-step className="relative aspect-[4/3] overflow-hidden rounded-bendjo-md bg-kraft/15 shadow-bendjo-image sm:aspect-[16/9] lg:aspect-auto lg:min-h-full">
            <img
              src={threeInfusionsImage1024}
              srcSet={`${threeInfusionsImage480} 480w, ${threeInfusionsImage1024} 1024w`}
              sizes="(min-width: 1024px) 619px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)"
              alt="Les trois packagings des infusions naturelles BenDjo"
              className="absolute inset-0 h-full w-full object-cover object-center"
              width="1024"
              height="1024"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <ProvenanceLabel
              items={[
                { label: "Gamme", value: "3 infusions" },
                { label: "Format", value: "10 sachets" },
                { label: "Prix", value: "1 500 FCFA" },
              ]}
              className="absolute bottom-4 left-4 right-4 grid-cols-3 sm:bottom-5 sm:left-5 sm:right-auto sm:min-w-[30rem]"
            />
            </figure>
          </div>
        </Container>
      </section>

      <section id="comptoir" className="scroll-mt-20 bg-ink py-16 text-cream sm:py-20 lg:py-24" aria-labelledby="comparison-title">
        <Container>
          <div className="grid gap-4 border-b border-cream/30 pb-7 md:grid-cols-[0.72fr_1fr] md:items-end md:gap-8">
            <div>
              <p className="type-label text-cream/65">Comparaison rapide</p>
              <h2 id="comparison-title" className="type-section-title-compact mt-2 text-cream">Le comptoir</h2>
            </div>
            <p className="max-w-xl leading-6 text-cream/80">Trois profils sensoriels. Un même format et un même prix.</p>
          </div>

          <div data-motion-group className="divide-y divide-cream/20">
            {infusionDetails.map(({ product, profile }, index) => (
              <article data-motion-item key={product.id} className="grid grid-cols-2 gap-x-5 gap-y-4 py-5 first:pt-6 last:pb-0 sm:grid-cols-4 sm:gap-x-7 sm:py-6 lg:grid-cols-[1.35fr_1fr_0.8fr_0.8fr_1fr] lg:items-center lg:gap-x-8">
                <a href={`#${product.id}`} className="col-span-2 flex min-h-11 items-center gap-3 rounded-bendjo-sm border-l-2 border-current pl-3 font-display text-2xl leading-none text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream sm:col-span-4 lg:col-span-1" style={{ color: `var(--color-${toneDots[index].replace("bg-", "")})` }}>
                  <span className={`h-3 w-3 shrink-0 rounded-full ${toneDots[index]}`} aria-hidden="true" />
                  <span className="text-cream">{product.name.replace("Infusion ", "")}</span>
                </a>
                <dl className="contents">
                  <div>
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-cream/60">Profil</dt>
                    <dd className="mt-1 text-sm leading-5 text-cream">{profile}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-cream/60">Format</dt>
                    <dd className="mt-1 text-sm leading-5 text-cream">10 sachets</dd>
                  </div>
                  <div>
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-cream/60">Prix</dt>
                    <dd className="mt-1 text-sm font-semibold leading-5 text-cream">1 500 FCFA</dd>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-cream/60">Disponibilité</dt>
                    <dd className="mt-1 text-sm leading-5 text-cream">À confirmer sur WhatsApp</dd>
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
