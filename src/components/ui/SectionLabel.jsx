export default function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="flex gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60" />
        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 opacity-40" />
      </div>
      <span className="text-blue-500 text-xs font-display font-semibold uppercase tracking-[0.2em]">
        {children}
      </span>
    </div>
  );
}