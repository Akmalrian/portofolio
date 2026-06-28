import { CONFIG } from "../data/config";
import GitHubIcon from "../components/ui/GitHubIcon";
import LinkedInIcon from "../components/ui/LinkedInIcon";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Blobs */}
      <div className="blob blob-1 w-[500px] h-[500px] bg-blue-400" style={{ top: "-10%", left: "-10%" }} />
      <div className="blob blob-2 w-[400px] h-[400px] bg-cyan-400" style={{ bottom: "-10%", right: "-5%" }} />
      <div className="blob blob-3 w-[300px] h-[300px] bg-indigo-400" style={{ top: "50%", left: "55%" }} />

      {/* Accent lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute top-2/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/80 border border-emerald-200 text-emerald-600 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide shadow-sm">
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500" />
          </span>
          Open to opportunities
        </div>

        {/* Role */}
        <div className="text-blue-400 text-sm font-display font-semibold tracking-[0.3em] uppercase mb-5">
          {CONFIG.role}
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold leading-[1.0] mb-6 cursor-blink" style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}>
          <span className="gradient-text">{CONFIG.name}</span>
        </h1>

        {/* Tagline */}
        <p className="text-blue-700/70 max-w-xl mx-auto leading-relaxed mb-10 font-light" style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}>
          {CONFIG.tagline}
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#projects" className="btn-glow inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 text-sm">
            Lihat Projek
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 bg-white/80 hover:bg-white border border-blue-200 hover:border-blue-400 text-blue-700 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1 text-sm shadow-sm">
            Hubungi Saya
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-10 mb-16">
          {CONFIG.stats.map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="font-display font-bold text-2xl text-blue-700">{num}</div>
              <div className="text-blue-400 text-xs mt-0.5 tracking-wide">{label}</div>
            </div>
          ))}
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-blue-300 text-xs tracking-[0.2em] uppercase">Find me</span>
          <div className="w-8 h-px bg-blue-200" />
          <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/80 border border-blue-100 rounded-xl flex items-center justify-center text-blue-400 hover:text-blue-600 hover:border-blue-300 hover:bg-white transition-all duration-200 shadow-sm">
            <GitHubIcon size={17} />
          </a>
          <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/80 border border-blue-100 rounded-xl flex items-center justify-center text-blue-400 hover:text-blue-600 hover:border-blue-300 hover:bg-white transition-all duration-200 shadow-sm">
            <LinkedInIcon size={17} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border border-blue-200 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}