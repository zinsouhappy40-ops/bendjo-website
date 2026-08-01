import Hero from "../components/sections/Hero";
import InfusionChooser from "../components/sections/InfusionChooser";
import ProvenanceSection from "../components/sections/ProvenanceSection";
import BusinessServicesSection from "../components/sections/BusinessServicesSection";
import VerifiedFacts from "../components/sections/VerifiedFacts";
import HomeClosingCTA from "../components/sections/HomeClosingCTA";
import DocumentMeta from "../components/SEO/DocumentMeta";
import { routeMetadata } from "../seo/metadata";

function Home() {
  return (
    <>
      <DocumentMeta {...routeMetadata.home} />
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
