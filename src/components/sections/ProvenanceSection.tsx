import Container from "../ui/Container";
import ProvenanceLabel from "../ui/ProvenanceLabel";
import TextLink from "../ui/TextLink";
import provenanceImage360 from "../../assets/images/optimized/home-provenance-360.webp";
import provenanceImage520 from "../../assets/images/optimized/home-provenance-520.webp";
import { ArrowRight } from "@phosphor-icons/react";

function ProvenanceSection() {
  return (
    <section className="bg-kraft/20 py-16 sm:py-20 lg:py-24" aria-labelledby="provenance-title">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
        <figure className="relative min-w-0">
          <img
            src={provenanceImage520}
            srcSet={`${provenanceImage360} 360w, ${provenanceImage520} 520w`}
            sizes="(min-width: 1024px) 560px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 40px)"
            alt="Fleurs d’hibiscus séchées parmi les ingrédients locaux des infusions BenDjo"
            className="aspect-[5/4] w-full rounded-bendjo-md object-cover"
            width="520"
            height="408"
            loading="lazy"
            decoding="async"
          />
          <ProvenanceLabel
            items={[
              { label: "Matière", value: "Ingrédients locaux" },
              { label: "Fabrication", value: "Bénin" },
              { label: "Produit", value: "Infusions naturelles" },
            ]}
            className="relative z-10 mx-4 -mt-5 grid-cols-3 lg:absolute lg:-bottom-7 lg:left-1/2 lg:mx-0 lg:min-w-[30rem] lg:-translate-x-1/2"
          />
        </figure>

        <div className="min-w-0">
          <p className="type-kicker text-ink/75">Provenance BenDjo</p>
          <h2 id="provenance-title" className="type-section-title-lg mt-3 text-ink">
            Des infusions naturelles fabriquées au Bénin à partir d’ingrédients locaux.
          </h2>
          <p className="type-body mt-5 text-pretty text-ink/80 sm:mt-6 sm:text-lg sm:leading-8">
            Une matière locale, une fabrication au Bénin et des infusions naturelles à découvrir.
          </p>
          <div className="mt-6 sm:mt-7">
            <TextLink to="/about" className="gap-2">Découvrir BenDjo <ArrowRight size={17} weight="regular" aria-hidden="true" /></TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProvenanceSection;
