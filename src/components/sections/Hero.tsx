import { Link } from "react-router-dom";
import Container from "../ui/Container";
import ProvenanceLabel from "../ui/ProvenanceLabel";
import heroImage from "../../assets/images/products/637760295_122173934096783112_5011838352445723711_n.jpg";

const whatsappNumber = "2290162014161";
const whatsappMessage = encodeURIComponent("Bonjour BenDjo, je souhaite commander vos infusions naturelles.");

const primaryLinkStyles = "inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto";
const secondaryLinkStyles = "inline-flex min-h-12 w-full items-center justify-center rounded-bendjo-md border border-cream/55 px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto";

function Hero() {
  return (
    <section className="overflow-hidden bg-ink text-cream" aria-labelledby="hero-title">
      <div className="grid lg:min-h-[calc(100svh-76px)] lg:grid-cols-[0.88fr_1.12fr]">
        <Container className="order-2 flex items-center py-10 sm:py-12 md:py-14 lg:order-1 lg:max-w-none lg:justify-end lg:py-24 lg:pl-8 lg:pr-16 xl:pr-24">
          <div className="animate-fade-up max-w-xl lg:ml-auto">
            <p className="text-sm font-semibold text-cream/80">Infusions naturelles fabriquées au Bénin</p>
            <h1 id="hero-title" className="mt-5 max-w-[11ch] font-display text-4xl leading-[0.96] tracking-[-0.03em] text-cream sm:text-5xl md:text-[3.5rem] lg:text-[4.5rem]">
              La marque qui vous reconnecte à vos origines
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-cream/85 sm:text-lg sm:leading-8">
              Des infusions naturelles issues du terroir béninois, pensées pour accompagner votre quotidien.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/products" className={primaryLinkStyles}>Choisir mon infusion</Link>
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className={secondaryLinkStyles}>Commander sur WhatsApp</a>
            </div>
          </div>
        </Container>

        <div className="relative order-1 min-h-[34svh] bg-kraft/20 sm:min-h-[40svh] md:min-h-[38svh] lg:order-2 lg:min-h-full">
          <img
            src={heroImage}
            alt="Packaging réel des infusions BenDjo présenté lors de leur préparation"
            className="absolute inset-0 h-full w-full object-cover object-[center_62%] lg:object-center"
            width="1536"
            height="2048"
            fetchPriority="high"
            decoding="async"
          />
          <ProvenanceLabel
            items={[
              { label: "Origine", value: "Fabriqué au Bénin" },
              { label: "Format", value: "Boîte de 10 sachets" },
              { label: "Prix", value: "1 500 FCFA" },
            ]}
            className="absolute inset-x-4 bottom-4 grid-cols-3 lg:bottom-8 lg:left-0 lg:right-auto lg:min-w-52 lg:grid-cols-1"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
