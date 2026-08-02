import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-bendjo-md border border-leaf/15 bg-cream px-6 py-10 text-center">
      <h2 className="font-display text-2xl text-leaf">{title}</h2>
      {description && <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-copy">{description}</p>}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export default EmptyState;
