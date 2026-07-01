import { CONFIG } from "../data/config";
import GitHubIcon from "../components/ui/GitHubIcon";
import LinkedInIcon from "../components/ui/LinkedInIcon";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6" style={{ background: "linear-gradient(135deg, #BFDBFE 0%, #DBEAFE 40%, #EFF6FF 100%)" }}>

      <div className="absolute inset-0 dot-grid opacity-50" />

      {/* Blobs warna-warni tapi tetap biru dominan */}
      <div className="blob w-[500px] h-[500px] bg-blue-400" style={{ top: "-10%", left: "-8%" }} />
      <div className="blob blob-2 w-[380px] h-[380px] bg-sky-300" style={{ bottom: "-8%", right: "-5%" }} />
      <div className="blob blob-3 w-[280px] h-[280px] bg-indigo-300" style={{ top: "45%", left: "60%" }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Role */}
        <div className="text-blue-600 text-sm font-display font-semibold tracking-[0.3em] uppercase mb-5 mt-20">
          {CONFIG.role}
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold leading-[1.0] mb-6" style={{ fontSize: "clamp(3rem, 10vw, 4rem)" }}>
          <span className="gradient-text">{CONFIG.name}</span>
        </h1>

        {/* Tagline */}
        <p className="text-slate-600 max-w-xl mx-auto leading-relaxed mb-10 font-light" style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}>
          {CONFIG.tagline}
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#projects" className="btn-glow inline-flex items-center gap-2.5 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-700/30 hover:-translate-y-1 text-sm">
            Lihat Projek
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-white/70 hover:bg-white border border-blue-200 hover:border-blue-400 text-blue-800 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1 text-sm shadow-sm">
            Hubungi Saya
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-10 mb-16">
          {CONFIG.stats.map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-2xl text-blue-900">{num}</div>
              <div className="text-slate-500 text-xs mt-0.5 tracking-wide">{label}</div>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-slate-400 text-xs tracking-[0.2em] uppercase">Find me</span>
          <div className="w-8 h-px bg-slate-300" />
          <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/70 border border-white hover:border-blue-300 hover:bg-white rounded-xl flex items-center justify-center text-slate-500 hover:text-blue-700 transition-all duration-200 shadow-sm">
            <GitHubIcon size={17} />
          </a>
          <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/70 border border-white hover:border-blue-300 hover:bg-white rounded-xl flex items-center justify-center text-slate-500 hover:text-blue-700 transition-all duration-200 shadow-sm">
            <LinkedInIcon size={17} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border-2 border-blue-300 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-blue-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}