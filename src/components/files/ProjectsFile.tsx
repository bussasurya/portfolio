'use client';
import { motion, Variants } from 'framer-motion';

const projects = [
  {
    name: "VS Code Portfolio",
    description: "A highly interactive portfolio mimicking the VS Code interface.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/surya/vscode-portfolio"
  },
  {
    name: "DSA Mentorship Platform",
    description: "A modern platform for connecting mentors and mentees.",
    techStack: ["React", "Firebase", "TailwindCSS"],
    link: "https://dsamentor.com"
  },
  {
    name: "Space Portfolio 3D",
    description: "Futuristic 3D space-themed portfolio.",
    techStack: ["Three.js", "React Three Fiber", "GSAP"],
    link: "https://space.surya.dev"
  }
];

export default function ProjectsFile({ hasBeenOpened }: { hasBeenOpened: boolean }) {
  const container: Variants = {
    hidden: { opacity: hasBeenOpened ? 1 : 0 },
    visible: { opacity: 1, transition: { staggerChildren: hasBeenOpened ? 0 : 0.1 } }
  };

  const item: Variants = {
    hidden: { opacity: hasBeenOpened ? 1 : 0, y: hasBeenOpened ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeInOut" } }
  };

  return (
    <motion.div 
      initial={hasBeenOpened ? "visible" : "hidden"} 
      animate="visible" 
      variants={container}
      className="pt-2 px-6 font-mono text-[13px] text-[#cccccc] leading-[18px] w-full h-full"
    >
      <div className="flex mb-2">
        <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">1</span>
        <span className="text-[#6A9955]">// Featured Projects</span>
      </div>
      <div className="flex">
        <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">2</span>
        <span><span className="text-[#c586c0]">export</span> <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">projects</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#ffd700]">[</span></span>
      </div>

      {projects.map((proj, idx) => {
        const startLine = 3 + (idx * 6);
        return (
          <motion.div key={idx} variants={item} className="flex flex-col">
            <div className="flex">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{startLine}</span>
              <span className="pl-6 text-[#da70d6]">{'{'}</span>
            </div>
            <div className="flex">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{startLine + 1}</span>
              <span className="pl-12"><span className="text-[#9cdafe]">name:</span> <span className="text-[#ce9178]">"{proj.name}"</span>,</span>
            </div>
            <div className="flex">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{startLine + 2}</span>
              <span className="pl-12"><span className="text-[#9cdafe]">description:</span> <span className="text-[#ce9178]">"{proj.description}"</span>,</span>
            </div>
            <div className="flex text-wrap">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{startLine + 3}</span>
              <span className="pl-12 flex flex-wrap gap-x-1">
                <span className="text-[#9cdafe]">techStack:</span> <span className="text-[#cca700]">[</span>
                {proj.techStack.map((t, i) => (
                  <span key={i}>
                    <span className="text-[#ce9178]">"{t}"</span>
                    {i < proj.techStack.length - 1 ? <span className="mr-1">,</span> : ''}
                  </span>
                ))}
                <span className="text-[#cca700]">]</span>,
              </span>
            </div>
            <div className="flex">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{startLine + 4}</span>
              <span className="pl-12"><span className="text-[#9cdafe]">link:</span> <a href={proj.link} target="_blank" rel="noreferrer" className="text-[#ce9178] hover:text-[#4fc1ff] hover:underline underline-offset-2 transition-colors">"{proj.link}"</a></span>
            </div>
            <div className="flex">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{startLine + 5}</span>
              <span className="pl-6 text-[#da70d6]">{'}'}{idx < projects.length - 1 ? ',' : ''}</span>
            </div>
          </motion.div>
        );
      })}

      <div className="flex">
        <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{3 + (projects.length * 6)}</span>
        <span className="text-[#ffd700]">]</span>;
      </div>
    </motion.div>
  );
}