import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import SectionHeader from "../components/ui/SectionHeader";

function NotFound() {
  return (
    <div>
      <section className="bg-cream py-24 sm:py-32" aria-labelledby="not-found-title">
        <Container className="max-w-2xl text-center">
          <SectionHeader
            align="center"
            label="Page introuvable"
            title="Cette page n’existe pas."
            description="Le contenu recherché n’est pas disponible à cette adresse."
            action={(
              <Link
                to="/"
                className="inline-flex min-h-11 items-center rounded-bendjo-md bg-leaf px-6 py-3 font-medium text-cream transition-colors hover:bg-leaf/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                Retourner à l’accueil
              </Link>
            )}
          />
        </Container>
      </section>
    </div>
  );
}

export default NotFound;
