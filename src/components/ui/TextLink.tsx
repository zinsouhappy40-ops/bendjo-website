import { Link, type LinkProps } from "react-router-dom";

interface TextLinkProps extends LinkProps {
  children: React.ReactNode;
  tone?: "light" | "dark";
}

const toneStyles = {
  light: "text-ink decoration-ink/40 hover:text-ink/75 focus-visible:ring-leaf focus-visible:ring-offset-cream",
  dark: "text-cream decoration-cream/40 hover:text-cream/75 focus-visible:ring-cream focus-visible:ring-offset-ink",
};

function TextLink({ children, className = "", tone = "light", ...props }: TextLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center rounded-bendjo-sm underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${toneStyles[tone]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export default TextLink;
