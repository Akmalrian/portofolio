import { CONFIG } from "../data/config";
import GitHubIcon from "../components/ui/GitHubIcon";
import LinkedInIcon from "../components/ui/LinkedInIcon";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* ── Background: dot grid ── */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* ── Animated blobs ── */}
      <div className="blob blob-1 w-[500px] h-[500px] bg-violet-700" style={{ top: "-10%", left: "-10%" }} />
      <div className="blob blob-2 w-[400px] h-[400px] bg-indigo-600" style={{ bottom: "-5%", right: "-5%" }} />
      <div className="blob blob-3 w-[300px] h-[300px] bg-emerald-600" style={{ top: "60%", left: "60%" }} />

      {/* ── Horizontal divider lines ── */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/10 to-transparent" />
      <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/5 to-transparent" />

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Available badge */}
        <div className="inline-flex items-center gap-2.5 glass border border-emerald-500/20 text-emerald-300 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide">
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500" />
          </span>
          Open to opportunities
        </div>

        {/* Role label */}
        <div className="text-slate-500 text-sm font-display font-semibold tracking-[0.3em] uppercase mb-4">
          {CONFIG.role}
        </div>

        {/* Name — signature gradient + cursor */}
        <h1 className="font-display font-extrabold leading-[1.0] mb-6 cursor-blink" style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}>
          <span className="gradient-text">{CONFIG.name}</span>
        </h1>

        {/* Tagline */}
        <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-10 font-light" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
          {CONFIG.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#projects" className="btn-glow inline-flex items-center gap-2.5 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-1 text-sm">
            Lihat Projek
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 glass border border-white/10 hover:border-violet-400/40 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1 text-sm hover:bg-white/5">
            Hubungi Saya
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          {CONFIG.stats.map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-2xl text-white">{num}</div>
              <div className="text-slate-600 text-xs mt-0.5 tracking-wide">{label}</div>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-slate-700 text-xs tracking-[0.2em] uppercase">Find me</span>
          <div className="w-8 h-px bg-slate-700" />
          <a href={CONFIG.github} target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 glass border border-white/5 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-200">
            <GitHubIcon size={17} />
          </a>
          <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 glass border border-white/5 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-200">
            <LinkedInIcon size={17} />
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-5 h-8 border border-white/10 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-violet-400 rounded-full animate-bounce" />
        </div>
      </div>

    </section>
  );
}
