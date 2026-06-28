import { CONFIG } from "../data/config";
import GitHubIcon from "./ui/GitHubIcon";
import LinkedInIcon from "./ui/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-100 py-12 px-6 bg-white/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-display font-bold text-xs text-white">A</div>
          <span className="font-display font-bold text-blue-800 text-sm">Akmal Oktarian</span>
        </div>
        <p className="text-blue-400 text-sm">Built with React & Tailwind · {new Date().getFullYear()}</p>
        <div className="flex items-center gap-4">
          <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-600 transition-colors duration-200">
            <GitHubIcon size={18} />
          </a>
          <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-600 transition-colors duration-200">
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}