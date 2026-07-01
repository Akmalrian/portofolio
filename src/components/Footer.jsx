import { CONFIG } from "../data/config";
import GitHubIcon from "./ui/GitHubIcon";
import LinkedInIcon from "./ui/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-200 py-12 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-700 flex items-center justify-center font-display font-bold text-xs text-white">A</div>
          <span className="font-display font-bold text-slate-700 text-sm">Akmal Oktarian</span>
        </div>
        <p className="text-slate-400 text-sm">Built with React & Tailwind · {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4">
          <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors duration-200"><GitHubIcon size={18} /></a>
          <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors duration-200"><LinkedInIcon size={18} /></a>
        </div>
      </div>
    </footer>
  );
}