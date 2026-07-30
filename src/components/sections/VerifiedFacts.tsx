import Container from "../ui/Container";

const facts = [
  "Fabriqué au Bénin",
  "Ingrédients locaux",
  "Boîte de 10 sachets",
  "1 500 FCFA par boîte",
  "Commande sur WhatsApp",
];

function VerifiedFacts() {
  return (
    <section className="bg-cream py-16 sm:py-20" aria-labelledby="verified-facts-title">
      <Container>
        <h2 id="verified-facts-title" className="font-display text-3xl text-ink">Repères vérifiés</h2>
        <ul className="mt-8 grid grid-cols-2 border-y border-ink/20 lg:grid-cols-5">
          {facts.map((fact) => (
            <li key={fact} className="flex min-h-20 items-center border-b border-ink/15 px-3 py-4 text-sm font-semibold leading-6 text-ink even:border-l last:col-span-2 last:border-b-0 lg:min-h-24 lg:col-span-1 lg:border-b-0 lg:border-l lg:px-5 lg:first:border-l-0 lg:last:col-span-1">
              {fact}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default VerifiedFacts;
