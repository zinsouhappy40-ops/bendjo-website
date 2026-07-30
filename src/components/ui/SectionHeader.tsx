import type { ReactNode } from "react";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
}

function SectionHeader({ label, title, description, action, align = "left" }: SectionHeaderProps) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <header className={`flex max-w-2xl flex-col ${alignment}`}>
      {label && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-kraft">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-leaf sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-base leading-7 text-leaf/75 sm:text-lg">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </header>
  );
}

export default SectionHeader;
