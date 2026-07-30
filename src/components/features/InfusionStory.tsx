import type { Product } from "../../types/Product";
import Button from "../ui/Button";

type InfusionTone = "hibiscus" | "basil" | "lemongrass";
type InfusionLayout = "feature" | "split" | "panorama";

interface InfusionStoryProps {
  product: Product;
  profile: string;
  story: string;
  tone: InfusionTone;
  layout: InfusionLayout;
  quantity: number;
  packagingWidth: number;
  packagingHeight: number;
  packagingPosition: string;
  materialImage: string;
  materialAlt: string;
  materialPosition: string;
  contentFirst?: boolean;
  onAdd: (product: Product) => void;
}

const toneStyles = {
  hibiscus: { dot: "bg-hibiscus", surface: "bg-cream" },
  basil: { dot: "bg-basil", surface: "bg-basil/10" },
  lemongrass: { dot: "bg-lemongrass", surface: "bg-kraft/15" },
};

function ProductInformation({ product, profile, story, tone, quantity, onAdd }: Pick<InfusionStoryProps, "product" | "profile" | "story" | "tone" | "quantity" | "onAdd">) {
  return (
    <div className="min-w-0">
      <p className="flex items-center gap-2 text-sm font-semibold text-ink/75">
        <span className={`h-2.5 w-2.5 rounded-full ${toneStyles[tone].dot}`} aria-hidden="true" />
        {profile}
      </p>
      <h2 id={`${product.id}-title`} className="mt-3 max-w-[12ch] font-display text-4xl leading-[0.98] text-ink sm:text-5xl lg:text-6xl">
        {product.name}
      </h2>
      <p className="mt-6 max-w-xl text-base leading-8 text-ink/80">{story}</p>
      <dl className="mt-8 grid grid-cols-2 border-y border-ink/20 py-5">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-ink/75">Format</dt>
          <dd className="mt-2 text-sm font-medium text-ink">{product.format}</dd>
        </div>
        <div className="border-l border-ink/20 pl-5">
          <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-ink/75">Prix</dt>
          <dd className="mt-2 text-sm font-medium text-ink">{product.price.toLocaleString("fr-FR")} FCFA</dd>
        </div>
      </dl>
      <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button type="button" variant="ink" className="w-full sm:w-auto" onClick={() => onAdd(product)} aria-label={`Ajouter ${product.name} à ma sélection`}>
          Ajouter à ma sélection
        </Button>
        {quantity > 0 && <p className="text-sm font-semibold text-ink" role="status">{quantity} dans votre sélection</p>}
      </div>
    </div>
  );
}

function PackagingImage({ product, width, height, position, className = "" }: { product: Product; width: number; height: number; position: string; className?: string }) {
  return (
    <img
      src={product.image}
      alt={product.alt}
      className={`h-full w-full object-cover ${className}`}
      style={{ objectPosition: position }}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  );
}

function MaterialImage({ src, alt, position, className = "" }: { src: string; alt: string; position: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      style={{ objectPosition: position }}
      width="1024"
      height="1024"
      loading="lazy"
      decoding="async"
    />
  );
}

function InfusionStory(props: InfusionStoryProps) {
  const { product, tone, layout, packagingWidth, packagingHeight, packagingPosition, materialImage, materialAlt, materialPosition, contentFirst = false } = props;

  if (layout === "feature") {
    return (
      <section id={product.id} className={`${toneStyles[tone].surface} py-12 sm:py-16 lg:py-20`} aria-labelledby={`${product.id}-title`}>
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 md:grid-cols-12 md:items-center md:gap-10 lg:px-8">
          <div className={`grid gap-4 sm:grid-cols-[1fr_0.45fr] md:col-span-7 ${contentFirst ? "order-2" : ""}`}>
            <figure className="overflow-hidden rounded-bendjo-md bg-kraft/15">
              <PackagingImage product={product} width={packagingWidth} height={packagingHeight} position={packagingPosition} className="aspect-[4/5]" />
            </figure>
            <figure className="overflow-hidden rounded-bendjo-md bg-kraft/15">
              <MaterialImage src={materialImage} alt={materialAlt} position={materialPosition} className="aspect-[4/3] sm:aspect-auto" />
            </figure>
          </div>
          <div className={`md:col-span-5 ${contentFirst ? "order-1" : ""}`}>
            <ProductInformation {...props} />
          </div>
        </div>
      </section>
    );
  }

  if (layout === "split") {
    return (
      <section id={product.id} className={`${toneStyles[tone].surface} py-12 sm:py-16 lg:py-20`} aria-labelledby={`${product.id}-title`}>
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 md:grid-cols-12 md:items-center md:gap-10 lg:px-8">
          <div className="order-2 md:order-1 md:col-span-5">
            <ProductInformation {...props} />
          </div>
          <div className="order-1 grid grid-cols-[0.72fr_1fr] gap-4 md:order-2 md:col-span-7">
            <figure className="overflow-hidden rounded-bendjo-md bg-kraft/15">
              <MaterialImage src={materialImage} alt={materialAlt} position={materialPosition} className="aspect-[3/4]" />
            </figure>
            <figure className="mt-10 overflow-hidden rounded-bendjo-md bg-kraft/15 sm:mt-16">
              <PackagingImage product={product} width={packagingWidth} height={packagingHeight} position={packagingPosition} className="aspect-[3/4]" />
            </figure>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={product.id} className={`${toneStyles[tone].surface} py-12 sm:py-16 lg:py-20`} aria-labelledby={`${product.id}-title`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <figure className="overflow-hidden rounded-bendjo-md bg-kraft/15">
          <MaterialImage src={materialImage} alt={materialAlt} position={materialPosition} className="aspect-[16/7]" />
        </figure>
        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-center lg:mt-14 lg:gap-16">
          <figure className="overflow-hidden rounded-bendjo-md bg-kraft/15 md:col-span-6">
            <PackagingImage product={product} width={packagingWidth} height={packagingHeight} position={packagingPosition} className="aspect-[4/3]" />
          </figure>
          <div className="md:col-span-6">
            <ProductInformation {...props} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfusionStory;
