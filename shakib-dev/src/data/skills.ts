export type Skill = {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "AI & Data" | "Tools";
};

export const skills: Skill[] = [
  { name: "Java", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },

  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "REST APIs", category: "Backend" },

  { name: "Machine Learning", category: "AI & Data" },
  { name: "Generative AI", category: "AI & Data" },
  { name: "LangGraph", category: "AI & Data" },

  { name: "Git & GitHub", category: "Tools" },
  { name: "Data Structures & Algorithms", category: "Tools" },
];