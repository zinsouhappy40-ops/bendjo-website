import Container from "../components/ui/Container";
import ProvenanceLabel from "../components/ui/ProvenanceLabel";
import InfusionStory from "../components/features/InfusionStory";
import Cart from "../components/features/Cart";
import { products } from "../data/products";
import { useCart } from "../hooks/useCart";
import DocumentMeta from "../components/SEO/DocumentMeta";
import heroImage from "../assets/images/products/637760295_122173934096783112_5011838352445723711_n.jpg";
import materialImage from "../assets/images/inspi/plantes-provenance.jpg";

const whatsappNumber = "2290162014161";
const whatsappMessage = encodeURIComponent("Bonjour BenDjo, je souhaite commander vos infusions naturelles.");

const infusionDetails = [
  {
    product: products[0],
    profile: "Fruité et rafraîchissant",
    story: "Une infusion naturelle à base d’hibiscus, fabriquée au Bénin à partir d’ingrédients locaux.",
    tone: "hibiscus" as const,
    layout: "feature" as const,
    packagingWidth: 810,
    packagingHeight: 1080,
    packagingPosition: "center 46%",
    materialAlt: "Fleurs d’hibiscus parmi les ingrédients locaux des infusions BenDjo",
    materialPosition: "8% 82%",
  },
  {
    product: products[1],
    profile: "Doux et aromatique",
    story: "Une infusion naturelle à base de basilic, fabriquée au Bénin à partir d’ingrédients locaux.",
    tone: "basil" as const,
    layout: "split" as const,
    packagingWidth: 1536,
    packagingHeight: 2048,
    packagingPosition: "62% 22%",
    materialAlt: "Feuilles de basilic parmi les ingrédients locaux des infusions BenDjo",
    materialPosition: "58% 42%",
  },
  {
    product: products[2],
    profile: "Végétal et épicé",
    story: "BenDjo associe la citronnelle et le clou de girofle dans une infusion naturelle fabriquée au Bénin.",
    tone: "lemongrass" as const,
    layout: "panorama" as const,
    packagingWidth: 1536,
    packagingHeight: 2048,
    packagingPosition: "center 22%",
    materialAlt: "Tiges de citronnelle parmi les ingrédients locaux des infusions BenDjo",
    materialPosition: "16% 12%",
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

      <section className="bg-cream pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24" aria-labelledby="products-title">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-ink/75">La gamme BenDjo</p>
              <h1 id="products-title" className="mt-3 max-w-[12ch] font-display text-5xl leading-[0.96] text-ink sm:text-6xl lg:text-[5rem]">
                Trois infusions fabriquées au Bénin.
              </h1>
            </div>
            <div className="max-w-xl lg:pb-2">
              <p className="text-base leading-8 text-ink/80 sm:text-lg">
                Comparez les profils, découvrez chaque packaging et préparez votre sélection avant de commander sur WhatsApp.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#comptoir" className="inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">
                  Comparer les infusions
                </a>
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md border border-ink px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto">
                  Commander sur WhatsApp
                </a>
              </div>
            </div>
          </div>

          <figure className="relative mt-12 sm:mt-16">
            <img
              src={heroImage}
              alt="Les trois packagings réels des infusions BenDjo"
              className="aspect-[4/3] w-full rounded-bendjo-md object-cover object-[center_38%] sm:aspect-[16/7]"
              width="1536"
              height="2048"
              fetchPriority="high"
              decoding="async"
            />
            <ProvenanceLabel
              items={[
                { label: "Gamme", value: "3 infusions" },
                { label: "Format", value: "10 sachets" },
                { label: "Prix", value: "1 500 FCFA" },
              ]}
              className="mx-4 -mt-5 grid-cols-3 sm:absolute sm:bottom-5 sm:left-5 sm:mx-0 sm:min-w-[30rem]"
            />
          </figure>
        </Container>
      </section>

      <section id="comptoir" className="scroll-mt-20 bg-ink py-20 text-cream sm:py-24" aria-labelledby="comparison-title">
        <Container>
          <div className="grid gap-5 border-b border-cream/25 pb-8 md:grid-cols-[0.7fr_1fr] md:items-end">
            <div>
              <p className="text-sm font-semibold text-cream/75">Comparaison rapide</p>
              <h2 id="comparison-title" className="mt-3 font-display text-4xl leading-none text-cream sm:text-5xl">Le comptoir</h2>
            </div>
            <p className="max-w-xl leading-7 text-cream/80">Trois profils sensoriels. Un même format et un même prix.</p>
          </div>

          <div>
            {infusionDetails.map(({ product, profile }, index) => (
              <article key={product.id} className="grid grid-cols-2 gap-x-5 gap-y-4 border-b border-cream/20 py-7 sm:grid-cols-3 lg:grid-cols-[1.35fr_1fr_0.8fr_0.8fr_1fr] lg:items-center">
                <a href={`#${product.id}`} className="col-span-2 flex min-h-11 items-center gap-3 rounded-bendjo-sm font-display text-2xl text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream sm:col-span-3 lg:col-span-1">
                  <span className={`h-3 w-3 shrink-0 rounded-full ${toneDots[index]}`} aria-hidden="true" />
                  {product.name.replace("Infusion ", "")}
                </a>
                <dl className="contents">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-cream/65">Profil</dt>
                    <dd className="mt-1 text-sm text-cream">{profile}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-cream/65">Format</dt>
                    <dd className="mt-1 text-sm text-cream">10 sachets</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-cream/65">Prix</dt>
                    <dd className="mt-1 text-sm text-cream">1 500 FCFA</dd>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-cream/65">Disponibilité</dt>
                    <dd className="mt-1 text-sm text-cream">À confirmer sur WhatsApp</dd>
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
            materialImage={materialImage}
            quantity={quantity}
            onAdd={(product) => dispatch({ type: "add", product })}
          />
        );
      })}

      {state.items.length > 0 && (
        <div id="selection" className="animate-fade-up bg-cream pb-24 pt-4 sm:pb-32">
          <Container>
            <Cart />
          </Container>
        </div>
      )}
    </>
  );
}

export default Products;
