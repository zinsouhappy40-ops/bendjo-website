import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "text" | "leaf";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-leaf text-on-leaf hover:bg-leaf/90 hover:-translate-y-0.5 hover:shadow-bendjo-action",
  secondary: "border border-lemongrass bg-lemongrass text-copy hover:-translate-y-0.5 hover:underline",
  text: "bg-transparent text-copy hover:text-leaf",
  leaf: "bg-leaf text-on-leaf hover:bg-leaf/90 hover:-translate-y-0.5 hover:shadow-bendjo-action",
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
