import { CONFIG } from "../data/config";
import SectionLabel from "../components/ui/SectionLabel";
import ScrollReveal from "../components/ui/ScrollReveal";
import GitHubIcon from "../components/ui/GitHubIcon";

const STACK_COLORS = [
  "bg-blue-100 text-blue-700 border border-blue-200",
  "bg-cyan-100 text-cyan-700 border border-cyan-200",
  "bg-indigo-100 text-indigo-700 border border-indigo-200",
  "bg-sky-100 text-sky-700 border border-sky-200",
  "bg-violet-100 text-violet-700 border border-violet-200",
  "bg-teal-100 text-teal-700 border border-teal-200",
];

function ExternalIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function FeaturedCard({ project }) {
  return (
    <div className="shimmer bg-white border border-blue-100 rounded-2xl overflow-hidden group hover:border-blue-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300">
      <div className="grid md:grid-cols-5">
        {/* Visual */}
        <div className={`md:col-span-2 relative min-h-[220px] bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-3">
            <div className="font-display text-4xl font-black text-white/20 select-none text-center leading-tight">{project.name}</div>
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5">
              <span className="text-xs font-semibold text-white/80">{project.tagline}</span>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-4 flex flex-wrap gap-1.5">
            {project.highlights.map((h) => (
              <span key={h} className="bg-black/20 border border-white/20 text-white/70 text-xs px-2.5 py-0.5 rounded-full">✦ {h}</span>
            ))}
          </div>
          <div className="absolute top-4 left-4 bg-white/25 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-1 h-6 rounded-full" style={{ backgroundColor: project.accent }} />
              <h3 className="font-display font-bold text-2xl text-blue-900">{project.name}</h3>
            </div>
            <p className="text-blue-700/60 text-sm leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-8">
              {project.stack.map((tech, i) => (
                <span key={tech} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${STACK_COLORS[i % STACK_COLORS.length]}`}>{tech}</span>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            {project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-400/30 hover:-translate-y-0.5">
                Live Demo <ExternalIcon />
              </a>
            )}
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
              <GitHubIcon size={13} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="shimmer bg-white border border-blue-100 rounded-2xl overflow-hidden group hover:border-blue-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300 flex flex-col">
      <div className={`relative h-40 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl font-black text-white/15 select-none">{project.name.charAt(0)}</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-5 py-3 flex flex-wrap gap-1.5">
          {project.highlights.slice(0, 2).map((h) => (
            <span key={h} className="bg-black/20 border border-white/20 text-white/70 text-xs px-2 py-0.5 rounded-full">{h}</span>
          ))}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1 h-5 rounded-full" style={{ backgroundColor: project.accent }} />
          <h3 className="font-display font-bold text-blue-900 text-lg">{project.name}</h3>
        </div>
        <p className="text-blue-700/60 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech, i) => (
            <span key={tech} className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STACK_COLORS[i % STACK_COLORS.length]}`}>{tech}</span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-400/30">
              Live Demo <ExternalIcon size={12} />
            </a>
          )}
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold py-2.5 rounded-xl transition-all duration-200">
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
    <section id="projects" className="py-32 px-6 relative overflow-hidden bg-white">
      <div className="absolute right-0 top-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel>Projects</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-blue-900 mt-4 mb-4">
            Yang sudah saya bangun
          </h2>
          <p className="text-blue-500/80 text-base mb-16 max-w-lg">
            Projek-projek yang mencerminkan kemampuan saya di seluruh stack — dari UI hingga infrastructure.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mb-6">
            <FeaturedCard project={featured} />
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i + 1) * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}