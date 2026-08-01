import Container from "../ui/Container";

const facts = [
  {
    label: "Ancrage",
    content: "Fabriqué au Bénin",
  },
  {
    label: "Produits",
    content: "Infusions naturelles à base d’ingrédients locaux",
  },
  {
    label: "Entreprises",
    content: "Services de petit-déjeuner et de restauration",
  },
  {
    label: "Événements",
    content: "Service traiteur pour les événements professionnels",
  },
];

function VerifiedFacts() {
  return (
    <section className="bg-cream py-8 sm:py-10 lg:py-12" aria-labelledby="verified-facts-title">
      <Container>
        <div className="border-b border-ink/20 pb-3">
          <h2 id="verified-facts-title" className="type-section-title-compact text-ink">Repères vérifiés</h2>
        </div>
        <ul data-motion-group className="mt-5 grid grid-cols-1 border-b border-ink/15 sm:mt-6 sm:grid-cols-2">
          {facts.map((fact, index) => (
            <li
              data-motion-item
              key={fact.label}
              className={`py-3.5 sm:px-6 sm:py-4 ${index < facts.length - 1 ? "border-b border-ink/15" : ""} ${index === 2 ? "sm:border-b-0" : ""} ${index % 2 === 0 ? "sm:border-r sm:border-ink/15" : ""}`}
            >
              <p className="type-label text-ink/75">{fact.label}</p>
              <p className="mt-1.5 max-w-[34ch] text-base leading-6 text-ink sm:text-lg sm:leading-7">{fact.content}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default VerifiedFacts;
