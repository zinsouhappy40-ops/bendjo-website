import type { Product } from "../../types/Product";
import Button from "../ui/Button";

interface HomeProductRowProps {
  product: Product;
  profile: string;
  tone: "hibiscus" | "basil" | "lemongrass";
  imagePosition?: string;
  imageSrcSet: string;
  imageWidth: number;
  imageHeight: number;
  quantity: number;
  onAdd: (product: Product) => void;
}

const toneStyles = {
  hibiscus: "bg-hibiscus",
  basil: "bg-basil",
  lemongrass: "bg-lemongrass",
};

const toneBorderStyles = {
  hibiscus: "border-l-hibiscus",
  basil: "border-l-basil",
  lemongrass: "border-l-lemongrass",
};

function HomeProductRow({ product, profile, tone, imagePosition = "center", imageSrcSet, imageWidth, imageHeight, quantity, onAdd }: HomeProductRowProps) {
  const isBasil = tone === "basil";

  return (
    <article data-motion-item className={`flex flex-col gap-6 border-t border-l-4 border-cream/20 py-7 pl-4 text-cream first:border-t-0 sm:gap-8 sm:py-8 md:grid md:grid-cols-12 md:items-center md:gap-10 md:pl-6 lg:gap-16 ${toneBorderStyles[tone]} ${isBasil ? "md:py-10 lg:gap-20" : ""}`}>
      <div className={`overflow-hidden rounded-bendjo-md bg-kraft/15 md:col-span-7 ${isBasil ? "md:col-start-6" : ""}`}>
        <img
          src={product.image}
          srcSet={imageSrcSet}
          sizes="(min-width: 1024px) 619px, (min-width: 768px) 56vw, calc(100vw - 40px)"
          alt={product.alt}
          className="aspect-[4/3] w-full object-cover"
          style={{ objectPosition: imagePosition }}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={`md:col-span-5 ${isBasil ? "md:col-start-1 md:row-start-1" : ""}`}>
           <p className="type-label flex items-center gap-2 text-cream/70">
          <span className={`h-2.5 w-2.5 rounded-full ${toneStyles[tone]}`} aria-hidden="true" />
          INFUSION NATURELLE
        </p>
          <h3 className={`type-product-title type-product-title-home mt-3 text-cream ${isBasil ? "lg:max-w-xs" : ""}`}>{product.name}</h3>
          <p className={`mt-4 max-w-md text-base font-medium leading-7 text-cream/80 ${isBasil ? "lg:max-w-sm" : ""}`}>{profile}</p>
          <dl className="mt-5 grid max-w-md grid-cols-2 gap-4 border-y border-cream/20 py-4 sm:mt-6 sm:py-5">
          <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-cream/70">Format</dt>
              <dd className="mt-1.5 text-sm font-medium leading-5 text-cream">{product.format}</dd>
          </div>
            <div className="border-l border-cream/20 pl-4 sm:pl-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-cream/70">Prix</dt>
              <dd className="mt-1 text-lg font-semibold leading-6 text-cream">{product.price.toLocaleString("fr-FR")} <span className="text-sm font-medium">FCFA</span></dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-col items-start gap-3 sm:mt-7 sm:flex-row sm:items-center">
          <Button type="button" variant="primary" className="min-h-11 w-full border border-cream/40 !bg-ink !text-cream transition-[background-color,border-color,box-shadow,transform] duration-200 hover:!bg-ink/80 hover:-translate-y-0.5 hover:border-cream/70 hover:shadow-[0_8px_18px_-10px_rgb(245_239_230_/_0.55)] focus-visible:!ring-cream focus-visible:!ring-offset-ink sm:w-auto" onClick={() => onAdd(product)} aria-label={quantity > 0 ? `${product.name} ajoutée à ma sélection` : `Ajouter ${product.name} à ma sélection`}>
            {quantity > 0 ? "Ajoutée à ma sélection" : "Ajouter à ma sélection"}
          </Button>
          {quantity > 0 && (
            <p className="text-sm font-medium text-cream" role="status">
              {quantity} dans votre sélection
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default HomeProductRow;
