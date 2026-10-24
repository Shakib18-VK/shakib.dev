"use client";

const journey = [
  {
    year: "01",
    label: "FOUNDATION",
    title: "Started My Developer Journey",
    description:
      "Started learning programming, web development and the fundamentals of building applications.",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    accent: "violet",
    icon: "⌘",
    status: "COMPLETED",
  },
  {
    year: "02",
    label: "FULL STACK DEVELOPMENT",
    title: "From Frontend to Backend",
    description:
      "Learned React, Node.js, Express and MongoDB. Started building full-stack applications and understanding APIs, authentication and databases.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    accent: "blue",
    icon: "⌘",
    status: "COMPLETED",
  },
  {
    year: "03",
    label: "PROGRAMMING & DSA",
    title: "Building Problem-Solving Skills",
    description:
      "Practiced Java, Data Structures and Algorithms, and LeetCode problems across arrays, trees, heaps, recursion and common algorithmic patterns.",
    tags: ["Java", "DSA", "LeetCode", "Trees", "Heap"],
    accent: "emerald",
    icon: "⌁",
    status: "ONGOING",
  },
  {
    year: "04",
    label: "GENERATIVE AI",
    title: "Exploring AI-Powered Applications",
    description:
      "Studied Generative AI and explored LLMs, prompt engineering, AI agents and workflow automation. Started integrating AI into web applications.",
    tags: ["GenAI", "Gemini", "Claude", "LangGraph", "AI Agents"],
    accent: "pink",
    icon: "✳",
    status: "LEARNED & BUILDING",
  },
  {
    year: "05",
    label: "REAL-WORLD PROJECTS",
    title: "Turning Ideas into Applications",
    description:
      "Built and deployed AI Workflow Automation and AI Interview Assistant. Continued working on career tools, management systems and other web applications.",
    tags: ["Next.js", "MongoDB", "FastAPI", "Vercel", "Deployment"],
    accent: "cyan",
    icon: "◈",
    status: "IN PROGRESS",
  },
  {
    year: "06",
    label: "CURRENT FOCUS",
    title: "Becoming a Strong Backend & AI Developer",
    description:
      "Continuing DSA practice while improving backend engineering, Machine Learning, aptitude, English communication and production-ready development.",
    tags: ["DP", "Greedy", "Backend", "Machine Learning", "Placement Prep"],
    accent: "amber",
    icon: "↗",
    status: "CURRENT",
  },
];

const goals = [
  {
    number: "01",
    title: "Master DSA",
    description: "Improve problem-solving and prepare for technical interviews.",
  },
  {
    number: "02",
    title: "Build Production Projects",
    description: "Create reliable, useful and well-documented applications.",
  },
  {
    number: "03",
    title: "Go Deeper into AI",
    description: "Learn RAG, AI agents and practical AI engineering.",
  },
  {
    number: "04",
    title: "Crack Placements",
    description: "Prepare for coding rounds, aptitude and interviews.",
  },
];

