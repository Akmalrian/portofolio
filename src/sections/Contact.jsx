import { useState } from "react";
import { CONFIG } from "../data/config";
import SectionLabel from "../components/ui/SectionLabel";
import ScrollReveal from "../components/ui/ScrollReveal";
import GitHubIcon from "../components/ui/GitHubIcon";
import LinkedInIcon from "../components/ui/LinkedInIcon";

const INPUT_CLASS = "w-full bg-blue-50/80 border border-blue-200 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3.5 text-blue-900 placeholder-blue-300 text-sm transition-all duration-200";

function SocialLink({ href, icon, label, handle, iconBg }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-white border border-blue-100 hover:border-blue-300 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-100/80">
      <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-200">{label}</div>
        <div className="text-xs text-blue-400">{handle}</div>
      </div>
      <div className="ml-auto text-blue-200 group-hover:text-blue-500 transition-colors duration-200">
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
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-blue-900 mt-4 mb-4">
            Mari berkolaborasi
          </h2>
          <p className="text-blue-500/80 text-base mb-16 max-w-md">
            Terbuka untuk freelance, kolaborasi projek, atau sekadar obrolan tentang teknologi.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-500 text-xs font-semibold uppercase tracking-widest mb-2">Nama</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nama kamu" className={INPUT_CLASS} required />
                </div>
                <div>
                  <label className="block text-blue-500 text-xs font-semibold uppercase tracking-widest mb-2">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@contoh.com" className={INPUT_CLASS} required />
                </div>
              </div>
              <div>
                <label className="block text-blue-500 text-xs font-semibold uppercase tracking-widest mb-2">Pesan</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Ceritakan projek atau ide kamu..." rows={6} className={`${INPUT_CLASS} resize-none`} required />
              </div>
              <button type="submit" className="w-full btn-glow bg-blue-600 hover:bg-blue-500 text-white font-display font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/30 hover:-translate-y-0.5 tracking-wide text-sm">
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
              <p className="text-blue-400 text-xs text-center">
                Atau langsung email ke <span className="text-blue-600 font-medium">{CONFIG.email}</span>
              </p>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-7 mb-2 shadow-xl shadow-blue-300/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                  <span className="text-emerald-200 text-xs font-semibold tracking-wide uppercase">Open to work</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Saat ini saya aktif mencari peluang sebagai <span className="text-white font-semibold">Full-Stack Developer</span>. Response time biasanya <span className="text-white font-semibold">kurang dari 24 jam</span> di hari kerja.
                </p>
              </div>
              <SocialLink href={CONFIG.github} icon={<GitHubIcon size={17} />} label="GitHub" handle="@Akmalrian" iconBg="bg-blue-50 text-blue-600" />
              <SocialLink href={CONFIG.linkedin} icon={<LinkedInIcon size={17} />} label="LinkedIn" handle="Akmal Oktarian" iconBg="bg-blue-100 text-blue-600" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}