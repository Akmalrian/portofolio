import { CONFIG } from "../data/config";
import SectionLabel from "../components/ui/SectionLabel";
import ScrollReveal from "../components/ui/ScrollReveal";
import GitHubIcon from "../components/ui/GitHubIcon";

const STACK_COLORS = [
  "bg-violet-500/10 text-violet-300 border-violet-500/20",
  "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  "bg-rose-500/10 text-rose-300 border-rose-500/20",
  "bg-amber-500/10 text-amber-300 border-amber-500/20",
  "bg-sky-500/10 text-sky-300 border-sky-500/20",
];

function ExternalIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  const isFeatured = index === 0;

  if (isFeatured) {
    return (
      <div className="shimmer glass border border-white/[0.06] rounded-2xl overflow-hidden group hover:border-violet-500/20 hover:-translate-y-1 transition-all duration-300">
        <div className="grid md:grid-cols-2">

          {/* Visual side */}
          <div className={`relative min-h-[240px] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
            {/* Dot pattern */}
            <div className="absolute inset-0 dot-grid opacity-20" />

            {/* Project name big */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8">
              <div className="font-display text-5xl font-black text-white/10 select-none leading-none text-center">
                {project.name}
              </div>
              <div className="glass border border-white/10 rounded-full px-4 py-1.5">
                <span className="text-xs font-semibold text-white/60">{project.tagline}</span>
              </div>
            </div>

            {/* Highlight dots */}
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <span key={h} className="bg-black/30 border border-white/10 text-white/60 text-xs px-2.5 py-1 rounded-full">
                  ✦ {h}
                </span>
              ))}
            </div>

            {/* Featured badge */}
            <div className="absolute top-4 left-4 bg-violet-600/80 border border-violet-400/30 text-violet-200 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
              Featured
            </div>
          </div>

          {/* Content side */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1 h-6 rounded-full" style={{ backgroundColor: project.accent }} />
                <h3 className="font-display font-bold text-2xl text-white">{project.name}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {project.stack.map((tech, i) => (
                  <span key={tech} className={`border text-xs font-semibold px-2.5 py-1 rounded-full ${STACK_COLORS[i % STACK_COLORS.length]}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              {project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/20 hover:-translate-y-0.5">
                  Live Demo <ExternalIcon />
                </a>
              )}
              <a href={project.repo} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 glass border border-white/10 hover:border-violet-400/30 text-slate-300 hover:text-white text-xs font-bold py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
                <GitHubIcon size={13} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shimmer glass border border-white/[0.06] rounded-2xl overflow-hidden group hover:border-violet-500/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col">

      {/* Card header visual */}
      <div className={`relative h-40 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl font-black text-white/8 select-none">
            {project.name.charAt(0)}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-5 py-3 flex flex-wrap gap-1.5">
          {project.highlights.slice(0, 2).map((h) => (
            <span key={h} className="bg-black/40 border border-white/10 text-white/50 text-xs px-2 py-0.5 rounded-full">
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-5 rounded-full" style={{ backgroundColor: project.accent }} />
          <h3 className="font-display font-bold text-white text-lg">{project.name}</h3>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech, i) => (
            <span key={tech} className={`border text-xs font-semibold px-2 py-0.5 rounded-full ${STACK_COLORS[i % STACK_COLORS.length]}`}>
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/20">
              Live Demo <ExternalIcon size={12} />
            </a>
          )}
          <a href={project.repo} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 glass border border-white/10 hover:border-violet-400/30 text-slate-400 hover:text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-200">
            <GitHubIcon size={13} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = CONFIG.projects;

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-violet-700/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            Yang sudah saya bangun
          </h2>
          <p className="text-slate-500 text-base mb-16 max-w-lg">
            Projek-projek yang mencerminkan kemampuan saya di seluruh stack — dari UI hingga infrastructure.
          </p>
        </ScrollReveal>

        {/* Featured project — full width */}
        <ScrollReveal delay={100}>
          <div className="mb-6">
            <ProjectCard project={featured} index={0} />
          </div>
        </ScrollReveal>

        {/* Rest — grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i + 1) * 100}>
              <ProjectCard project={project} index={i + 1} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
