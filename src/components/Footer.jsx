import { CONFIG } from "../data/config";
import GitHubIcon from "./ui/GitHubIcon";
import LinkedInIcon from "./ui/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12 px-6 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center font-display font-bold text-xs text-white">A</div>
          <span className="font-display font-bold text-slate-400 text-sm">Akmal Oktarian</span>
        </div>

        <p className="text-slate-600 text-sm">
          Built with React & Tailwind · {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          <a href={CONFIG.github} target="_blank" rel="noopener noreferrer"
            className="text-slate-600 hover:text-violet-400 transition-colors duration-200">
            <GitHubIcon size={18} />
          </a>
          <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-slate-600 hover:text-violet-400 transition-colors duration-200">
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
