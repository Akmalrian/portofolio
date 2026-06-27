export default function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-3">
      <div className="flex gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 opacity-60" />
        <span className="w-1.5 h-1.5 rounded-full bg-violet-300 opacity-30" />
      </div>
      <span className="text-violet-400 text-xs font-display font-semibold uppercase tracking-[0.2em]">
        {children}
      </span>
    </div>
  );
}
