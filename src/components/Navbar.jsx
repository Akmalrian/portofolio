import { useState, useEffect } from "react";
import { CONFIG } from "../data/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["hero", "about", "skills", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-blue-100 shadow-lg shadow-blue-100/50"
          : "bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <a href="#hero" className="group flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-display font-bold text-sm text-white group-hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-500/30">
              A
            </div>
            <span className="font-display font-bold text-blue-900 tracking-tight">
              Akmal<span className="text-blue-500">.</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeSection === link.toLowerCase();
              return (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-blue-800/70 hover:text-blue-700 hover:bg-blue-50"
                  }`}>
                    {link}
                    {isActive && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-blue-700/60 hover:text-blue-700 transition-colors duration-200 text-sm font-medium">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5">
              Hire Me
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-blue-700 hover:text-blue-900 transition-colors">
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-blue-50/97 backdrop-blur-xl" onClick={() => setMenuOpen(false)} />
        <div className="relative flex flex-col items-center justify-center h-full gap-7">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="font-display text-3xl font-bold text-blue-900 hover:text-blue-600 transition-colors duration-200">
              {link}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-4 bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-500 transition-colors">
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}