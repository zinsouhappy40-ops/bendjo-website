import Container from "../ui/Container";
import ProvenanceLabel from "../ui/ProvenanceLabel";
import TextLink from "../ui/TextLink";
import packagingImage from "../../assets/images/products/WhatsApp Image 2026-07-22 at 22.23.10.jpeg";

function ProvenanceSection() {
  return (
    <section className="bg-kraft/20 py-20 sm:py-28 lg:py-32" aria-labelledby="provenance-title">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-24">
        <figure className="relative min-w-0">
          <img
            src={packagingImage}
            alt="Coffret ouvert contenant plusieurs boîtes d’infusions BenDjo"
            className="aspect-[5/4] w-full rounded-bendjo-md object-cover"
            width="1280"
            height="1155"
            loading="lazy"
            decoding="async"
          />
          <ProvenanceLabel
            items={[
              { label: "Matière", value: "Ingrédients locaux" },
              { label: "Fabrication", value: "Bénin" },
              { label: "Produit", value: "Infusions naturelles" },
            ]}
            className="mx-4 -mt-5 grid-cols-3 lg:absolute lg:-bottom-7 lg:right-0 lg:mx-0 lg:min-w-[30rem]"
          />
        </figure>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink/75">Provenance BenDjo</p>
          <h2 id="provenance-title" className="mt-3 max-w-xl font-display text-4xl leading-[0.98] text-ink sm:text-6xl">
            Des ingrédients locaux, transformés au Bénin.
          </h2>
          <p className="mt-7 max-w-lg text-base leading-8 text-ink/80 sm:text-lg">
            BenDjo produit des infusions naturelles fabriquées au Bénin à partir d’ingrédients locaux.
          </p>
          <div className="mt-8">
            <TextLink to="/about">Découvrir BenDjo</TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProvenanceSection;
