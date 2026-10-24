"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Layers3, Server, BrainCircuit, Wrench } from "lucide-react";
import { skills, type Skill } from "@/data/skills";

const categories = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "AI & Data",
  "Tools",
] as const;

const icons = {
  Languages: Code2,
  Frontend: Layers3,
  Backend: Server,
  "AI & Data": BrainCircuit,
  Tools: Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const filteredSkills: Skill[] =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section className="section section-muted" id="skills">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">MY TOOLKIT</span>
          <h2>Skills I use to <span className="gradient-text">build things.</span></h2>
          <p>
            Technologies and concepts I&apos;ve been learning and applying
            through hands-on development.
          </p>
        </div>

        <div className="skill-filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`filter-button ${
                activeCategory === category ? "filter-active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="skills-grid">
          {filteredSkills.map((skill) => {
            const Icon = icons[skill.category];

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="skill-card"
                key={skill.name}
              >
                <span className="skill-icon">
                  <Icon size={19} />
                </span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-arrow">↗</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}