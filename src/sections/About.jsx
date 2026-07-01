import { CONFIG } from "../data/config";
import SectionLabel from "../components/ui/SectionLabel";
import ScrollReveal from "../components/ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #EFF6FF 0%, #DBEAFE 100%)" }}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-200 rounded-full filter blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal><SectionLabel>About Me</SectionLabel></ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-14">

          {/* Avatar */}
          <ScrollReveal delay={100}>
            <div className="relative flex justify-center lg:justify-start">
              <div className="absolute -mt-3 -left-3 w-full h-[110%] rounded-2xl border-2 border-blue-200 bg-blue-100/30" />
              <div className="relative w-72 h-80 rounded-2xl overflow-hidden bg-white shadow-2xl shadow-blue-200/60 border border-white">
                
                
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-40 h-40 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-xl shadow-blue-300/50">
                    <img src="/IMG_20260622_101335.png" alt="my photo" />
                  </div>
                  <div className="text-center">
                    <p className="text-slate-800 font-display font-bold text-lg">{CONFIG.name}</p>
                    <p className="text-blue-500 text-sm">{CONFIG.role}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
              </div>
              {/* <div className="absolute -bottom-4 -right-4 bg-white border border-blue-100 rounded-xl px-4 py-3 flex items-center gap-2.5 shadow-lg shadow-blue-100/60">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">Full-Stack Dev</span>
              </div> */}
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={200}>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-800 mb-2 leading-tight">
                Passionate builder,
              </h2>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                <span className="gradient-text">lifelong learner.</span>
              </h2>

              <p className="text-slate-600 leading-relaxed mb-4">{CONFIG.about}</p>
              <p className="text-slate-500 leading-relaxed mb-10 text-sm">{CONFIG.aboutLong}</p>

              <div className="space-y-3 mb-10">
                {[
                  "Membangun REST API yang scalable dengan Go/Gin",
                  "Mengembangkan UI interaktif dengan React & Redux",
                  "Menerapkan deployment via Docker & CI/CD pipelines",
                  "Menulis kode yang clean, testable, dan well-documented",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
                      <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {CONFIG.stats.map(({ num, label }) => (
                  <div key={label} className="bg-white border border-blue-100 rounded-xl p-4 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/60 transition-all duration-300">
                    <div className="font-display text-2xl font-bold gradient-text">{num}</div>
                    <div className="text-slate-500 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}