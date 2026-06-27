// ============================================================
// DATA PORTOFOLIO — Edit bagian ini untuk update konten
// ============================================================
export const CONFIG = {
  name: "Akmal Oktarian",
  role: "Full-Stack Web Developer",
  tagline: "Crafting performant, scalable web apps — from pixel-perfect UIs to robust APIs.",
  github: "https://github.com/akmalrian",
  linkedin: "https://linkedin.com/in/akmal-oktarian",
  email: "akmal@email.com", // ganti dengan email kamu

  about: `Saya adalah Full-Stack Web Developer yang passionate dalam membangun solusi digital yang bukan hanya berfungsi dengan baik, tetapi juga terasa menyenangkan untuk digunakan. Dari React frontend hingga Go backend — saya menikmati seluruh stack.`,

  aboutLong: `Perjalanan saya dimulai dari rasa penasaran mendalam terhadap cara kerja web. Sejak saat itu, saya tidak bisa berhenti. Saya percaya kode yang baik adalah kode yang mudah dibaca, dipelihara, dan di-scale. Setiap projek adalah kesempatan untuk belajar sesuatu yang baru.`,

  skills: {
    "Front-End": [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Redux Toolkit", level: 80 },
    ],
    "Back-End & DB": [
      { name: "Go (Gin)", level: 78 },
      { name: "Node.js", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis", level: 70 },
      { name: "REST API", level: 88 },
    ],
    "Tools & DevOps": [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 72 },
      { name: "GitHub Actions", level: 70 },
      { name: "Vite", level: 82 },
      { name: "Swagger", level: 68 },
    ],
  },

  projects: [
    {
      id: 1,
      name: "MovieSpace",
      tagline: "Film discovery, reimagined.",
      description:
        "Aplikasi web interaktif untuk pencarian dan manajemen film dengan 100+ judul. Fitur filter genre, sort by IMDB/popularitas, watchlist personal, dan sistem autentikasi pengguna.",
      stack: ["JavaScript", "HTML5", "CSS3", "REST API", "Vercel"],
      demo: "https://moviespace-app.vercel.app/",
      repo: "https://github.com/akmalrian",
      gradient: "from-violet-900/60 to-indigo-900/60",
      accent: "#7C3AED",
      highlights: ["100+ film dari API", "Filter & sort dinamis", "Watchlist personal", "Sistem login"],
    },
    {
      id: 2,
      name: "E-Wallet App",
      tagline: "Digital wallet, full-stack.",
      description:
        "Aplikasi dompet digital full-stack dengan fitur transfer antar pengguna, riwayat transaksi, dan dashboard analitik. Backend Go/Gin, frontend React/Redux, deployment via Docker & CI/CD.",
      stack: ["React", "Redux", "Go", "Gin", "PostgreSQL", "Docker"],
      demo: "https://e-wallet-react-sigma.vercel.app/",
      repo: "https://github.com/akmalrian",
      gradient: "from-emerald-900/60 to-teal-900/60",
      accent: "#34D399",
      highlights: ["Transfer real-time", "JWT + Redis auth", "Docker deployment", "GitHub Actions CI/CD"],
    },
    {
      id: 3,
      name: "ShortLink",
      tagline: "URL shortener with auth.",
      description:
        "URL shortener full-stack dengan autentikasi JWT, Redis blacklisting untuk logout aman, manajemen link personal, dan dokumentasi Swagger. Clean architecture dengan repository pattern.",
      stack: ["Go", "Gin", "React", "Redux", "PostgreSQL", "Redis"],
      demo: "#",
      repo: "https://github.com/akmalrian",
      gradient: "from-rose-900/60 to-pink-900/60",
      accent: "#F43F5E",
      highlights: ["JWT + Redis blacklist", "Swagger docs", "Repository pattern", "React/Redux frontend"],
    },
  ],

  stats: [
    { num: "3+", label: "Projek Selesai" },
    { num: "5+", label: "Teknologi Dikuasai" },
    { num: "2", label: "Bahasa Backend" },
    { num: "100%", label: "Komitmen Belajar" },
  ],
};
