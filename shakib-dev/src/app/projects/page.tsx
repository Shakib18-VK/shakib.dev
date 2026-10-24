"use client";


const projects = [
  {
    number: "01",
    name: "AI Workflow Automation",
    category: "AI / FULL STACK",
    description:
      "An n8n-style automation platform with AI agents, workflow execution, backend APIs and intelligent tools.",
    tech: ["Next.js", "Express.js", "FastAPI", "LangGraph", "MongoDB"],
    status: "LIVE",
    live: "https://n8n-ten-rho.vercel.app",
    accent: "violet",
    icon: "✳",
  },
  {
    number: "02",
    name: "AI Interview Assistant",
    category: "GENERATIVE AI",
    description:
      "An AI-powered interview preparation application with interview practice, job description analysis and career preparation tools.",
    tech: ["Next.js", "Gemini", "MongoDB", "AI"],
    status: "LIVE",
    live: "https://next-gen-ai-interviewing-interview-navy.vercel.app",
    accent: "cyan",
    icon: "◈",
  },
  {
    number: "03",
    name: "JD Analyzer",
    category: "AI / CAREER TOOLS",
    description:
      "Analyzes resumes and job descriptions to identify matching skills, skill gaps and interview preparation opportunities.",
    tech: ["Next.js", "Gemini", "MongoDB"],
    status: "PROJECT FEATURE",
    live: "https://next-gen-ai-interviewing-interview-navy.vercel.app",
    accent: "pink",
    icon: "⌕",
  },
  {
    number: "04",
    name: "HMS",
    category: "FULL STACK",
    description:
      "A management system project built with modern web technologies.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    status: "IN DEVELOPMENT",
    accent: "amber",
    icon: "⌘",
  },
  {
    number: "05",
    name: "College Management System",
    category: "FULL STACK",
    description:
      "A college management application focused on student information and academic administration.",
    tech: ["React", "Node.js", "MongoDB"],
    status: "IN DEVELOPMENT",
    accent: "emerald",
    icon: "▦",
  },
  {
    number: "06",
    name: "Next.js Authentication",
    category: "WEB DEVELOPMENT",
    description:
      "An authentication project featuring login, signup, protected routes and middleware.",
    tech: ["Next.js", "TypeScript", "JWT", "Middleware"],
    status: "IN DEVELOPMENT",
    accent: "blue",
    icon: "⌑",
  },
  {
    number: "07",
    name: "Course Hub",
    category: "EDTECH / FULL STACK",
    description:
      "An online learning platform project focused on courses and digital learning experiences.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "IN DEVELOPMENT",
    accent: "violet",
    icon: "▤",
  },
  {
    number: "08",
    name: "Discord-like Chat App",
    category: "REAL-TIME / FULL STACK",
    description:
      "An online community and communication application inspired by Discord.",
    tech: ["Next.js", "TypeScript", "Real-time Chat"],
    status: "IN DEVELOPMENT",
    accent: "blue",
    icon: "◉",
  },
  {
    number: "09",
    name: "AI Girlfriend",
    category: "CONVERSATIONAL AI",
    description:
      "An AI companion application focused on interactive conversations and personalized chat experiences.",
    tech: ["Next.js", "LLMs", "AI Chat"],
    status: "IN DEVELOPMENT",
    accent: "pink",
    icon: "♡",
  },
  {
    number: "10",
    name: "AI RAG System",
    category: "GENERATIVE AI",
    description:
      "A Retrieval-Augmented Generation project designed to answer questions using relevant knowledge sources.",
    tech: ["Next.js", "Python", "LLMs", "RAG"],
    status: "IN DEVELOPMENT",
    accent: "emerald",
    icon: "⌘",
  },
  {
    number: "11",
    name: "AI Job Assistant",
    category: "AI / CAREER TOOLS",
    description:
      "An AI-powered career assistant concept for job search support, resume preparation and interview guidance.",
    tech: ["Next.js", "LLMs", "AI"],
    status: "IN DEVELOPMENT",
    accent: "amber",
    icon: "↗",
  },
  {
    number: "12",
    name: "Cursor-like AI Coding Tool",
    category: "AI / DEVELOPER TOOLS",
    description:
      "An AI-assisted coding tool concept inspired by Cursor, focused on helping developers write and understand code.",
    tech: ["Next.js", "TypeScript", "LLMs", "AI"],
    status: "IN DEVELOPMENT",
    accent: "cyan",
    icon: "⌁",
  },
];


