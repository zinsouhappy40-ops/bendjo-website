import Hero from "../components/sections/Hero";
import InfusionChooser from "../components/sections/InfusionChooser";
import ProvenanceSection from "../components/sections/ProvenanceSection";
import BusinessServicesSection from "../components/sections/BusinessServicesSection";
import VerifiedFacts from "../components/sections/VerifiedFacts";
import HomeClosingCTA from "../components/sections/HomeClosingCTA";
import DocumentMeta from "../components/SEO/DocumentMeta";

function Home() {
  return (
    <>
      <DocumentMeta
        title="BenDJo | Infusions naturelles du Bénin et services en entreprise"
        description="Découvrez BenDJo, marque béninoise d’infusions naturelles fabriquées au Bénin et de services de petit-déjeuner et de restauration en entreprise."
      />
      <Hero />
      <InfusionChooser />
      <ProvenanceSection />
      <BusinessServicesSection />
      <VerifiedFacts />
      <HomeClosingCTA />
    </>
  );
}

export default Home;
