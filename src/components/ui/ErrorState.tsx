import type { ReactNode } from "react";

interface ErrorStateProps {
  title?: string;
  description?: string;
  action?: ReactNode;
}

function ErrorState({ title = "Une erreur est survenue.", description = "Réessayez ou revenez à l’étape précédente.", action }: ErrorStateProps) {
  return (
    <div className="rounded-bendjo-md border border-leaf bg-cream px-6 py-10 text-center" role="alert">
      <h2 className="font-display text-2xl text-leaf">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-copy">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export default ErrorState;
