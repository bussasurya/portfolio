'use client';
import { motion } from 'framer-motion';

export default function ContactFile({ hasBeenOpened }: { hasBeenOpened: boolean }) {
  const container = {
    hidden: { opacity: hasBeenOpened ? 1 : 0 },
    visible: { opacity: 1, transition: { staggerChildren: hasBeenOpened ? 0 : 0.08 } }
  };
  const lineVariant = {
    hidden: { opacity: hasBeenOpened ? 1 : 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } }
  };

  const lines = [
    `/*`,
    ` * GET IN TOUCH`,
    ` * Feel free to reach out for collaborations or just a friendly hello.`,
    ` */`,
    ``,
    `:root {`,
    `  --email: "mailto:surya@example.com";`,
    `  --github: "https://github.com/surya";`,
    `  --linkedin: "https://linkedin.com/in/surya";`,
    `  --twitter: "https://twitter.com/surya";`,
    `}`,
    ``,
    `.contact-me {`,
    `  display: flex;`,
    `  justify-content: center;`,
    `  align-items: center;`,
    `  background-color: var(--black);`,
    `  cursor: pointer;`,
    `}`,
    ``,
    `.contact-me:hover {`,
    `  transform: scale(1.05); /* Reach out! */`,
    `}`
  ];

  return (
    <motion.div initial={hasBeenOpened ? "visible" : "hidden"} animate="visible" variants={container} className="pt-2 px-6 font-mono text-[13px] text-[#cccccc] leading-[18px] w-full h-full">
      {lines.map((line, i) => {
        let content: React.ReactNode = <span className="text-[#cccccc]">{line}</span>;
        
        if (line.startsWith('/*') || line.startsWith(' *')) content = <span className="text-[#6A9955]">{line}</span>;
        else if (line.includes(':root') || line.includes('.contact-me')) content = <span><span className="text-[#d7ba7d]">{line.replace('{', '')}</span> <span className="text-[#ffd700]">{line.includes('{') ? '{' : ''}</span></span>;
        else if (line === '}' || line.startsWith('}')) content = <span className="text-[#ffd700]">{'}'}</span>;
        else if (line.includes('--email:')) content = <span className="pl-4"><span className="text-[#9cdcfe]">--email:</span> <a href="mailto:surya@example.com" className="text-[#ce9178] hover:text-[#4fc1ff] hover:underline transition-colors">"mailto:surya@example.com"</a>;</span>;
        else if (line.includes('--github:')) content = <span className="pl-4"><span className="text-[#9cdcfe]">--github:</span> <a href="https://github.com/surya" target="_blank" rel="noreferrer" className="text-[#ce9178] hover:text-[#4fc1ff] hover:underline transition-colors">"https://github.com/surya"</a>;</span>;
        else if (line.includes('--linkedin:')) content = <span className="pl-4"><span className="text-[#9cdcfe]">--linkedin:</span> <a href="https://linkedin.com/in/surya" target="_blank" rel="noreferrer" className="text-[#ce9178] hover:text-[#4fc1ff] hover:underline transition-colors">"https://linkedin.com/in/surya"</a>;</span>;
        else if (line.includes('--twitter:')) content = <span className="pl-4"><span className="text-[#9cdcfe]">--twitter:</span> <a href="https://twitter.com/surya" target="_blank" rel="noreferrer" className="text-[#ce9178] hover:text-[#4fc1ff] hover:underline transition-colors">"https://twitter.com/surya"</a>;</span>;
        else if (line.includes('display: flex;') || line.includes('justify-content:') || line.includes('align-items:') || line.includes('cursor:') || line.includes('background-color:')) {
          const parts = line.split(':');
          content = <span className="pl-4"><span className="text-[#9cdcfe]">{parts[0].trim()}:</span> <span className="text-[#ce9178]">{parts[1].trim()}</span></span>;
        } else if (line.includes('transform: scale')) {
          content = <span className="pl-4"><span className="text-[#9cdcfe]">transform:</span> <span className="text-[#ce9178]">scale(1.05);</span> <span className="text-[#6A9955]">/* Reach out! */</span></span>;
        }

        return (
          <motion.div key={i} variants={lineVariant} className="flex hover:bg-white/5 transition-colors -mx-6 px-6 py-[1px]">
            <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{i + 1}</span>
            <span className="whitespace-pre-wrap">{content}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
