import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../ui/Button";
import { Check, WarningCircle, WhatsappLogo } from "@phosphor-icons/react";

const whatsappNumber = "2290162014161";

const serviceTypes = {
  "petit-dejeuner": "Petit-déjeuner en entreprise",
  traiteur: "Traiteur / événement professionnel",
  lancement: "Lancement de produit",
  autre: "Autre besoin professionnel",
} as const;

type ServiceType = keyof typeof serviceTypes;
type FormStatus = "idle" | "validationError" | "ready" | "openedWhatsApp";

interface ContactFormData {
  serviceType: ServiceType | "";
  location: string;
  date: string;
  guestCount: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  initialServiceType?: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
type FormControl = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const fieldStyles = "mt-2.5 min-h-14 w-full rounded-bendjo-sm border border-leaf/60 bg-cream px-4 text-base text-copy outline-none transition-colors placeholder:text-copy hover:border-leaf focus:border-leaf focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream aria-invalid:border-leaf aria-invalid:focus:border-leaf aria-invalid:focus-visible:ring-leaf";

function getInitialServiceType(value?: string): ServiceType | "" {
  return value && value in serviceTypes ? value as ServiceType : "";
}

function validate(values: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.serviceType) errors.serviceType = "Choisissez un type de prestation.";
  if (!values.name) errors.name = "Indiquez votre nom.";
  if (!values.email) {
    errors.email = "Indiquez votre adresse email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Indiquez une adresse email valide.";
  }
  if (!values.message) errors.message = "Décrivez votre besoin.";

  return errors;
}

function normalize(values: ContactFormData): ContactFormData {
  return {
    ...values,
    location: values.location.trim(),
    guestCount: values.guestCount.trim(),
    name: values.name.trim(),
    company: values.company.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    message: values.message.trim(),
  };
}

function buildBusinessWhatsAppMessage(values: ContactFormData): string {
  const lines = [
    "Bonjour BenDjo, je souhaite présenter un besoin pour mon entreprise.",
    "",
    `Nom : ${values.name}`,
  ];

  if (values.company) lines.push(`Entreprise : ${values.company}`);
  lines.push(`Type de prestation : ${serviceTypes[values.serviceType as ServiceType]}`);
  if (values.location) lines.push(`Lieu : ${values.location}`);
  if (values.date) lines.push(`Date envisagée : ${values.date}`);
  if (values.guestCount) lines.push(`Nombre approximatif de personnes : ${values.guestCount}`);
  lines.push(`Email : ${values.email}`);
  if (values.phone) lines.push(`Téléphone : ${values.phone}`);
  lines.push("", "Message complémentaire :", values.message);

  return lines.join("\n");
}

function RequiredLabel({ children }: { children: string }) {
  return (
    <>
      {children} <span aria-hidden="true">*</span><span className="sr-only"> (obligatoire)</span>
    </>
  );
}

function FormError({ id, children }: { id: string; children: string }) {
  return <p id={id} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-copy" role="alert"><WarningCircle size={17} weight="regular" aria-hidden="true" />{children}</p>;
}

