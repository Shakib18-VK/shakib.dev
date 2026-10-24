"use client";

import Link from "next/link";
import { Mail, GitBranch, Code2, ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";

/* ============ CUSTOMIZE YAHAN SE ============ */
const ME = {
  name: "Shakib",
  heroTitle: "Let\u2019s",
  heroAccent: "Build.",
  heroText: "I craft full-stack and GenAI applications, and I learn best by shipping real projects.",
  badge: "Learning \u00b7 Building",
  bio: "B.Tech student in AI & Data Science, focused on full-stack web, GenAI and backend engineering.",
  photo: "",                 // photo ke liye: "/me.jpg" (file public/me.jpg mein rakho). Khali = "S." monogram
  email: "",                 // jaise "name@gmail.com". Khali = Contact page link
  github: "https://github.com/Shakib18-VK",
  linkedin: "",              // optional, khali = hide
};

const domains = [
  { t: "Web", d: "Responsive full-stack apps with React, Next.js and Node.js." },
  { t: "GenAI", d: "LLM apps, prompt engineering, LangGraph and AI agents." },
  { t: "Backend", d: "REST APIs, JWT auth, MongoDB, MySQL and FastAPI." },
  { t: "DSA", d: "Java and Python problem solving on LeetCode." },
];
const techs = ["React", "Next.js", "Node.js", "Express", "MongoDB", "MySQL", "Java", "Python", "FastAPI", "LangGraph", "Tailwind", "Git"];
const targets = ["Gemini", "Claude", "LangGraph", "FastAPI", "MongoDB"];
const orbit = [["Vercel", 0, 140], ["Render", 120, 140], ["Atlas", 240, 140], ["GitHub", 60, 90], ["npm", 200, 90]];
const learning = ["Backend: auth, API security, testing", "DSA: DP, Greedy and Graphs", "GenAI: RAG, embeddings, tool calling", "ML fundamentals with Pandas and NumPy"];
const projects = [
  ["AI Interview Assistant", "Next.js \u00b7 Gemini"],
  ["AI Workflow Automation", "Next.js \u00b7 Express \u00b7 FastAPI \u00b7 LangGraph"],
  ["JD Analyzer", "Next.js \u00b7 MongoDB \u00b7 Gemini"],
  ["College Management System", "React \u00b7 Node.js \u00b7 MongoDB"],
];
/* ============================================ */

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="wrap">
          <Link href="/" className="back"><ArrowLeft size={18} /> Back to home</Link>

          <div className="bento">
            <section className="card hero">
              <h1>{ME.heroTitle} <span className="grad">{ME.heroAccent}</span></h1>
              <p>{ME.heroText}</p>
              <div className="btns">
                {ME.github && <a className="btn light" href={ME.github} target="_blank" rel="noreferrer">GitHub <GitBranch size={18} /></a>}
                {ME.linkedin && <a className="btn light" href={ME.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={18} /></a>}
                {ME.email
                  ? <a className="btn light" href={`mailto:${ME.email}`}>Email Me <Mail size={18} /></a>
                  : <Link className="btn light" href="/contact">Contact Me <Mail size={18} /></Link>}
              </div>
            </section>

            <section className="card profile">
              <span className="status"><i /> {ME.badge}</span>
              {ME.photo ? <img className="photo" src={ME.photo} alt={ME.name} /> : <div className="mono">S.</div>}
              <h2>I&rsquo;m {ME.name}</h2>
              <p>{ME.bio}</p>
            </section>

            <section className="card domain">
              <div className="scroller" tabIndex={0} aria-label="Tech domains">
                {domains.map((x) => (<article className="mini" key={x.t}><h4>{x.t}</h4><p>{x.d}</p></article>))}
              </div>
              <h3>Tech Domain</h3>
              <p>Full stack, GenAI, backend and DSA, learned by building.</p>
            </section>

            <section className="card tech">
              <div className="float-area" aria-hidden="true">
                {techs.map((n, i) => (<span key={n} className="chip" style={{ animationDelay: (i % 5) * 0.6 + "s" }}>{n}</span>))}
              </div>
              <h3>Technologies</h3>
              <p>The tools I use across my projects, from MERN to FastAPI and LangGraph.</p>
            </section>

            <section className="card ai">
              <svg viewBox="0 0 600 230" role="img" aria-label="A user connects to an LLM, which connects to Gemini, Claude, LangGraph, FastAPI and MongoDB">
                <circle cx="50" cy="115" r="26" className="node" />
                <text x="50" y="120" textAnchor="middle" className="nt">User</text>
                <path d="M76 115 H186" className="line" />
                <circle cx="228" cy="115" r="42" className="node big" />
                <text x="228" y="121" textAnchor="middle" className="nt">LLM</text>
                {targets.map((t, i) => {
                  const y = 24 + i * 46;
                  return (
                    <g key={t}>
                      <path d={`M268 115 C 360 115, 380 ${y}, 440 ${y}`} className="line flow" />
                      <circle cx="454" cy={y} r="14" className="node" />
                      <text x="478" y={y + 6} className="lt">{t}</text>
                    </g>
                  );
                })}
              </svg>
              <h3>AI Integrations</h3>
              <p>Interview assistant, JD analyzer and workflow automation with LLMs, tools and agent routing.</p>
            </section>

            <section className="card deploy">
              <div className="orbit-box" aria-hidden="true">
                <i className="ring r1" /><i className="ring r2" />
                <div className="orbit">
                  {orbit.map(([n, a, r]) => (
                    <div className="slot" key={n} style={{ transform: `rotate(${a}deg) translateX(${r}px) rotate(-${a}deg)` }}>
                      <div className="counter"><span className="chip solid">{n}</span></div>
                    </div>
                  ))}
                </div>
                <Code2 className="core" size={28} />
              </div>
              <h3>Seamless Deployments</h3>
              <p>Push, build, deploy on Vercel and Render with MongoDB Atlas.</p>
            </section>

            <section className="card learn">
              <Sparkles className="spark" size={26} />
              <h3>Learning Now</h3>
              <ul>{learning.map((l) => <li key={l}>{l}</li>)}</ul>
            </section>

            <section className="card works">
              <h3>Featured Projects</h3>
              <ul>
                {projects.map(([n, s]) => (
                  <li key={n}><strong>{n}</strong><span>{s}</span></li>
                ))}
              </ul>
              <Link href="/projects" className="more">See all projects <ArrowUpRight size={18} /></Link>
            </section>
          </div>
        </div>
      </main>

      <style jsx>{`
        .page { min-height: 100vh; padding: 56px 0 120px; color: #f4f4f5; background: #09090d; }
        .wrap { width: min(1280px, calc(100% - 48px)); margin: auto; }
        .back { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 28px; color: #a1a1b5; font-size: 16px; text-decoration: none; }
        .back:hover, .more:hover { color: #c4b5fd; }
        .back:focus-visible, .btn:focus-visible, .scroller:focus-visible, .more:focus-visible { outline: 2px solid #a78bfa; outline-offset: 3px; }

        .bento { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: minmax(400px, auto); gap: 22px; }
        .card { position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: flex-end; padding: 40px; background: linear-gradient(160deg, #14141c, #0e0e14); border: 1px solid #25252f; border-radius: 28px; transition: border-color 0.25s; }
        .card:hover { border-color: #8b5cf666; }
        .card h3 { position: relative; font-size: 36px; letter-spacing: -1px; }
        .card > p { position: relative; margin-top: 12px; max-width: 600px; color: #a8a8bc; font-size: 18px; line-height: 1.65; }

        .hero { grid-column: span 2; justify-content: center; }
        .hero h1 { font-size: clamp(56px, 9vw, 128px); line-height: 0.98; letter-spacing: -5px; font-weight: 800; }
        .grad { background: linear-gradient(100deg, #c4b5fd, #8b9cff 55%, #67e8f9); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .hero p { margin-top: 24px; max-width: 600px; color: #a8a8bc; font-size: 21px; line-height: 1.65; }
        .btns { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
        .btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-width: 180px; min-height: 58px; padding: 0 26px; border-radius: 14px; font-size: 17px; font-weight: 650; text-decoration: none; transition: transform 0.2s; }
        .btn:hover { transform: translateY(-3px); }
        .light { color: #111; background: #f4f4f5; }

        .profile { padding: 0; min-height: 520px; }
        .profile::before { content: ""; position: absolute; inset: 0; height: 64%; background: radial-gradient(circle at 30% 20%, #a855f7aa, transparent 60%), linear-gradient(160deg, #6d28d9, #0f766e 90%); opacity: 0.85; }
        .status { position: absolute; top: 20px; right: 20px; z-index: 1; display: flex; align-items: center; gap: 10px; padding: 8px 16px; font-size: 14px; background: #0b0b10cc; border: 1px solid #ffffff22; border-radius: 12px; }
        .status i { width: 10px; height: 10px; border-radius: 50%; background: #4ade80; }
        .mono, .photo { position: absolute; top: 14%; left: 50%; transform: translateX(-50%); width: 150px; height: 150px; border-radius: 40px; }
        .mono { display: grid; place-items: center; font-size: 70px; font-weight: 800; color: #f3e8ff; background: #0b0b1055; border: 1px solid #ffffff44; backdrop-filter: blur(6px); }
        .photo { object-fit: cover; border: 2px solid #ffffff55; }
        .profile h2, .profile p { position: relative; padding: 0 34px; }
        .profile h2 { font-size: 36px; letter-spacing: -1px; }
        .profile p { margin: 10px 0 34px; color: #d2d2de; font-size: 17px; line-height: 1.6; }

        .scroller { display: flex; gap: 16px; margin: -6px -40px 28px; padding: 6px 40px; overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; mask-image: linear-gradient(90deg, #000 85%, transparent); -webkit-mask-image: linear-gradient(90deg, #000 85%, transparent); }
        .scroller::-webkit-scrollbar { display: none; }
        .mini { flex: 0 0 230px; scroll-snap-align: start; padding: 24px; background: #1b1b24; border: 1px solid #2a2a36; border-radius: 18px; }
        .mini h4 { font-size: 22px; }
        .mini p { margin-top: 10px; color: #a8a8bc; font-size: 15px; line-height: 1.55; }

        .tech { grid-column: span 2; }
        .float-area { position: absolute; inset: 40px 40px 170px 40px; display: flex; flex-wrap: wrap; align-content: flex-start; gap: 14px; }
        .chip { padding: 11px 22px; color: #c4b5fd; font-size: 17px; background: #8b5cf61a; border: 1px solid #8b5cf644; border-radius: 999px; animation: bob 5s ease-in-out infinite; }
        .chip.solid { white-space: nowrap; font-size: 16px; animation: none; background: #1b1b24; color: #e4e4e7; border-color: #34344a; }
        @keyframes bob { 50% { transform: translateY(-10px); } }

        .ai { grid-column: span 2; }
        .ai svg { width: 100%; height: auto; margin-bottom: 20px; }
        .node { fill: #2a2a36; stroke: #44445a; }
        .node.big { fill: #3a2f66; stroke: #8b5cf6; }
        .nt { fill: #e4e4e7; font-size: 14px; }
        .lt { fill: #d2d2de; font-size: 17px; }
        .line { fill: none; stroke: #3b3b4d; stroke-width: 1.5; }
        .flow { stroke: #8b5cf6; stroke-dasharray: 4 8; animation: dash 1.4s linear infinite; }
        @keyframes dash { to { stroke-dashoffset: -24; } }

        .orbit-box { position: relative; align-self: center; width: 320px; height: 320px; margin-bottom: 16px; }
        .ring { position: absolute; top: 50%; left: 50%; border: 1px dashed #ffffff28; border-radius: 50%; transform: translate(-50%, -50%); }
        .r1 { width: 280px; height: 280px; }
        .r2 { width: 180px; height: 180px; }
        .orbit { position: absolute; inset: 0; animation: spin 40s linear infinite; }
        .slot { position: absolute; top: 50%; left: 50%; width: 0; height: 0; }
        .counter { position: absolute; transform: translate(-50%, -50%); animation: unspin 40s linear infinite; }
        .core { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: #a78bfa; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes unspin { to { transform: translate(-50%, -50%) rotate(-360deg); } }

        .learn { justify-content: flex-start; }
        .spark { color: #a78bfa; margin-bottom: 18px; }
        .learn ul, .works ul { list-style: none; margin: 22px 0 0; padding: 0; display: grid; gap: 16px; }
        .learn li { position: relative; padding-left: 26px; color: #c9c9d6; font-size: 18px; line-height: 1.5; }
        .learn li::before { content: ""; position: absolute; left: 0; top: 10px; width: 10px; height: 10px; border-radius: 50%; background: linear-gradient(135deg, #8b5cf6, #3b82f6); }
        .works { grid-column: span 2; justify-content: flex-start; }
        .works ul { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .works li { display: grid; gap: 6px; padding: 20px; background: #1b1b24; border: 1px solid #2a2a36; border-radius: 16px; }
        .works strong { font-size: 19px; }
        .works li span { color: #a8a8bc; font-size: 15px; }
        .more { display: inline-flex; align-items: center; gap: 8px; margin-top: 24px; color: #a78bfa; font-size: 17px; font-weight: 600; text-decoration: none; }

        @media (max-width: 1000px) {
          .bento { grid-template-columns: 1fr 1fr; grid-auto-rows: minmax(380px, auto); }
          .hero, .tech, .ai, .works { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .page { padding: 28px 0 72px; }
          .wrap { width: calc(100% - 28px); }
          .bento { grid-template-columns: 1fr; grid-auto-rows: auto; gap: 14px; }
          .hero, .tech, .ai, .works { grid-column: auto; }
          .card { min-height: 0; padding: 26px 22px; border-radius: 22px; }
          .card h3 { font-size: 28px; }
          .card > p { font-size: 17px; }
          .hero { min-height: 400px; }
          .hero h1 { font-size: clamp(54px, 17vw, 76px); letter-spacing: -3px; }
          .hero p { font-size: 18px; }
          .btns { flex-direction: column; }
          .btn { width: 100%; }
          .profile { min-height: 500px; }
          .profile h2, .profile p { padding: 0 22px; }
          .scroller { margin: 0 -22px 24px; padding: 0 22px; scroll-padding-left: 22px; }
          .mini { flex-basis: 200px; }
          .float-area { position: static; margin-bottom: 24px; gap: 10px; }
          .chip { font-size: 15px; padding: 9px 16px; animation: none; }
          .nt { font-size: 17px; }
          .lt { font-size: 24px; }
          .deploy { align-items: center; text-align: center; }
          .deploy > p { margin-inline: auto; }
          .works ul { grid-template-columns: 1fr; }
        }
        @media (max-width: 380px) { .orbit-box { transform: scale(0.88); margin: -18px 0 -2px; } }
        @media (prefers-reduced-motion: reduce) { .chip, .orbit, .counter, .flow { animation: none; } }
      `}</style>
    </>
  );
}