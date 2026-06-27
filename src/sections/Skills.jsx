import { CONFIG } from "../data/config";
import SectionLabel from "../components/ui/SectionLabel";
import ScrollReveal from "../components/ui/ScrollReveal";

const CATEGORY_META = {
  "Front-End": {
    icon: "◈",
    color: "violet",
    bar: "bg-violet-500",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    glow: "shadow-violet-500/20",
  },
  "Back-End & DB": {
    icon: "◎",
    color: "emerald",
    bar: "bg-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    glow: "shadow-emerald-500/20",
  },
  "Tools & DevOps": {
    icon: "◇",
    color: "indigo",
    bar: "bg-indigo-400",
    badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    glow: "shadow-indigo-500/20",
  },
};

function SkillBar({ name, level, barClass, delay }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-slate-600 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full ${barClass} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Bg accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-700/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            Teknologi yang saya kuasai
          </h2>
          <p className="text-slate-500 text-base mb-16 max-w-lg">
            Stack yang saya gunakan sehari-hari untuk membangun produk digital dari nol hingga production.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {Object.entries(CONFIG.skills).map(([category, items], catIndex) => {
            const meta = CATEGORY_META[category] ?? CATEGORY_META["Front-End"];
            return (
              <ScrollReveal key={category} delay={catIndex * 100}>
                <div className={`shimmer glass border border-white/[0.06] rounded-2xl p-7 hover:border-${meta.color}-500/20 hover:shadow-xl hover:${meta.glow} hover:-translate-y-1 transition-all duration-300 h-full`}>

                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-7">
                    <div className={`w-9 h-9 rounded-xl bg-${meta.color}-500/10 flex items-center justify-center text-${meta.color}-400 text-lg`}>
                      {meta.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-sm">{category}</h3>
                      <p className="text-slate-600 text-xs">{items.length} teknologi</p>
                    </div>
                  </div>

                  {/* Skill bars */}
                  <div className="space-y-4">
                    {items.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        barClass={meta.bar}
                        delay={catIndex * 100 + i * 80}
                      />
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
