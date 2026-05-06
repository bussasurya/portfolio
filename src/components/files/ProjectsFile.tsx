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
    name: "Fine-Tuned LLaMA 8B Legal AI",
    icon: "🤖",
    description: "Developed a context-aware Legal AI system by fine-tuning a LLaMA-based 8B model on Indian legal datasets using LoRA and Unsloth. Integrated RAG with FAISS and Sentence-BERT to improve legal reasoning, grounding, and reduce hallucinations in domain-specific Q&A.",
    tags: "LLM • RAG • LEGAL AI",
    techStack: ["PyTorch", "Transformers", "FAISS", "LoRA", "Sentence-BERT", "Unsloth"],
    github: "https://github.com/bussasurya/Finetuned-Legal-chatbot",
  },
  {
    name: "AeroFlare ",
    icon: "🌎",
    description: "Built a real-time 3D wildfire prediction and visualization platform . Integrated live Nasa satellite, wind, weather, and terrain data to simulate wildfire spread with predictive threat cones and tactical disaster intelligence.",
    tags: "AI • GIS • DISASTER TECH",
    techStack: ["React", "Deck.gl", "MapLibre", "Three.js", "Python", "NASA FIRMS"],
    github: "https://github.com/bussasurya/Aeroflare",
  },
  {
    name: "Clinical Reasoning AI with Mistral 7B",
    icon: "🤖",
    description: "Fine-tuned a 4-bit Mistral 7B model using QLoRA and Unsloth for clinical reasoning and medical decision support. Built a data-centric RAG pipeline with FAISS and Sentence-BERT to improve retrieval precision, reduce noise, and enhance medical inference accuracy.",
    tags: "LLM • RAG • HEALTH AI",
    techStack: ["PyTorch", "QLoRA", "Unsloth", "FAISS", "BioGPT", "Sentence-BERT"],
    github: "https://github.com/surya/clinical-ai",
  },

  {
    name: "Distributed Event Streaming Engine",
    icon: "⚙️",
    description: "Engineered a high-throughput distributed event streaming platform inspired by Kafka architecture with scalable pub-sub messaging, fault-tolerant replication, and real-time event processing for large-scale backend systems.",
    tags: "SYSTEM DESIGN • DISTRIBUTED SYSTEMS",
    techStack: ["Go", "Kafka", "gRPC", "Docker", "Kubernetes", "Redis"],
    github: "https://github.com/surya/event-stream-engine",
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