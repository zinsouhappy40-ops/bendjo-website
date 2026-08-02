import type { ReactNode } from "react";
import Container from "../ui/Container";
import ProvenanceLabel from "../ui/ProvenanceLabel";

type PageHeroTone = "leaf" | "cream";

interface PageHeroProps {
  id: string;
  tone?: PageHeroTone;
  label: ReactNode;
  title: ReactNode;
  description: ReactNode;
  actions: ReactNode;
  image: string;
  imageSrcSet?: string;
  imageAvif?: string;
  imageAvifSrcSet?: string;
  imageSizes?: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  imageScale?: number;
  labelItems?: Array<{ label: string; value: string }>;
}

function PageHero({ id, tone = "cream", label, title, description, actions, image, imageSrcSet, imageAvif, imageAvifSrcSet, imageSizes, imageAlt, imageWidth, imageHeight, imagePosition = "center", imageFit = "cover", imageScale = 1, labelItems }: PageHeroProps) {
  const isLeaf = tone === "leaf";
  const surface = isLeaf ? "bg-leaf text-on-leaf" : "bg-cream text-leaf";
  const mutedText = isLeaf ? "text-on-leaf" : "text-copy";
  const border = isLeaf ? "border-cream/25" : "border-leaf/15";

  return (
    <section data-motion-hero className={`overflow-hidden py-10 sm:py-12 lg:min-h-[min(42rem,calc(100svh-76px))] lg:py-16 ${surface}`} aria-labelledby={id}>
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:grid-rows-[minmax(32.5rem,auto)] lg:gap-14">
          <div className="max-w-xl">
            <div data-motion-step className={`type-label flex items-center gap-3 ${mutedText}`}>
              <span className="h-px w-10 bg-kraft" aria-hidden="true" />
              {label}
            </div>
            <h1 data-motion-step id={id} className={`type-hero-title mt-4 sm:mt-5 ${isLeaf ? "text-on-leaf" : "text-leaf"}`}>
              {title}
            </h1>
            <div data-motion-step className={`mt-5 max-w-lg border-t pt-5 sm:mt-6 ${border}`}>
              <p className={`type-body text-pretty sm:text-lg sm:leading-8 ${mutedText}`}>{description}</p>
            </div>
            <div data-motion-step className="mt-6 flex flex-col items-stretch gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center">
              {actions}
            </div>
          </div>
          <figure data-motion-step className={`relative overflow-hidden rounded-bendjo-md bg-kraft/15 shadow-bendjo-image ${imageFit === "contain" ? "" : "aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full"}`}>
            <picture>
              {imageAvifSrcSet && <source type="image/avif" srcSet={imageAvifSrcSet} sizes={imageSizes} />}
              {imageSrcSet && <source type="image/webp" srcSet={imageSrcSet} sizes={imageSizes} />}
              <img {...{ fetchpriority: "high" }} src={imageAvif ?? image} srcSet={imageAvifSrcSet ?? imageSrcSet} sizes={imageSizes} alt={imageAlt} className={imageFit === "contain" ? "relative h-auto w-full object-contain" : "absolute inset-0 h-full w-full object-cover"} style={{ objectPosition: imagePosition, transform: `scale(${imageScale})` }} width={imageWidth} height={imageHeight} loading="eager" decoding="async" />
            </picture>
            {labelItems && <ProvenanceLabel items={labelItems} className={`absolute bottom-4 left-4 right-4 ${labelItems.length === 1 ? "grid-cols-1" : "grid-cols-3"} sm:bottom-6 sm:left-6 sm:right-auto lg:bottom-8 lg:left-0`} />}
          </figure>
        </div>
      </Container>
    </section>
  );
}

export default PageHero;