function ContactForm({ initialServiceType }: ContactFormProps) {
  const [values, setValues] = useState<ContactFormData>({
    serviceType: getInitialServiceType(initialServiceType),
    location: "",
    date: "",
    guestCount: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(event: ChangeEvent<FormControl>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const normalizedValues = normalize(values);
    const nextErrors = validate(normalizedValues);
    setValues(normalizedValues);
    setErrors(nextErrors);

    const firstError = Object.keys(nextErrors)[0] as keyof ContactFormData | undefined;
    if (firstError) {
      setStatus("validationError");
      requestAnimationFrame(() => {
        const invalidField = form.elements.namedItem(firstError);
        if (invalidField instanceof HTMLElement) invalidField.focus();
      });
      return;
    }

    setStatus("ready");
    const message = encodeURIComponent(buildBusinessWhatsAppMessage(normalizedValues));
    const whatsappWindow = window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
      setStatus("openedWhatsApp");
    }
  }

  return (
    <form className="space-y-8" noValidate onSubmit={handleSubmit}>
      <div className="border-y border-kraft/45 py-4">
        <p className="text-sm leading-6 text-copy">Les champs marqués d’un <span aria-hidden="true">*</span> sont obligatoires.</p>
      </div>

      <div className="space-y-6 border-b border-leaf/15 pb-8">
        <div>
          <p className="type-label mb-4 text-copy">Votre demande</p>
          <label className="block text-sm font-semibold text-copy" htmlFor="contact-service-type"><RequiredLabel>Type de prestation</RequiredLabel></label>
        <select
          id="contact-service-type"
          className={fieldStyles}
          name="serviceType"
          required
          value={values.serviceType}
          aria-invalid={Boolean(errors.serviceType)}
          aria-describedby={errors.serviceType ? "contact-service-type-error" : undefined}
          onChange={handleChange}
        >
          <option value="">Choisir une prestation</option>
          {Object.entries(serviceTypes).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
           {errors.serviceType && <FormError id="contact-service-type-error">{errors.serviceType}</FormError>}
        </div>

        <div className="grid min-w-0 gap-6 sm:grid-cols-2">
        <div className="min-w-0">
          <label className="block text-sm font-semibold text-copy" htmlFor="contact-name"><RequiredLabel>Nom</RequiredLabel></label>
          <input id="contact-name" className={fieldStyles} type="text" name="name" required autoComplete="name" value={values.name} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} onChange={handleChange} />
           {errors.name && <FormError id="contact-name-error">{errors.name}</FormError>}
        </div>
          <div className="min-w-0">
          <label className="block text-sm font-semibold text-copy" htmlFor="contact-email"><RequiredLabel>Adresse email</RequiredLabel></label>
          <input id="contact-email" className={fieldStyles} type="email" name="email" required autoComplete="email" value={values.email} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} onChange={handleChange} />
           {errors.email && <FormError id="contact-email-error">{errors.email}</FormError>}
        </div>
        </div>

        <div>
        <label className="block text-sm font-semibold text-copy" htmlFor="contact-message"><RequiredLabel>Votre besoin</RequiredLabel></label>
        <textarea id="contact-message" className={`${fieldStyles} min-h-40 py-4`} name="message" required value={values.message} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} onChange={handleChange} />
         {errors.message && <FormError id="contact-message-error">{errors.message}</FormError>}
        </div>
      </div>

      <details className="group border-b border-leaf/15 pb-8">
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 rounded-bendjo-sm font-semibold text-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf [&::-webkit-details-marker]:hidden">
          Ajouter des précisions
          <span className="text-2xl font-normal leading-none transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p className="mt-1 max-w-xl text-sm leading-6 text-copy">Ces informations sont facultatives et peuvent aider BenDjo à préparer l’échange.</p>
        <div className="mt-6 grid min-w-0 gap-6 sm:grid-cols-2">
          <div className="min-w-0">
            <label className="block text-sm font-semibold text-copy" htmlFor="contact-company">Entreprise</label>
            <input id="contact-company" className={fieldStyles} type="text" name="company" autoComplete="organization" value={values.company} onChange={handleChange} />
          </div>
          <div className="min-w-0">
            <label className="block text-sm font-semibold text-copy" htmlFor="contact-phone">Téléphone</label>
            <input id="contact-phone" className={fieldStyles} type="tel" name="phone" autoComplete="tel" value={values.phone} onChange={handleChange} />
          </div>
          <div className="min-w-0">
            <label className="block text-sm font-semibold text-copy" htmlFor="contact-location">Lieu</label>
            <input id="contact-location" className={fieldStyles} type="text" name="location" autoComplete="address-level2" value={values.location} onChange={handleChange} />
          </div>
          <div className="min-w-0">
            <label className="block text-sm font-semibold text-copy" htmlFor="contact-date">Date envisagée</label>
            <input id="contact-date" className={fieldStyles} type="date" name="date" value={values.date} onChange={handleChange} />
          </div>
          <div className="min-w-0 sm:col-span-2">
            <label className="block text-sm font-semibold text-copy" htmlFor="contact-guest-count">Nombre approximatif de personnes</label>
            <input id="contact-guest-count" className={fieldStyles} type="text" inputMode="numeric" name="guestCount" value={values.guestCount} onChange={handleChange} />
          </div>
        </div>
      </details>

      <Button type="submit" variant="leaf" className="min-h-14 w-full rounded-bendjo-sm px-6 text-base sm:w-auto"><WhatsappLogo size={20} weight="fill" aria-hidden="true" />Continuer sur WhatsApp</Button>

      {status === "ready" && (
        <p className="inline-flex items-center gap-2 text-sm leading-6 text-copy" role="status" aria-live="polite"><Check size={18} weight="regular" aria-hidden="true" />Votre demande est prête. Autorisez l’ouverture de WhatsApp pour continuer.</p>
      )}
      {status === "openedWhatsApp" && (
        <p className="inline-flex items-center gap-2 text-sm leading-6 text-copy" role="status" aria-live="polite"><Check size={18} weight="regular" aria-hidden="true" />Votre demande a été préparée dans WhatsApp. Vérifiez le message, puis envoyez-le vous-même pour le transmettre à BenDjo.</p>
      )}
    </form>
  );
}

export default ContactForm;
