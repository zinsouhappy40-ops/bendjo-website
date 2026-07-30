import { Link, type LinkProps } from "react-router-dom";

interface TextLinkProps extends LinkProps {
  children: React.ReactNode;
}

function TextLink({ children, className = "", ...props }: TextLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-11 items-center rounded-bendjo-sm text-ink underline decoration-ink/40 underline-offset-4 transition-colors hover:text-ink/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export default TextLink;
