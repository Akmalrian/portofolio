import { useState } from "react";
import { CONFIG } from "../data/config";
import SectionLabel from "../components/ui/SectionLabel";
import ScrollReveal from "../components/ui/ScrollReveal";
import GitHubIcon from "../components/ui/GitHubIcon";
import LinkedInIcon from "../components/ui/LinkedInIcon";

const INPUT_CLASS = "w-full bg-white/[0.03] border border-white/[0.08] focus:border-violet-500/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-violet-500/20 rounded-xl px-4 py-3.5 text-white placeholder-slate-700 text-sm transition-all duration-200 font-light";

function SocialLink({ href, icon, label, handle, color }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="group flex items-center gap-4 glass border border-white/5 hover:border-violet-500/20 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5">
      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-white group-hover:text-violet-400 transition-colors duration-200">{label}</div>
        <div className="text-xs text-slate-600">{handle}</div>
      </div>
      <div className="ml-auto text-slate-700 group-hover:text-violet-400 transition-colors duration-200">
        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Bg glow */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-64 h-64 bg-violet-700/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            Mari berkolaborasi
          </h2>
          <p className="text-slate-500 text-base mb-16 max-w-md">
            Terbuka untuk freelance, kolaborasi projek, atau sekadar obrolan tentang teknologi.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Left: Form ── */}
          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">Nama</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                    placeholder="Nama kamu" className={INPUT_CLASS} required />
                </div>
                <div>
                  <label className="block text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                    placeholder="email@contoh.com" className={INPUT_CLASS} required />
                </div>
              </div>

              <div>
                <label className="block text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">Pesan</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                  placeholder="Ceritakan projek atau ide kamu..." rows={6}
                  className={`${INPUT_CLASS} resize-none`} required />
              </div>

              <button type="submit"
                className="w-full btn-glow bg-violet-600 hover:bg-violet-500 text-white font-display font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/25 hover:-translate-y-0.5 tracking-wide text-sm">
                {submitted
                  ? <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      Pesan Terkirim!
                    </span>
                  : "Kirim Pesan →"
                }
              </button>

              <p className="text-slate-700 text-xs text-center">
                Atau langsung email ke <span className="text-slate-500">{CONFIG.email}</span>
              </p>
            </form>
          </ScrollReveal>

          {/* ── Right: Info ── */}
          <ScrollReveal delay={200}>
            <div className="flex flex-col gap-4">

              {/* Intro card */}
              <div className="glass border border-white/[0.06] rounded-2xl p-7 mb-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Open to work</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Saat ini saya aktif mencari peluang sebagai <span className="text-white font-medium">Full-Stack Developer</span>. Response time biasanya <span className="text-white font-medium">kurang dari 24 jam</span> di hari kerja.
                </p>
              </div>

              {/* Social links */}
              <SocialLink
                href={CONFIG.github}
                icon={<GitHubIcon size={17} />}
                label="GitHub"
                handle="@akmalrian"
                color="bg-white/5 text-slate-400"
              />
              <SocialLink
                href={CONFIG.linkedin}
                icon={<LinkedInIcon size={17} />}
                label="LinkedIn"
                handle="Akmal Oktarian"
                color="bg-blue-500/10 text-blue-400"
              />

            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
