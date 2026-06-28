import { CONFIG } from "../data/config";
import SectionLabel from "../components/ui/SectionLabel";
import ScrollReveal from "../components/ui/ScrollReveal";

const CATEGORY_META = {
  "Front-End": {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: "bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200 hover:border-blue-300",
    iconBg: "bg-blue-100 text-blue-600",
    headerColor: "text-blue-600",
  },
  "Back-End & DB": {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    badge: "bg-cyan-100 text-cyan-700 border border-cyan-200 hover:bg-cyan-200 hover:border-cyan-300",
    iconBg: "bg-cyan-100 text-cyan-600",
    headerColor: "text-cyan-600",
  },
  "Tools & DevOps": {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    badge: "bg-indigo-100 text-indigo-700 border border-indigo-200 hover:bg-indigo-200 hover:border-indigo-300",
    iconBg: "bg-indigo-100 text-indigo-600",
    headerColor: "text-indigo-600",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-blue-900 mt-4 mb-4">
            Teknologi yang saya kuasai
          </h2>
          <p className="text-blue-500/80 text-base mb-16 max-w-lg">
            Stack yang saya gunakan untuk membangun produk digital dari nol hingga production.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {Object.entries(CONFIG.skills).map(([category, items], catIndex) => {
            const meta = CATEGORY_META[category] ?? CATEGORY_META["Front-End"];
            return (
              <ScrollReveal key={category} delay={catIndex * 100}>
                <div className="shimmer bg-white border border-blue-100 rounded-2xl p-7 hover:border-blue-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/80 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-7">
                    <div className={`w-9 h-9 rounded-xl ${meta.iconBg} flex items-center justify-center`}>
                      {meta.icon}
                    </div>
                    <div>
                      <h3 className={`font-display font-bold text-sm ${meta.headerColor}`}>{category}</h3>
                      <p className="text-blue-300 text-xs">{items.length} teknologi</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 cursor-default ${meta.badge}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}