interface LoadingStateProps {
  label?: string;
}

function LoadingState({ label = "Chargement en cours…" }: LoadingStateProps) {
  return (
    <div className="flex min-h-24 items-center justify-center text-sm text-leaf/75" role="status" aria-live="polite">
      {label}
    </div>
  );
}

export default LoadingState;
