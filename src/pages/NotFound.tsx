import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import DocumentMeta from "../components/SEO/DocumentMeta";
import { routeMetadata } from "../seo/metadata";

function NotFound() {
  return (
    <div>
      <DocumentMeta {...routeMetadata.notFound} />
      <section className="bg-cream py-24 sm:py-32" aria-labelledby="not-found-title">
        <Container className="max-w-2xl text-center">
          <p className="type-label text-ink/75">Page introuvable</p>
          <h1 id="not-found-title" className="type-section-title-lg mt-3 text-ink">Cette page n’existe pas.</h1>
          <p className="type-body mx-auto mt-4 max-w-xl text-ink/80">Le contenu recherché n’est pas disponible à cette adresse.</p>
          <Link
            to="/"
            className="mt-7 inline-flex min-h-11 items-center rounded-bendjo-md bg-ink px-6 py-3 font-medium text-cream transition-colors hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
          >
            Retourner à l’accueil
          </Link>
        </Container>
      </section>
    </div>
  );
}

export default NotFound;
