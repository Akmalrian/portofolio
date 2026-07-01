export const CONFIG = {
  name: "Akmal Oktarian",
  role: "Full-Stack Web Developer",
  tagline: "Crafting performant, scalable web apps — from pixel-perfect UIs to robust APIs.",
  github: "https://github.com/Akmalrian",
  linkedin: "https://www.linkedin.com/in/akmal-oktarian/",
  email: "akmalrian.aor@gmail.com",

  about: `Full-Stack Web Developer yang passionate dalam membangun solusi digital yang tidak hanya bekerja dengan baik, tetapi juga terasa menyenangkan untuk digunakan. Dari React frontend hingga Go backend — saya menikmati seluruh stack.`,

  aboutLong: `Saya percaya kode yang baik adalah kode yang mudah dibaca, dipelihara, dan di-scale. Setiap projek adalah kesempatan untuk belajar sesuatu yang baru dan memberikan dampak nyata.`,

  skills: {
    "Front-End": [
      "React.js", "Redux Toolkit", "JavaScript (ES6+)",
      "Tailwind CSS", "HTML5 / CSS3", "Vite", "React Query",
    ],
    "Back-End & DB": [
      "Golang", "Gin Framework", "REST API",
      "PostgreSQL", "Redis", "GORM", "JWT Auth",
    ],
    "Tools & DevOps": [
      "Git & GitHub", "Docker", "GitHub Actions",
      "Swagger / OpenAPI", "Postman", "Linux CLI", "Vercel",
    ],
  },

  projects: [
    {
      id: 1,
      name: "E-Wallet App",
      tagline: "Digital wallet, full-stack.",
      description:
        "Aplikasi dompet digital full-stack dengan fitur transfer antar pengguna, riwayat transaksi, dan dashboard analitik. Backend Go/Gin dengan JWT + Redis, frontend React/Redux Persist, deployment via Docker & GitHub Actions CI/CD.",
      stack: ["React", "Redux", "Go", "Gin", "PostgreSQL", "Docker"],
      demo: "https://e-wallet-react-sigma.vercel.app/",
      repo: "https://github.com/Akmalrian/E-Wallet-Frontend",
      gradient: "from-blue-500 to-cyan-500",
      accent: "#2563EB",
      highlights: ["JWT + Redis auth", "Transfer real-time", "Docker deployment", "CI/CD Pipeline"],
    },
    {
      id: 2,
      name: "MovieSpace",
      tagline: "Film discovery, reimagined.",
      description:
        "Aplikasi web interaktif untuk pencarian dan manajemen film dengan 100+ judul. Filter genre, sort by IMDB/popularitas, watchlist personal, real-time search, dan sistem autentikasi pengguna.",
      stack: ["JavaScript", "HTML5", "Tailwind CSS", "IMDb API", "Vercel"],
      demo: "https://moviespace-app.vercel.app/",
      repo: "https://github.com/Akmalrian/moviespace-app",
      gradient: "from-indigo-500 to-blue-500",
      accent: "#4F46E5",
      highlights: ["100+ film dari API", "Filter & sort dinamis", "Watchlist personal", "Sistem login"],
    },
    {
      id: 3,
      name: "ShortLink",
      tagline: "URL shortener with auth.",
      description:
        "URL shortener full-stack dengan autentikasi JWT, Redis blacklisting untuk logout aman, manajemen link personal, dan dokumentasi Swagger. Dibangun dengan clean architecture dan repository pattern.",
      stack: ["Go", "Gin", "React", "Redux", "PostgreSQL", "Redis"],
      demo: "#",
      repo: "https://github.com/Akmalrian/Tickitz-frontend/tree/main",
      gradient: "from-sky-500 to-blue-600",
      accent: "#0284C7",
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