const accentStyles: Record<string, string> = {
  violet: "border-violet-400/30 bg-violet-400/10 text-violet-300 shadow-violet-950/20",
  blue: "border-blue-400/30 bg-blue-400/10 text-blue-300 shadow-blue-950/20",
  emerald: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-emerald-950/20",
  pink: "border-pink-400/30 bg-pink-400/10 text-pink-300 shadow-pink-950/20",
  cyan: "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-cyan-950/20",
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-300 shadow-amber-950/20",
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#070711] text-white selection:bg-violet-500/30 selection:text-violet-200">
      {/* Hero Section */}
      <section className="relative px-4 pb-10 pt-20 sm:px-8 sm:pb-16 sm:pt-28 lg:px-10">
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 sm:h-80 sm:w-80 -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-600/20 to-fuchsia-600/20 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] text-violet-400">
            MY STORY · MY PROGRESS
          </p>

          <h1 className="mt-3.5 text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight">
            The Journey{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              So Far.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm lg:text-base leading-relaxed text-slate-400 px-2">
            Every project, every problem solved and every new technology
            learned is another step toward becoming a better developer.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 text-[11px] sm:text-xs font-medium text-violet-200 backdrop-blur-sm">
              B.Tech · AIDS
            </span>
            <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] sm:text-xs font-medium text-cyan-200 backdrop-blur-sm">
              Full Stack Development
            </span>
            <span className="rounded-full border border-pink-400/25 bg-pink-400/10 px-3 py-1 text-[11px] sm:text-xs font-medium text-pink-200 backdrop-blur-sm">
              Generative AI
            </span>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mx-auto max-w-5xl px-4 py-6 sm:px-8 lg:px-10">
        <div className="mb-8 text-left">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-violet-400 uppercase">
            01 / THE TIMELINE
          </p>
          <h2 className="mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight">
            Learning by Building
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
            A snapshot of my learning journey and current development focus.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line with glow */}
          <div className="absolute bottom-6 left-[19px] top-6 w-[2px] bg-gradient-to-b from-violet-500 via-fuchsia-500/60 to-transparent sm:left-[23px]" />

          <div className="space-y-5 sm:space-y-7">
            {journey.map((item) => (
              <article
                key={item.year}
                className="relative pl-11 sm:pl-16 group"
              >
                {/* Step Node Icon */}
                <div
                  className={`absolute left-0 top-4 z-10 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl border bg-[#0b0b16] text-sm sm:text-lg shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105 ${accentStyles[item.accent]}`}
                >
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#121222]/90 via-[#0a0a14]/90 to-[#070711]/90 p-4 sm:p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/20">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] ${accentStyles[item.accent]}`}
                    >
                      {item.label}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold tracking-wider text-slate-500 font-mono">
                      STEP {item.year}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base sm:text-xl font-bold tracking-tight text-white group-hover:text-violet-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[11px] text-slate-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 border-t border-white/[0.07] pt-3">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        item.status === "CURRENT"
                          ? "animate-pulse bg-emerald-400"
                          : "bg-violet-400"
                      }`}
                    />
                    <span className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
                      {item.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-8 lg:px-10">
        <p className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-cyan-400 uppercase">
          02 / WHAT&apos;S NEXT
        </p>

        <h2 className="mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight">
          The Next Chapter
        </h2>

        <p className="mt-1.5 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-400">
          The goal is not just to learn more technologies, but to become
          a developer who can solve real problems and ship useful products.
        </p>

        <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
          {goals.map((goal) => (
            <article
              key={goal.number}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04]"
            >
              <span className="text-[10px] font-bold tracking-widest text-cyan-400 font-mono">
                GOAL / {goal.number}
              </span>
              <h3 className="mt-2 text-base font-bold text-slate-100">{goal.title}</h3>
              <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-400">
                {goal.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing Card */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-8 lg:px-10">
        <div className="rounded-2xl sm:rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-950/40 via-[#111122] to-cyan-950/25 px-5 py-8 sm:py-12 text-center sm:px-12 backdrop-blur-md shadow-xl">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-violet-300">
            Still Growing
          </p>

          <h2 className="mt-2.5 text-xl sm:text-3xl lg:text-4xl font-black tracking-tight">
            The journey is far from over.
          </h2>

          <p className="mx-auto mt-2.5 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-400">
            Learning never stops. I&apos;m focused on building better
            projects, strengthening fundamentals and preparing for the
            next opportunity.
          </p>

          <p className="mt-5 text-xs sm:text-sm font-semibold text-slate-300">
            Md Shakib <span className="text-violet-400">·</span> Learn. Build. Grow.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] px-4 py-5 text-center text-[11px] sm:text-xs text-slate-500">
        © {new Date().getFullYear()} Shakib.dev · Built with Next.js
      </footer>
    </main>
  );
}