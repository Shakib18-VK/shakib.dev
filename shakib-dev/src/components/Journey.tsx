import { GraduationCap, Code2, BrainCircuit, Target } from "lucide-react";

const milestones = [
  {
    icon: GraduationCap,
    label: "EDUCATION",
    title: "AI & Data Science",
    description:
      "Pursuing a B.Tech degree while building a foundation in software development and intelligent systems.",
    status: "ONGOING",
  },
  {
    icon: Code2,
    label: "DEVELOPMENT",
    title: "Full Stack Engineering",
    description:
      "Practicing React, Next.js, Node.js, Express and MongoDB through hands-on projects.",
    status: "PROJECT-BASED LEARNING",
  },
  {
    icon: BrainCircuit,
    label: "AI EXPLORATION",
    title: "Generative AI & Workflows",
    description:
      "Exploring LLM applications, AI-assisted development and workflow orchestration.",
    status: "BUILDING",
  },
  {
    icon: Target,
    label: "NEXT MILESTONE",
    title: "Better products. Better engineering.",
    description:
      "Continuing to improve DSA, system fundamentals, practical development and interview readiness.",
    status: "IN PROGRESS",
  },
];

export default function Journey() {
  return (
    <section className="section section-muted" id="journey">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">THE JOURNEY</span>
          <h2>Always learning. <span className="gradient-text">Always building.</span></h2>
          <p>
            A snapshot of my learning path and the direction I&apos;m working toward.
          </p>
        </div>

        <div className="journey-list">
          {milestones.map(({ icon: Icon, label, title, description, status }, index) => (
            <div className="journey-item" key={title}>
              <div className="journey-marker">
                <Icon size={20} />
              </div>
              <div className="journey-card glass-card">
                <div className="journey-topline">
                  <span>{label}</span>
                  <span className="journey-status">{status}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <span className="journey-number">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}