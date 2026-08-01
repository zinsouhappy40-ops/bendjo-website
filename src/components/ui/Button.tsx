import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "text" | "ink";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-ink text-cream hover:bg-ink/90 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgb(75_127_82_/_0.45)]",
  secondary: "bg-transparent text-leaf border border-leaf hover:bg-leaf/10 hover:-translate-y-0.5",
  text: "bg-transparent text-leaf hover:text-leaf/70",
  ink: "bg-ink text-cream hover:bg-ink/90 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgb(75_127_82_/_0.45)]",
};

function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`type-action inline-flex min-h-11 items-center justify-center gap-2 rounded-bendjo-md px-6 py-3 transition-all duration-300 ease-bendjo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
