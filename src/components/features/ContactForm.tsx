import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../ui/Button";

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

const fieldStyles = "mt-2 min-h-12 w-full rounded-bendjo-md border border-leaf/20 bg-cream px-4 text-leaf outline-none transition-colors focus:border-leaf focus-visible:ring-2 focus-visible:ring-leaf";

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
    <form className="space-y-6" noValidate onSubmit={handleSubmit}>
      <p className="text-sm leading-6 text-leaf/75">Les champs marqués d’un <span aria-hidden="true">*</span> sont obligatoires.</p>

      <div>
        <label className="block text-sm font-medium text-leaf" htmlFor="contact-service-type"><RequiredLabel>Type de prestation</RequiredLabel></label>
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
        {errors.serviceType && <p id="contact-service-type-error" className="mt-2 text-sm text-hibiscus" role="alert">{errors.serviceType}</p>}
      </div>

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className="block text-sm font-medium text-leaf" htmlFor="contact-location">Lieu</label>
          <input id="contact-location" className={fieldStyles} type="text" name="location" autoComplete="address-level2" value={values.location} onChange={handleChange} />
        </div>
        <div className="min-w-0">
          <label className="block text-sm font-medium text-leaf" htmlFor="contact-date">Date envisagée</label>
          <input id="contact-date" className={fieldStyles} type="date" name="date" value={values.date} onChange={handleChange} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-leaf" htmlFor="contact-guest-count">Nombre approximatif de personnes</label>
        <input id="contact-guest-count" className={fieldStyles} type="text" inputMode="numeric" name="guestCount" value={values.guestCount} onChange={handleChange} />
      </div>

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className="block text-sm font-medium text-leaf" htmlFor="contact-name"><RequiredLabel>Nom</RequiredLabel></label>
          <input id="contact-name" className={fieldStyles} type="text" name="name" required autoComplete="name" value={values.name} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} onChange={handleChange} />
          {errors.name && <p id="contact-name-error" className="mt-2 text-sm text-hibiscus" role="alert">{errors.name}</p>}
        </div>
        <div className="min-w-0">
          <label className="block text-sm font-medium text-leaf" htmlFor="contact-company">Entreprise</label>
          <input id="contact-company" className={fieldStyles} type="text" name="company" autoComplete="organization" value={values.company} onChange={handleChange} />
        </div>
      </div>

      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className="block text-sm font-medium text-leaf" htmlFor="contact-email"><RequiredLabel>Adresse email</RequiredLabel></label>
          <input id="contact-email" className={fieldStyles} type="email" name="email" required autoComplete="email" value={values.email} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} onChange={handleChange} />
          {errors.email && <p id="contact-email-error" className="mt-2 text-sm text-hibiscus" role="alert">{errors.email}</p>}
        </div>
        <div className="min-w-0">
          <label className="block text-sm font-medium text-leaf" htmlFor="contact-phone">Téléphone</label>
          <input id="contact-phone" className={fieldStyles} type="tel" name="phone" autoComplete="tel" value={values.phone} onChange={handleChange} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-leaf" htmlFor="contact-message"><RequiredLabel>Message complémentaire</RequiredLabel></label>
        <textarea id="contact-message" className={`${fieldStyles} min-h-36 py-3`} name="message" required value={values.message} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} onChange={handleChange} />
        {errors.message && <p id="contact-message-error" className="mt-2 text-sm text-hibiscus" role="alert">{errors.message}</p>}
      </div>

      <Button type="submit">Continuer sur WhatsApp</Button>

      {status === "ready" && (
        <p className="text-sm leading-6 text-leaf" role="status" aria-live="polite">Votre demande est prête. Autorisez l’ouverture de WhatsApp pour continuer.</p>
      )}
      {status === "openedWhatsApp" && (
        <p className="text-sm leading-6 text-leaf" role="status" aria-live="polite">Votre demande a été préparée dans WhatsApp. Vérifiez le message, puis envoyez-le vous-même pour le transmettre à BenDjo.</p>
      )}
    </form>
  );
}

export default ContactForm;
