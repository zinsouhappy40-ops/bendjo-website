import type { Product } from "../../types/Product";
import Button from "../ui/Button";
import { ShoppingBagOpen } from "@phosphor-icons/react";

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
  packagingImage: string;
  packagingSrcSet: string;
  packagingAlt: string;
  packagingPosition: string;
  packagingScale: number;
  packagingOrigin: string;
  materialImage: string;
  materialSrcSet: string;
  materialAlt: string;
  materialWidth: number;
  materialHeight: number;
  materialPosition: string;
  sectionClassName?: string;
  featureClassName?: string;
  informationClassName?: string;
  packagingClassName?: string;
  materialClassName?: string;
  onAdd: (product: Product) => void;
}

const toneStyles = {
  hibiscus: { dot: "bg-hibiscus", surface: "bg-cream" },
  basil: { dot: "bg-basil", surface: "bg-basil/10" },
  lemongrass: { dot: "bg-lemongrass", surface: "bg-kraft/15" },
};

function ProductInformation({ product, profile, story, tone, quantity, onAdd }: Pick<InfusionStoryProps, "product" | "profile" | "story" | "tone" | "quantity" | "onAdd">) {
  const isBasil = tone === "basil";
  const isHibiscus = tone === "hibiscus";
  const isLemongrass = tone === "lemongrass";

  return (
    <div className={`min-w-0 ${isHibiscus ? "max-w-xl" : ""}`}>
      <p className="type-label text-copy">
        {isHibiscus ? "INFUSION NATURELLE" : "Infusion naturelle"}
      </p>
      {isLemongrass && (
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-copy">
          <span className={`h-2.5 w-2.5 rounded-full ring-2 ring-leaf ${toneStyles[tone].dot}`} aria-hidden="true" />
          {profile}
        </p>
      )}
      <h2 id={`${product.id}-title`} className={`type-product-title mt-2 text-leaf ${isLemongrass ? "type-product-title-long" : ""}`}>
        {isHibiscus ? "Hibiscus" : product.name}
      </h2>
      {!isLemongrass && <p className={`mt-4 flex items-center gap-2 text-sm font-semibold text-copy ${isBasil ? "mt-3" : ""} ${isHibiscus ? "sm:mt-4" : ""}`}>
        <span className={`h-2.5 w-2.5 rounded-full ring-2 ring-leaf ${toneStyles[tone].dot}`} aria-hidden="true" />
        {profile}
      </p>}
      <p className={`type-body mt-5 max-w-xl text-pretty text-copy ${isBasil || isLemongrass ? "mt-4" : ""}`}>{story}</p>
      <dl className={`mt-7 grid grid-cols-2 border-y border-leaf/25 py-5 ${isBasil ? "mt-6" : ""} ${isLemongrass ? "mt-6 py-4 sm:mt-7" : ""} ${isHibiscus ? "mt-6 py-4 sm:mt-7 sm:py-5" : ""}`}>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-copy">Format</dt>
          <dd className="mt-2 text-sm font-medium text-copy">{product.format}</dd>
        </div>
        <div className="border-l border-leaf/20 pl-5">
          <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-copy">Prix</dt>
          <dd className="mt-2 text-sm font-medium text-copy">{product.price.toLocaleString("fr-FR")} FCFA</dd>
        </div>
      </dl>
      <div className={`mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center ${isBasil ? "mt-5" : ""} ${isLemongrass ? "mt-6" : ""} ${isHibiscus ? "sm:mt-6" : ""}`}>
        <Button type="button" variant="leaf" className="w-full sm:w-auto" onClick={() => onAdd(product)} aria-label={`Ajouter ${product.name} à ma sélection`}>
          <ShoppingBagOpen size={19} weight="regular" aria-hidden="true" /> Ajouter à ma sélection
        </Button>
        {quantity > 0 && <p className="text-sm font-semibold text-copy" role="status">{quantity} dans votre sélection</p>}
      </div>
    </div>
  );
}

function PackagingImage({ src, srcSet, alt, width, height, position, scale, origin, className = "" }: { src: string; srcSet: string; alt: string; width: number; height: number; position: string; scale: number; origin: string; className?: string }) {
  return (
      <img
        src={src}
        srcSet={srcSet}
        sizes="(min-width: 768px) 360px, (min-width: 640px) 58vw, calc(100vw - 40px)"
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
        style={{ objectPosition: position, transform: `scale(${scale})`, transformOrigin: origin }}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  );
}

