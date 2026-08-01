interface ProvenanceItem {
  label: string;
  value: string;
}

interface ProvenanceLabelProps {
  items: ProvenanceItem[];
  className?: string;
}

function ProvenanceLabel({ items, className = "" }: ProvenanceLabelProps) {
  const stacksOnDesktop = className.includes("lg:grid-cols-1");

  return (
    <dl className={`grid border border-ink/10 bg-cream text-ink shadow-none sm:shadow-[0_18px_45px_rgb(75_127_82_/_0.18)] ${className}`}>
      {items.map(({ label, value }) => (
        <div
          key={label}
          className={`min-w-0 border-ink/15 px-3 py-3 not-last:border-r sm:px-4 ${stacksOnDesktop ? "lg:not-last:border-b lg:not-last:border-r-0" : ""}`}
        >
          <dt className="text-[0.6875rem] font-semibold uppercase leading-4 tracking-[0.12em] text-ink/70">{label}</dt>
          <dd className="mt-1 text-pretty text-sm font-semibold leading-5 text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default ProvenanceLabel;
