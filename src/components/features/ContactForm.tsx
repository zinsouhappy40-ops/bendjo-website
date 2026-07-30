import { useState, type ChangeEvent, type FormEvent } from "react";
import Button from "../ui/Button";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const initialValues: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

function validate(values: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) errors.name = "Indiquez votre nom.";
  if (!values.email.trim()) {
    errors.email = "Indiquez votre adresse email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Indiquez une adresse email valide.";
  }
  if (!values.message.trim()) errors.message = "Écrivez votre message.";

  return errors;
}

function ContactForm() {
  const [values, setValues] = useState<ContactFormData>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setIsSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitted(true);
    }
  }

  return (
    <form className="space-y-5" noValidate onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-leaf" htmlFor="contact-name">Nom</label>
        <input
          id="contact-name"
          className="mt-2 min-h-12 w-full rounded-bendjo-md border border-leaf/20 bg-cream px-4 text-leaf outline-none transition-colors placeholder:text-leaf/40 focus:border-leaf focus-visible:ring-2 focus-visible:ring-leaf"
          type="text"
          name="name"
          required
          autoComplete="name"
          value={values.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          onChange={handleChange}
        />
        {errors.name && <p id="contact-name-error" className="mt-2 text-sm text-hibiscus" role="alert">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-leaf" htmlFor="contact-email">Adresse email</label>
        <input
          id="contact-email"
          className="mt-2 min-h-12 w-full rounded-bendjo-md border border-leaf/20 bg-cream px-4 text-leaf outline-none transition-colors placeholder:text-leaf/40 focus:border-leaf focus-visible:ring-2 focus-visible:ring-leaf"
          type="email"
          name="email"
          required
          autoComplete="email"
          value={values.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          onChange={handleChange}
        />
        {errors.email && <p id="contact-email-error" className="mt-2 text-sm text-hibiscus" role="alert">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-leaf" htmlFor="contact-message">Votre message</label>
        <textarea
          id="contact-message"
          className="mt-2 min-h-36 w-full rounded-bendjo-md border border-leaf/20 bg-cream px-4 py-3 text-leaf outline-none transition-colors placeholder:text-leaf/40 focus:border-leaf focus-visible:ring-2 focus-visible:ring-leaf"
          name="message"
          required
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          onChange={handleChange}
        />
        {errors.message && <p id="contact-message-error" className="mt-2 text-sm text-hibiscus" role="alert">{errors.message}</p>}
      </div>

      <Button type="submit">Envoyer le message</Button>

      {isSubmitted && (
        <p className="text-sm leading-6 text-leaf" role="status" aria-live="polite">
          Votre message est prêt à être envoyé. Le service de contact sera connecté après validation.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