function MaterialImage({ src, srcSet, alt, width, height, position, className = "" }: { src: string; srcSet: string; alt: string; width: number; height: number; position: string; className?: string }) {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes="(min-width: 768px) 240px, (min-width: 640px) 38vw, calc(100vw - 40px)"
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      style={{ objectPosition: position }}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
    />
  );
}

function InfusionStory(props: InfusionStoryProps) {
  const { product, tone, layout, packagingWidth, packagingHeight, packagingImage, packagingSrcSet, packagingAlt, packagingPosition, packagingScale, packagingOrigin, materialImage, materialSrcSet, materialAlt, materialWidth, materialHeight, materialPosition, sectionClassName = "", featureClassName = "", informationClassName = "", packagingClassName = "", materialClassName = "" } = props;
  const isBasil = tone === "basil";
  const isLemongrass = tone === "lemongrass";
  const isHibiscus = tone === "hibiscus";

  if (layout === "feature") {
    return (
       <section id={product.id} className={`${toneStyles[tone].surface} py-12 ${isHibiscus ? "border-t border-leaf/10 sm:py-20 lg:py-24" : isLemongrass ? "border-y border-lemongrass/25 sm:py-12 lg:py-14" : "sm:py-16 lg:py-20"} ${isBasil ? "border-y border-basil/20" : ""} ${sectionClassName}`} aria-labelledby={`${product.id}-title`}>
           <div className={`mx-auto grid w-full max-w-6xl gap-7 px-5 sm:px-6 md:grid-cols-12 md:items-start md:gap-8 lg:gap-14 lg:px-8 ${isLemongrass ? "md:items-center" : ""}`}>
             <div className={`grid gap-4 sm:grid-cols-[minmax(0,1.22fr)_minmax(0,0.78fr)] md:col-span-7 md:min-h-[22rem] lg:min-h-[26rem] ${isLemongrass ? "sm:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] sm:gap-3 md:gap-4 lg:gap-5" : ""} ${featureClassName}`}>
               <figure className={`h-full overflow-hidden rounded-bendjo-md bg-kraft/15 shadow-bendjo-image ${packagingClassName}`}>
                   <PackagingImage src={packagingImage} srcSet={packagingSrcSet} alt={packagingAlt} width={packagingWidth} height={packagingHeight} position={isLemongrass ? "center 42%" : packagingPosition} scale={packagingScale} origin={packagingOrigin} className={`aspect-[5/4] h-full sm:aspect-[4/3] ${isLemongrass ? "sm:aspect-[16/10]" : ""}`} />
              </figure>
               <figure className={`h-full overflow-hidden rounded-bendjo-md bg-kraft/15 ring-1 ring-inset ring-leaf/10 ${materialClassName}`}>
                  <MaterialImage src={materialImage} srcSet={materialSrcSet} alt={isHibiscus ? "Fleurs d’hibiscus séchées visibles parmi d’autres matières végétales" : isLemongrass ? "Tiges de citronnelle fraîches, photographiées avec des feuilles vertes en arrière-plan" : materialAlt} width={materialWidth} height={materialHeight} position={isLemongrass ? "center 68%" : materialPosition} className={`aspect-[4/3] h-full sm:aspect-[4/3] ${isLemongrass ? "sm:aspect-[4/3]" : ""}`} />
               </figure>
          </div>
          <div className={`${isHibiscus ? "md:col-span-5 md:pl-2 lg:pl-3" : "md:col-span-5"} ${isBasil ? "md:pr-2 lg:pl-3" : ""} ${informationClassName}`}>
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
              <MaterialImage src={materialImage} srcSet={materialSrcSet} alt={materialAlt} width={materialWidth} height={materialHeight} position={materialPosition} className="aspect-[3/4]" />
            </figure>
            <figure className="mt-10 overflow-hidden rounded-bendjo-md bg-kraft/15 sm:mt-16">
              <PackagingImage src={packagingImage} srcSet={packagingSrcSet} alt={packagingAlt} width={packagingWidth} height={packagingHeight} position={packagingPosition} scale={packagingScale} origin={packagingOrigin} className="aspect-[16/9] max-sm:scale-[0.98]" />
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
          <MaterialImage src={materialImage} srcSet={materialSrcSet} alt={materialAlt} width={materialWidth} height={materialHeight} position={materialPosition} className="aspect-[16/7]" />
        </figure>
        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-center lg:mt-14 lg:gap-16">
          <figure className="overflow-hidden rounded-bendjo-md bg-kraft/15 md:col-span-6">
            <PackagingImage src={packagingImage} srcSet={packagingSrcSet} alt={packagingAlt} width={packagingWidth} height={packagingHeight} position={packagingPosition} scale={packagingScale} origin={packagingOrigin} className="aspect-[16/9]" />
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
