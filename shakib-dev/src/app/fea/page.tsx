"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight,  Sparkles, Clock, Hammer, ExternalLink, Code2 } from "lucide-react";

const currentProjects = [
  {
    id: "1",
    title: "AI Workflow Automation Platform",
    subtitle: "Active Development",
    description: "Building an n8n-style AI automation platform integrating Next.js, Express backend, Python engine and LangGraph-based workflows.",
    tech: ["Next.js", "Express.js", "FastAPI", "LangGraph", "MongoDB"],
    status: "LIVE & UPDATING",
    liveUrl: "https://n8n-ten-rho.vercel.app",
    githubUrl: "https://github.com/Shakib18-VK",
    progress: "85%",
  },
  {
    id: "2",
    title: "AI Interview & Career Assistant",
    subtitle: "Refining Features",
    description: "Enhancing AI-powered interview practice, JD resume analyzer, and real-time feedback loops using Gemini API.",
    tech: ["Next.js", "Gemini API", "MongoDB", "Tailwind"],
    status: "LIVE",
    liveUrl: "https://next-gen-ai-interviewing-interview-navy.vercel.app",
    githubUrl: "https://github.com/Shakib18-VK",
    progress: "90%",
  },
  {
    id: "3",
    title: "Hospital Management System (HMS)",
    subtitle: "Core Architecture Phase",
    description: "Developing robust data workflows, role-based access control, patient records management and appointment scheduling.",
    tech: ["Next.js", "Node.js", "MongoDB", "Express"],
    status: "IN DEVELOPMENT",
    liveUrl: "",
    githubUrl: "https://github.com/Shakib18-VK",
    progress: "45%",
  },
  {
    id: "4",
    title: "Advanced Next.js Authentication Engine",
    subtitle: "Security & Middleware",
    description: "Building a secure authentication boilerplate supporting JWT, custom middleware, protected routing, and encrypted cookies.",
    tech: ["Next.js", "TypeScript", "JWT", "Middleware"],
    status: "IN DEVELOPMENT",
    liveUrl: "",
    githubUrl: "https://github.com/Shakib18-VK",
    progress: "60%",
  },
];

export default function CurrentProjectsPage() {
  return (
    <main className="min-h-screen bg-[#070711] text-white px-4 sm:px-8 lg:px-12 py-10 sm:py-16 selection:bg-violet-500/30 selection:text-violet-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 mb-8 text-slate-400 text-sm hover:text-violet-400 transition-colors">
          <ArrowLeft size={16} /> Back to home
        </Link>

        {/* Section Header */}
        <div className="text-center sm:text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
            <Hammer size={13} /> CURRENTLY BUILDING
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            What I&apos;m <span className="bg-gradient-to-r from-amber-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Working On.</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Here are the projects, experiments, and system architectures I am actively building, scaling, and improving right now.
          </p>
        </div>

        {/* Current Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentProjects.map((project) => (
            <article 
              key={project.id}
              className="group relative rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#121222]/90 via-[#0a0a14]/90 to-[#070711]/90 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-950/20 overflow-hidden"
            >
              <div>
                {/* Status & Progress Bar Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[11px] font-bold tracking-widest text-amber-300 uppercase">
                      {project.status}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/10">
                    {project.progress} Built
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-violet-400 font-medium mt-0.5">{project.subtitle}</p>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.07] text-[11px] text-slate-300 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-8 pt-5 border-t border-white/[0.07] flex items-center gap-3">
                {project.liveUrl ? (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-200 font-semibold text-xs sm:text-sm transition active:scale-[0.98]"
                  >
                    View Live <ExternalLink size={15} />
                  </a>
                ) : (
                  <div className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-500 text-xs sm:text-sm font-medium">
                    In Development ⚙️
                  </div>
                )}

                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="GitHub Repository"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-slate-300 hover:text-white transition"
                >
                  <Code2 size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}