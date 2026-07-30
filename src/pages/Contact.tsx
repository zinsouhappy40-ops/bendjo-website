import Container from "../components/ui/Container";
import ContactForm from "../components/features/ContactForm";
import BrandIcon from "../components/ui/BrandIcon";
import DocumentMeta from "../components/SEO/DocumentMeta";

function Contact() {
  return (
    <>
      <DocumentMeta title="Contactez BenDjo | Infusions et services en entreprise" description="Contactez BenDjo à Cotonou pour vos questions sur les infusions naturelles, le petit-déjeuner en entreprise et le service traiteur." />
      <div>
        <section className="bg-cream bg-grain overflow-hidden py-20 sm:py-28 lg:py-40" aria-labelledby="contact-title">
          <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20"><span className="pointer-events-none absolute -right-8 top-0 font-display text-[14rem] leading-none text-leaf/[0.06] sm:text-[20rem]" aria-hidden="true">04</span><div className="relative z-10"><p className="text-xs font-medium uppercase tracking-[0.2em] text-kraft">Contact</p><h1 id="contact-title" className="mt-5 max-w-[10ch] font-display text-6xl leading-[0.92] text-leaf sm:text-7xl lg:text-[6.5rem]">Un mot, une idée, un moment.</h1></div><p className="max-w-md text-base leading-8 text-leaf/75 sm:text-lg">Une question sur les infusions, un besoin pour votre entreprise ou un événement à préparer ? Écrivez à BenDjo.</p></Container>
        </section>

        <section className="bg-kraft/15 py-20 sm:py-28 lg:py-36" aria-labelledby="contact-form-title">
          <Container className="grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-24"><div><p className="text-xs font-medium uppercase tracking-[0.2em] text-kraft">Votre message</p><h2 id="contact-form-title" className="mt-5 font-display text-5xl leading-[0.98] text-leaf sm:text-6xl">Commençons par vous écouter.</h2><div className="mt-10 max-w-xl"><ContactForm /></div></div><aside className="relative self-start overflow-hidden rounded-bendjo-lg bg-cream p-8 shadow-bendjo-soft sm:p-10"><span className="absolute -right-8 -top-8 font-display text-[9rem] leading-none text-kraft/15" aria-hidden="true">@</span><BrandIcon name="cup" className="relative h-14 w-14 text-leaf" /><h2 className="relative mt-8 font-display text-3xl text-leaf">Écrivez-nous directement.</h2><p className="relative mt-4 leading-7 text-leaf/70">Le formulaire vous permet de détailler votre demande, mais vous pouvez aussi joindre BenDjo directement.</p><div className="relative mt-8 flex flex-col gap-3 border-t border-leaf/15 pt-6 text-sm"><a href="mailto:bendjobenin@gmail.com" className="font-medium text-leaf hover:text-leaf/70">bendjobenin@gmail.com</a><a href="tel:+2290153148013" className="font-medium text-leaf hover:text-leaf/70">+229 01 53 14 80 13</a></div></aside></Container>
        </section>
      </div>
    </>
  );
}

export default Contact;