const accentStyles: Record<string, string> = {
  violet: "text-violet-300 bg-violet-400/10 border-violet-400/20 shadow-violet-950/30",
  cyan: "text-cyan-300 bg-cyan-400/10 border-cyan-400/20 shadow-cyan-950/30",
  pink: "text-pink-300 bg-pink-400/10 border-pink-400/20 shadow-pink-950/30",
  amber: "text-amber-300 bg-amber-400/10 border-amber-400/20 shadow-amber-950/30",
  emerald: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20 shadow-emerald-950/30",
  blue: "text-blue-300 bg-blue-400/10 border-blue-400/20 shadow-blue-950/30",
};

export default function ProjectsPage() {
  const liveCount = projects.filter((p) => p.status === "LIVE").length;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070711] text-white">
      {/* Hero Section */}
      <section className="relative px-4 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-28 lg:px-10">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 sm:h-72 sm:w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.355em] text-violet-400">
            MY WORK & CREATIONS
          </p>

          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Built.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base px-2">
            From full-stack applications to AI-powered solutions,
            explore my projects, experiments and development journey.
          </p>

          {/* Stats Grid - Optimized for mobile */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
              <p className="text-2xl font-black">{projects.length.toString().padStart(2, "0")}</p>
              <p className="mt-1 text-xs text-slate-400 font-medium">Total Projects</p>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-4 backdrop-blur-sm">
              <p className="text-2xl font-black text-emerald-300">
                {liveCount.toString().padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs text-slate-400 font-medium">Live Deployments</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
              <p className="text-2xl font-black text-violet-300">AI + Web</p>
              <p className="mt-1 text-xs text-slate-400 font-medium">Focus Areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-violet-400">
              01 / PORTFOLIO
            </p>
            <h2 className="mt-1.5 text-2xl font-bold sm:text-3xl tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            Real projects. Continuous improvement.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex min-w-0 flex-col rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#111122]/90 to-[#0a0a13]/90 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-950/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-xl font-bold shadow-lg ${accentStyles[project.accent]}`}
                >
                  {project.icon}
                </div>

                <span className="text-xs font-semibold tracking-wider text-slate-500 font-mono">
                  {project.number} / 06
                </span>
              </div>

              <p className="mt-5 text-[10px] font-bold tracking-[0.22em] text-violet-400/90 uppercase">
                {project.category}
              </p>

              <h3 className="mt-1.5 break-words text-xl font-bold tracking-tight transition group-hover:text-violet-200">
                {project.name}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/[0.07] pt-4">
                <div className="mb-4 flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      project.status === "LIVE"
                        ? "bg-emerald-400 animate-pulse"
                        : "bg-amber-400"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-bold tracking-widest ${
                      project.status === "LIVE"
                        ? "text-emerald-300"
                        : "text-amber-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-3 text-sm font-semibold text-violet-200 transition-all hover:bg-violet-500/20 hover:border-violet-400/50 active:scale-[0.98]"
                  >
                    Visit Live Project <span className="text-base">↗</span>
                  </a>
                ) : (
                  <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-500 font-medium">
                    Currently Building <span>⚙</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing section */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-8 lg:px-10">
        <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-950/40 via-[#111122] to-cyan-950/20 px-6 py-10 sm:py-12 text-center sm:px-12 backdrop-blur-md shadow-xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-violet-300">
            Always Building
          </p>

          <h2 className="mt-3 text-2xl sm:text-4xl font-black tracking-tight">
            More ideas. More projects.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
            I&apos;m continuously learning, building useful applications
            and exploring the possibilities of AI and modern web development.
          </p>

          <p className="mt-6 text-sm font-semibold text-slate-300">
            Md Shakib <span className="text-violet-400">·</span> Learn. Build. Ship.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] px-4 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Shakib.dev · Built with Next.js
      </footer>
    </main>
  );
}