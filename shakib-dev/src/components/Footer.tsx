import { ArrowUpRight, Mail, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <div className="container contact-inner">
          <span className="section-kicker">HAVE A PROJECT IN MIND?</span>
          <h2>
            Let&apos;s build something
            <br />
            <span className="gradient-text">meaningful together.</span>
          </h2>
          <p>
            Open to connecting with developers, collaborating on ideas and
            exploring exciting opportunities.
          </p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:YOUR_EMAIL@example.com">
              <Mail size={18} /> Get in touch <ArrowUpRight size={17} />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/Shakib18-VK"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={18} /> Follow my work
            </a>
          </div>
          <span className="contact-note">
            Replace YOUR_EMAIL@example.com with your real email address.
          </span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="#home" className="brand">
            <span className="brand-icon"><Code2 size={19} /></span>
            <span>Shakib<span className="brand-accent">.dev</span></span>
          </a>

          <p>Designed with curiosity. Built with code.</p>

          <a className="back-to-top" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}