interface ProvenanceItem {
  label: string;
  value: string;
}

interface ProvenanceLabelProps {
  items: ProvenanceItem[];
  className?: string;
}

function ProvenanceLabel({ items, className = "" }: ProvenanceLabelProps) {
  return (
    <dl className={`grid border border-ink/10 bg-cream text-ink shadow-none sm:shadow-[0_18px_45px_rgba(32,59,40,0.18)] ${className}`}>
      {items.map(({ label, value }) => (
        <div key={label} className="border-ink/15 px-4 py-3 not-last:border-r lg:not-last:border-b lg:not-last:border-r-0">
          <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink/70">{label}</dt>
          <dd className="mt-1 text-sm font-semibold leading-5 text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default ProvenanceLabel;
