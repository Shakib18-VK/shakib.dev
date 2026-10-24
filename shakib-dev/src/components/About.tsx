import { ArrowUpRight, Code2, BrainCircuit, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building responsive interfaces and practical backend systems.",
  },
  {
    icon: BrainCircuit,
    title: "AI Engineering",
    description: "Exploring Generative AI, LLM workflows and intelligent applications.",
  },
  {
    icon: Rocket,
    title: "Learning by Building",
    description: "Turning concepts into working projects and improving through practice.",
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">A LITTLE ABOUT ME</span>
          <h2>Developer by mindset. <span className="gradient-text">Builder by choice.</span></h2>
          <p>
            I enjoy combining software engineering with AI to build useful,
            thoughtful and user-friendly digital experiences.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-copy glass-card">
            <span className="about-label">MY STORY</span>
            <h3>Curiosity drives the code.</h3>
            <p>
              I&apos;m Md Shakib, an AI and Data Science student focused on
              full-stack development and Generative AI. I enjoy understanding
              how things work, solving problems, and creating applications
              that connect frontend, backend and intelligent systems.
            </p>
            <p>
              Outside project work, I practice Data Structures and Algorithms
              and keep strengthening my software engineering fundamentals.
            </p>
            <a
              className="text-link"
              href="https://github.com/Shakib18-VK"
              target="_blank"
              rel="noreferrer"
            >
              Explore my GitHub <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="about-highlights">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div className="highlight-card glass-card" key={title}>
                <div className="highlight-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <span className="highlight-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}