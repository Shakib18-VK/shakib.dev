export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "AI Workflow Automation",
    category: "AI Engineering",
    description:
      "An AI-powered workflow platform designed to route queries, generate intelligent responses, and connect useful tools through an automated pipeline.",
    technologies: [
      "Next.js",
      "Express.js",
      "FastAPI",
      "LangGraph",
    ],
    liveUrl: "https://n8n-ten-rho.vercel.app",
    githubUrl: "https://github.com/Shakib18-VK/n8n",
    featured: true,
  },
  {
    id: "02",
    title: "Next-Gen AI Interviewer",
    category: "Generative AI",
    description:
      "An AI interview preparation platform with interview practice and a job-description analyzer to help users prepare for opportunities.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Gemini AI",
      "MongoDB",
    ],
    liveUrl:
      "https://next-gen-ai-interviewing-interview-navy.vercel.app",
    featured: true,
  },
];