import type { Product } from "../../types/Product";
import Button from "../ui/Button";

interface HomeProductRowProps {
  product: Product;
  profile: string;
  tone: "hibiscus" | "basil" | "lemongrass";
  imagePosition?: string;
  imageWidth: number;
  imageHeight: number;
  quantity: number;
  reverse?: boolean;
  onAdd: (product: Product) => void;
}

const toneStyles = {
  hibiscus: "bg-hibiscus",
  basil: "bg-basil",
  lemongrass: "bg-lemongrass",
};

function HomeProductRow({ product, profile, tone, imagePosition = "center", imageWidth, imageHeight, quantity, reverse = false, onAdd }: HomeProductRowProps) {
  return (
    <article className="grid items-center gap-8 border-t border-ink/15 py-10 first:border-t-0 sm:py-14 md:grid-cols-12 md:gap-10 lg:gap-16">
      <div className={`overflow-hidden rounded-bendjo-md bg-kraft/15 md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
        <img
          src={product.image}
          alt={product.alt}
          className="aspect-[4/3] w-full object-cover"
          style={{ objectPosition: imagePosition }}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
        <p className="flex items-center gap-2 text-sm font-semibold text-ink/70">
          <span className={`h-2.5 w-2.5 rounded-full ${toneStyles[tone]}`} aria-hidden="true" />
          {profile}
        </p>
        <h3 className="mt-3 max-w-lg font-display text-4xl leading-tight text-ink lg:text-5xl">{product.name}</h3>
        <dl className="mt-7 grid grid-cols-2 border-y border-ink/15 py-5">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-ink/75">Format</dt>
            <dd className="mt-2 text-sm font-medium text-ink">{product.format}</dd>
          </div>
          <div className="border-l border-ink/15 pl-5">
            <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-ink/75">Prix</dt>
            <dd className="mt-2 text-sm font-medium text-ink">{product.price.toLocaleString("fr-FR")} FCFA</dd>
          </div>
        </dl>
        <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <Button type="button" variant="ink" className="w-full sm:w-auto" onClick={() => onAdd(product)} aria-label={`Ajouter ${product.name} à ma sélection`}>
            Ajouter à ma sélection
          </Button>
          {quantity > 0 && (
            <p className="text-sm font-medium text-ink" role="status">
              {quantity} dans votre sélection
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default HomeProductRow;
