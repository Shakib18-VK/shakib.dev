"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  MessageSquare,
  Sparkles,
  Terminal,
} from "lucide-react";

const skills = [
  { name: "Frontend", detail: "React · Next.js · Tailwind CSS", icon: Globe },
  { name: "Backend", detail: "Node.js · Express · REST APIs", icon: Database },
  { name: "AI & GenAI", detail: "LLMs · LangGraph · AI workflows", icon: BrainCircuit },
  { name: "Programming", detail: "Java · Python · DSA", icon: Terminal },
  { name: "Data & ML", detail: "Machine Learning · Data Science", icon: Layers3 },
  { name: "Developer Tools", detail: "Git · GitHub · MongoDB", icon: GitBranch },
];

const projects = [
  {
    number: "01",
    title: "AI Workflow Automation",
    category: "FULL STACK · AI",
    description:
      "An AI-powered workflow platform for intelligent processing, automated execution and backend integrations.",
    technologies: ["Next.js", "Express", "Python", "LangGraph"],
    live: "https://n8n-ten-rho.vercel.app",
    github: "https://github.com/Shakib18-VK/n8n",
    icon: GitBranch,
    accent: "from-violet-500/20 to-indigo-500/5",
  },
  {
    number: "02",
    title: "Next-Gen AI Interviewer",
    category: "GENERATIVE AI · WEB APP",
    description:
      "An AI interview preparation application with interview tools and a job description analyzer.",
    technologies: ["Next.js", "Gemini", "MongoDB", "AI"],
    live: "https://next-gen-ai-interviewing-interview-navy.vercel.app",
    github: "",
    icon: BrainCircuit,
    accent: "from-cyan-500/20 to-blue-500/5",
  },
];

