import { ArrowUpRight, Code2, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">SELECTED WORK</span>
          <h2>Ideas turned into <span className="gradient-text">products.</span></h2>
          <p>
            A selection of projects where full-stack engineering meets AI.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <div className={`project-art project-art-${index + 1}`}>
                <div className="project-art-orb" />
                <div className="project-art-window">
                  <div className="project-window-bar">
                    <span />
                    <span />
                    <span />
                    <small>{project.title.toLowerCase().replaceAll(" ", "-")}</small>
                  </div>
                  <div className="project-window-content">
                    <span className="project-code-label">
                      <Sparkles size={14} /> PROJECT PREVIEW
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                    <div className="project-preview-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <span className="project-index">{project.id}</span>
              </div>

              <div className="project-info">
                <div className="project-title-row">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <a
                    className="project-open-icon"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                     <Code2 size={16} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}