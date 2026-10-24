"use client";

import { motion } from "framer-motion";
import { Terminal, Circle } from "lucide-react";

const codeLines = [
  { number: "01", content: 'const developer = "Shakib";', color: "code-purple" },
  { number: "02", content: 'const focus = ["Full Stack",', color: "code-blue" },
  { number: "03", content: '  "Generative AI"];', color: "code-blue" },
  { number: "04", content: "", color: "" },
  { number: "05", content: "function buildIdeas() {", color: "code-yellow" },
  { number: "06", content: "  return innovation;", color: "code-green" },
  { number: "07", content: "}", color: "code-yellow" },
];

export default function TerminalCard() {
  return (
    <motion.div
      className="terminal-card"
      initial={{ opacity: 0, y: 24, rotate: 1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="terminal-topbar">
        <div className="terminal-dots">
          <Circle size={10} fill="#ff5f57" stroke="none" />
          <Circle size={10} fill="#febc2e" stroke="none" />
          <Circle size={10} fill="#28c840" stroke="none" />
        </div>

        <div className="terminal-file">
          <Terminal size={14} />
          <span>developer.ts</span>
        </div>

        <span className="terminal-status">TypeScript</span>
      </div>

      <div className="terminal-code">
        {codeLines.map((line) => (
          <div className="code-line" key={line.number}>
            <span className="line-number">{line.number}</span>
            <span className={line.color}>{line.content || "\u00A0"}</span>
          </div>
        ))}
      </div>

      <div className="terminal-bottom">
        <span className="terminal-live-dot" />
        <span>Available for opportunities</span>
        <span className="terminal-bottom-right">● UTF-8</span>
      </div>
    </motion.div>
  );
}