const journey = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building web applications with React, Next.js, Node.js, Express and MongoDB.",
  },
  {
    number: "02",
    title: "Problem Solving",
    description:
      "Strengthening Java, Data Structures, Algorithms and interview problem-solving skills.",
  },
  {
    number: "03",
    title: "AI & Generative AI",
    description:
      "Exploring LLMs, machine learning, LangGraph and practical AI-powered applications.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080a12] text-white relative">
      {/* HERO */}
      <section id="home" className="relative isolate scroll-mt-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_20%,rgba(124,58,237,0.17),transparent_38%),radial-gradient(ellipse_at_90%_70%,rgba(37,99,235,0.13),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:38px_38px] sm:bg-[size:55px_55px]" />

        <div className="mx-auto grid min-h-[calc(100svh-76px)] max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-20">
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5 text-xs text-zinc-300 sm:text-sm">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
              Developer building with code &amp; AI
            </div>

            <p className="mt-8 text-xs font-bold tracking-[0.22em] text-violet-300 sm:text-sm">
              HELLO, WORLD. I&apos;M
            </p>

            <h1 className="mt-3 break-words text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
              Md Shakib<span className="text-violet-300">.</span>
              <span className="mt-3 block bg-gradient-to-r from-violet-300 via-indigo-300 to-cyan-300 bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl">
                Developer &amp; AI Builder.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-8">
              I build useful digital experiences and AI-powered applications by combining full-stack engineering with Generative AI.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:brightness-110"
              >
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/40 hover:bg-white/[0.06]"
              >
                Let&apos;s connect <ArrowRight size={17} />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500 sm:text-sm">
              <a
                href="https://github.com/Shakib18-VK"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-violet-300"
              >
                <Code2 size={17} /> GitHub
              </a>
              <span className="hidden h-1 w-1 rounded-full bg-zinc-600 sm:block" />
              <span>Full Stack · GenAI · Java</span>
            </div>
          </div>

          {/* Code Card */}
          <div className="relative mx-auto w-full min-w-0 max-w-xl lg:mx-0 lg:ml-auto">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[85px] sm:h-72 sm:w-72" />

            <div className="relative rounded-2xl border border-violet-300/20 bg-[#0d0f1b]/95 shadow-2xl shadow-black/40 sm:rounded-3xl">
              <div className="flex h-12 items-center gap-2 border-b border-white/[0.07] px-4 sm:px-5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 flex-1 truncate font-mono text-xs text-zinc-500">
                  shakib.ts
                </span>
                <Code2 size={17} className="shrink-0 text-zinc-500" />
              </div>

              <div className="overflow-x-auto p-4 font-mono text-[11px] leading-7 sm:p-6 sm:text-sm sm:leading-8">
                <div className="min-w-[245px]">
                  <p><span className="mr-4 text-zinc-600">01</span><span className="text-violet-300">const</span> <span className="text-sky-300">developer</span> = {"{"}</p>
                  <p className="pl-4 sm:pl-8"><span className="mr-4 text-zinc-600">02</span>name: <span className="text-emerald-300">&quot;Shakib&quot;</span>,</p>
                  <p className="pl-4 sm:pl-8"><span className="mr-4 text-zinc-600">03</span>focus: <span className="text-emerald-300">&quot;Full Stack&quot;</span>,</p>
                  <p className="pl-4 sm:pl-8"><span className="mr-4 text-zinc-600">04</span>passion: <span className="text-emerald-300">&quot;AI&quot;</span>,</p>
                  <p className="pl-4 sm:pl-8"><span className="mr-4 text-zinc-600">05</span>mindset: <span className="text-emerald-300">&quot;Keep building&quot;</span>,</p>
                  <p><span className="mr-4 text-zinc-600">06</span>{"};"}</p>
                </div>

                <div className="my-5 border-t border-white/[0.08]" />
                <p className="flex items-center gap-2 text-[10px] tracking-[0.16em] text-violet-300 sm:text-xs">
                  <Terminal size={15} /> CURRENT_MISSION
                </p>
                <p className="mt-3 text-xs text-zinc-200 sm:text-sm">
                  <span className="text-emerald-400">➜</span> Build. Learn. Ship.
                </p>
                <p className="mt-2 break-words text-[10px] text-zinc-500 sm:text-xs">
                  <span className="text-emerald-400">✓</span> Ready to create something useful
                </p>
              </div>
            </div>

            <div className="relative mt-4 grid grid-cols-2 gap-3 sm:absolute sm:-right-3 sm:-top-5 sm:mt-0 sm:w-auto sm:translate-x-0 sm:grid-cols-1 md:-right-5">
              <div className="flex min-w-0 items-center gap-2.5 rounded-xl border border-white/10 bg-[#141522] p-3 shadow-xl sm:gap-3 sm:p-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-500/15 text-violet-300">
                  <Sparkles size={18} />
                </span>
                <span className="min-w-0">
                  <strong className="block text-xs text-zinc-100 sm:text-sm">Generative AI</strong>
                  <small className="mt-0.5 block text-[10px] text-zinc-500 sm:text-xs">Intelligent apps</small>
                </span>
              </div>
              <div className="flex min-w-0 items-center gap-2.5 rounded-xl border border-white/10 bg-[#141522] p-3 shadow-xl sm:gap-3 sm:p-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sky-500/15 text-sky-300">
                  <Layers3 size={18} />
                </span>
                <span className="min-w-0">
                  <strong className="block text-xs text-zinc-100 sm:text-sm">Full Stack</strong>
                  <small className="mt-0.5 block text-[10px] text-zinc-500 sm:text-xs">Frontend to backend</small>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden pb-8 text-center sm:block">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-zinc-500 transition hover:text-violet-300"
          >
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 border-t border-white/[0.06] bg-[#0a0b14] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:px-8 lg:gap-20">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-violet-300">A LITTLE ABOUT ME</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Curious mind.
              <span className="mt-1 block bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Builder mindset.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-7 text-zinc-200 sm:text-xl sm:leading-9">
              I&apos;m Md Shakib, an AI &amp; Data Science student interested in building useful products at the intersection of web development and artificial intelligence.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-8">
              From crafting full-stack applications to experimenting with LLM-powered workflows, I enjoy turning ideas into working software. I believe in learning by building, solving problems and improving with every project.
            </p>
            <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200">
              More about me <ArrowUpRight size={17} />
            </Link>

            <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:mt-10">
              {[
                { icon: Code2, title: "Build", text: "Real-world applications" },
                { icon: BrainCircuit, title: "Explore", text: "AI and new technologies" },
                { icon: GitBranch, title: "Improve", text: "One iteration at a time" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 sm:p-5">
                    <Icon size={21} className="text-violet-300" />
                    <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="scroll-mt-24 border-y border-white/[0.06] bg-[#0d0e18] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="text-xs font-bold tracking-[0.2em] text-violet-300">MY TOOLKIT</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Skills I use to <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">build.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Technologies and concepts I&apos;ve been learning and applying across my projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <article key={skill.name} className="group rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#151624] to-[#10111b] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 sm:p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-violet-400/15 bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/20">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{skill.name}</h3>
                  <p className="mt-2 break-words text-sm leading-relaxed text-zinc-400">{skill.detail}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/skills" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200">
              Explore all skills <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 bg-[#0a0b14] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <p className="text-xs font-bold tracking-[0.2em] text-violet-300">SELECTED WORK</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ideas turned into <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">products.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Projects where full-stack development meets AI.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article key={project.number} className="group min-w-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#11121e] transition duration-300 hover:-translate-y-1 hover:border-violet-400/30">
                  <div className={`relative flex min-h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.accent} p-5 sm:min-h-64 sm:p-8`}>
                    <div className="absolute h-40 w-40 rounded-full bg-violet-500/10 blur-3xl sm:h-56 sm:w-56" />
                    <div className="relative w-full max-w-sm overflow-hidden rounded-xl border border-white/10 bg-[#0b0d17]/95 shadow-2xl">
                      <div className="flex h-9 items-center gap-1.5 border-b border-white/[0.08] px-3">
                        <span className="h-2 w-2 rounded-full bg-red-400" />
                        <span className="h-2 w-2 rounded-full bg-amber-300" />
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="ml-auto max-w-[60%] truncate text-[10px] text-zinc-600">{project.title}</span>
                      </div>
                      <div className="p-5 sm:p-6">
                        <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] text-violet-300">
                          <Sparkles size={13} /> PROJECT PREVIEW
                        </span>
                        <span className="mt-4 grid h-12 w-12 place-items-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                          <Icon size={25} />
                        </span>
                        <p className="mt-4 break-words text-sm font-semibold text-zinc-100 sm:text-base">{project.title}</p>
                        <div className="mt-4 space-y-2">
                          <div className="h-1.5 w-full rounded-full bg-white/[0.07]" />
                          <div className="h-1.5 w-3/4 rounded-full bg-white/[0.07]" />
                          <div className="h-1.5 w-1/2 rounded-full bg-white/[0.07]" />
                        </div>
                      </div>
                    </div>
                    <span className="absolute bottom-3 right-4 text-2xl font-bold text-white/25 sm:bottom-4 sm:right-5 sm:text-3xl">{project.number}</span>
                  </div>

                  <div className="p-5 sm:p-7">
                    <p className="text-[10px] font-bold tracking-[0.17em] text-violet-300 sm:text-xs">{project.category}</p>
                    <h3 className="mt-3 break-words text-xl font-bold tracking-tight sm:text-2xl">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-300">
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/[0.08] pt-5">
                      <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-violet-300">
                        Live Demo <ArrowUpRight size={16} />
                      </a>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-violet-300">
                          <Code2 size={16} /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200">
              View all projects <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="scroll-mt-24 border-y border-white/[0.06] bg-[#0d0e18] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-14 lg:px-8 lg:gap-20">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-violet-300">THE JOURNEY</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Always learning.
              <span className="mt-1 block bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Always building.
              </span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-8">
              A continuous journey of strengthening fundamentals, exploring technology and creating practical projects.
            </p>
            <Link href="/journey" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200">
              Explore my journey <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="space-y-4">
            {journey.map((item) => (
              <article key={item.number} className="flex gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:gap-5 sm:p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-violet-400/20 bg-violet-500/10 font-mono text-sm text-violet-300">
                  {item.number}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold sm:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-[#090a12] px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[100px] sm:h-96 sm:w-96" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] text-violet-300">HAVE AN IDEA?</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s build something
            <span className="mt-2 block bg-gradient-to-r from-violet-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              meaningful together.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-8">
            Open to connecting with developers, collaborating on ideas and exploring exciting opportunities.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row sm:flex-wrap">
            <a href="mailto:shakib.dev@example.com" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
              Get in touch <ArrowUpRight size={17} />
            </a>
            <a href="https://github.com/Shakib18-VK" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/[0.07]">
              <Code2 size={17} /> Follow my work
            </a>
          </div>
          <p className="mt-4 text-xs text-zinc-600">Replace the example email with your real email address.</p>
        </div>
      </section>

      {/* Ask Shakib Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/chat"
          className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-950/50 transition-all duration-300 hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-violet-400"
          aria-label="Ask Shakib AI Chat"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white/20 text-white transition group-hover:rotate-12">
            <MessageSquare size={16} />
          </span>
          <span>Ask Shakib</span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
          </span>
        </Link>
      </div>
    </main>
  );
}