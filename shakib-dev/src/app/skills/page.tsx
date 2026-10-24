import Link from "next/link";
import {
  ArrowLeft,
  Code2,
  Database,
  BrainCircuit,
  Cpu,
  Wrench,
  Sparkles,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "Redux"],
    color: "from-violet-500/20 via-purple-500/10 to-transparent",
    borderColor: "group-hover:border-violet-500/40",
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "JWT", "FastAPI"],
    color: "from-blue-500/20 via-cyan-500/10 to-transparent",
    borderColor: "group-hover:border-blue-500/40",
  },
  {
    title: "Programming & DSA",
    icon: Code2,
    skills: ["Java", "Python", "Data Structures", "Algorithms", "LeetCode", "Problem Solving"],
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderColor: "group-hover:border-amber-500/40",
  },
  {
    title: "Generative AI",
    icon: BrainCircuit,
    skills: ["LLMs", "Prompt Engineering", "Gemini", "Claude", "LangGraph", "AI Agents"],
    color: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
    borderColor: "group-hover:border-fuchsia-500/40",
  },
  {
    title: "Data Science & ML",
    icon: Cpu,
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Machine Learning"],
    color: "from-emerald-500/20 via-green-500/10 to-transparent",
    borderColor: "group-hover:border-emerald-500/40",
  },
  {
    title: "Tools & Deployment",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render", "MongoDB Atlas"],
    color: "from-sky-500/20 via-indigo-500/10 to-transparent",
    borderColor: "group-hover:border-sky-500/40",
  },
];

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] px-4 py-8 text-white sm:px-8 sm:py-12 lg:px-12">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 -z-10 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="mx-auto max-w-6xl">
        {/* Navigation */}
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300 backdrop-blur-md transition hover:border-violet-400/40 hover:bg-white/[0.06] hover:text-white sm:mb-12 sm:text-sm"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <section className="mb-10 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3.5 py-1.5 text-xs font-medium text-violet-300 shadow-lg shadow-violet-500/10 sm:text-sm">
            <Sparkles size={14} className="text-violet-400" />
            My Technical Arsenal
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
            My developer journey spans full-stack web development, programming, Generative AI, and Machine Learning. I keep learning, experimenting, and building real-world projects.
          </p>
        </section>

        {/* Skills Grid */}
        <section className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br ${group.color} p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-950/30 sm:p-6`}
              >
                <div>
                  {/* Card Header */}
                  <div className="mb-5 flex items-center gap-3.5 sm:mb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#080d20]/80 text-violet-300 shadow-inner group-hover:scale-105 transition-transform duration-300">
                      <Icon size={22} />
                    </div>
                    <h2 className="text-base font-bold text-white sm:text-lg">
                      {group.title}
                    </h2>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.08] bg-[#080d20]/70 px-2.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm transition duration-200 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white sm:px-3 sm:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 border-t border-white/[0.06] pt-3.5 text-[11px] font-medium tracking-wide text-slate-500 uppercase sm:mt-8 sm:text-xs">
                  Learning · Building · Improving
                </div>
              </article>
            );
          })}
        </section>

        {/* Footer CTA Section */}
        <section className="relative mt-10 overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-b from-violet-500/[0.08] to-transparent p-6 text-center backdrop-blur-md sm:mt-16 sm:p-10">
          <div className="pointer-events-none absolute -bottom-10 left-1/2 -z-10 h-32 w-64 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl" />

          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-300 shadow-inner">
            <GraduationCap size={26} />
          </div>

          <h2 className="text-xl font-bold sm:text-3xl text-white">
            The learning never stops.
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-slate-400 sm:mt-4 sm:text-sm sm:leading-7">
            Currently focusing on advanced DSA, backend engineering, Machine Learning, and building intelligent AI-powered applications.
          </p>

          <Link
            href="/projects"
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-violet-600/30 transition duration-200 hover:bg-violet-500 hover:shadow-violet-600/50 sm:text-sm"
          >
            Explore My Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </div>
    </main>
  );
}