'use client';
import { motion } from 'framer-motion';

const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  tools: ["Git", "Docker", "Figma", "Vite", "Webpack"],
  databases: ["MongoDB", "PostgreSQL", "Firebase"]
};

export default function SkillsFile({ hasBeenOpened }: { hasBeenOpened: boolean }) {
  const container = {
    hidden: { opacity: hasBeenOpened ? 1 : 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: hasBeenOpened ? 0 : 0.1,
        duration: 0.2
      } 
    }
  };

  const keyVariant = {
    hidden: { opacity: hasBeenOpened ? 1 : 0, x: hasBeenOpened ? 0 : -5 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } }
  };

  const valVariant = {
    hidden: { opacity: hasBeenOpened ? 1 : 0 },
    visible: { opacity: 1, transition: { duration: 0.2, delay: hasBeenOpened ? 0 : 0.1 } }
  };

  const objectKeys = Object.entries(skills);
  let lineCounter = 1;

  return (
    <motion.div 
      initial={hasBeenOpened ? "visible" : "hidden"} 
      animate="visible" 
      variants={container}
      className="pt-2 px-6 font-mono text-[13px] text-[#cccccc] leading-[18px] w-full h-full"
    >
      <div className="flex">
        <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{lineCounter++}</span>
        <span className="text-[#ffd700]">{'{'}</span>
      </div>

      {objectKeys.map(([key, vals], index) => {
        const startLine = lineCounter;
        lineCounter += vals.length + 2;
        
        return (
          <motion.div key={key} variants={keyVariant} className="flex flex-col">
            <div className="flex">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{startLine}</span>
              <span className="pl-6"><span className="text-[#9cdcfe]">"{key}"</span>: <span className="text-[#cca700]">[</span></span>
            </div>
            
            {vals.map((val, vIdx) => (
              <div className="flex" key={vIdx}>
                <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{startLine + 1 + vIdx}</span>
                <motion.span variants={valVariant} className="pl-12">
                  <span className="text-[#ce9178]">"{val}"</span>{vIdx < vals.length - 1 ? ',' : ''}
                </motion.span>
              </div>
            ))}
            
            <div className="flex">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{startLine + 1 + vals.length}</span>
              <span className="pl-6 text-[#cca700]">]{index < objectKeys.length - 1 ? ',' : ''}</span>
            </div>
          </motion.div>
        );
      })}

      <div className="flex">
        <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{lineCounter}</span>
        <span className="text-[#ffd700]">{'}'}</span>
      </div>
    </motion.div>
  );
}
