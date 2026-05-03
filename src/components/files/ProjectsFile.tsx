'use client';
import { motion, Variants } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: "Legal-Link",
    icon: "💻", // FULL STACK
    description: "A full-stack MERN-based legal management platform with role-based authentication for Clients, Lawyers, and Admins. Features secure JWT authentication, lawyer verification workflow, document upload system using Multer, and RESTful APIs with Express.js. Built with scalable architecture and real-world case management functionalities.",
    tags: "FULL STACK • MERN • AUTH SYSTEM",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
    github: "https://github.com/bussasurya/legallink",
    live: "https://legallink.vercel.app"
  },
  {
    name: "DSA Mentorship Platform",
    icon: "🧠", // LOGIC / DSA
    description: "A modern platform for connecting mentors and mentees with integrated payment and booking features.",
    tags: "FULL STACK • PLATFORM",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/surya/dsamentor",
  },
  {
    name: "Space Portfolio 3D",
    icon: "🌐", // WEB / WORLD / 3D
    description: "Futuristic 3D space-themed portfolio with interactive planets and smooth GSAP animations.",
    tags: "3D WEB • ANIMATION",
    techStack: ["Three.js", "React Three Fiber", "GSAP"],
    github: "https://github.com/surya/space-portfolio",
    live: "https://space.surya.dev"
  },
  {
    name: "AI Image Generator",
    icon: "🤖", // AI
    description: "A serverless AI-powered image generation tool using Stable Diffusion APIs and responsive React frontend.",
    tags: "AI • FULL STACK",
    techStack: ["Next.js", "OpenAI API", "Vercel"],
    github: "https://github.com/surya/ai-image-gen",
    live: "https://ai-gen.surya.dev"
  },
  {
    name: "AI Image Generator",
    icon: "🤖",
    description: "A serverless AI-powered image generation tool using Stable Diffusion APIs and responsive React frontend.",
    tags: "AI • FULL STACK",
    techStack: ["Next.js", "OpenAI API", "Vercel"],
    github: "https://github.com/surya/ai-image-ge",
    live: "https://ai-gen.surya.dev"
  },
  {
    name: "AI Image Generator",
    icon: "🤖",
    description: "A serverless AI-powered image generation tool using Stable Diffusion APIs and responsive React frontend.",
    tags: "AI • FULL STACK",
    techStack: ["Next.js", "OpenAI API", "Vercel"],
    github: "https://github.com/surya/ai-imag-gen",
    live: "https://ai-gen.surya.dev"
  }
];

const ProjectCard = ({ project, variants }: { project: any, variants: Variants }) => {
  return (
    <motion.div variants={variants} className="project-card bg-[#252526] border border-[#333] rounded-lg p-5 flex flex-col gap-3 shadow-lg hover:border-[#4fc1ff]/50 transition-colors">

      {/* TOP ROW */}
      <div className="project-top flex justify-between items-center mb-1">

        {/* ✅ EMOJI ICON */}
        <span className="text-2xl">{project.icon}</span>

        {/* ACTIONS */}
        <div className="actions flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn text-[#cccccc] hover:text-white hover:bg-white/10 p-2 rounded-md transition-colors">
              <FaGithub size={18} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn text-[#cccccc] hover:text-[#4fc1ff] hover:bg-[#4fc1ff]/10 p-2 rounded-md transition-colors">
              <FaExternalLinkAlt size={16} />
            </a>
          )}
        </div>
      </div>

      {/* TAG LINE */}
      <div className="project-tags text-[10px] font-bold text-[#4fc1ff] tracking-widest">
        {project.tags}
      </div>

      {/* TITLE */}
      <h3 className="project-title subheading-font text-xl font-bold text-[#e0e0e0]">
        {project.name}
      </h3>

      {/* DESCRIPTION */}
      <p className="project-description text-[#cccccc] text-sm leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* TECH STACK */}
      <div className="tech-stack flex flex-wrap gap-2 mt-2">
        {project.techStack.map((tech: string, i: number) => (
          <span key={i} className="tech text-xs font-mono text-[#ce9178] bg-[#1e1e1e] border border-[#3c3c3c] px-2 py-1 rounded-sm">
            {tech}
          </span>
        ))}
      </div>

    </motion.div>
  );
};

export default function ProjectsFile({ hasBeenOpened }: { hasBeenOpened: boolean }) {
  const container: Variants = {
    hidden: { opacity: hasBeenOpened ? 1 : 0 },
    visible: { opacity: 1, transition: { staggerChildren: hasBeenOpened ? 0 : 0.1 } }
  };

  const item: Variants = {
    hidden: { opacity: hasBeenOpened ? 1 : 0, y: hasBeenOpened ? 0 : 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const dly = (n: number) => hasBeenOpened ? 0 : n;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="projects-page font-mono flex flex-col gap-6 w-full h-full overflow-y-auto p-6 max-w-4xl mx-auto custom-scrollbar bg-[#1e1e1e]"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: dly(0.1) }}
        className="projects-header flex flex-col gap-2"
      >
        <div className="code-line text-[#6A9955] text-sm">{'// projects.ts -- featured work'}</div>
        <h1 className="heading-font text-4xl md:text-5xl font-bold text-white tracking-tight">Projects</h1>
        <p className="subtitle text-[#858585] mt-1">A collection of things I&apos;ve built.</p>
      </motion.div>

      <motion.div
        initial={hasBeenOpened ? "visible" : "hidden"}
        animate="visible"
        variants={container}
        className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-4 pb-8"
      >
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} project={proj} variants={item} />
        ))}
      </motion.div>

    </motion.div>
  );
}