'use client';
import { motion } from 'framer-motion';

export default function AboutFile({ hasBeenOpened }: { hasBeenOpened: boolean }) {
  const container = {
    hidden: { opacity: hasBeenOpened ? 1 : 0 },
    visible: { opacity: 1, transition: { staggerChildren: hasBeenOpened ? 0 : 0.04 } }
  };
  const lineVariant = {
    hidden: { opacity: hasBeenOpened ? 1 : 0, x: hasBeenOpened ? 0 : -2 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.15 } }
  };

  const lines = [
    `/**`,
    ` * ABOUT ME`,
    ` * `,
    ` * Hi! I'm Surya, a developer specializing in modern web building.`,
    ` * I enjoy creating seamless digital experiences that feel robust and intuitive.`,
    ` */`,
    ``,
    `export const aboutMe = {`,
    `  background: "I started coding because I loved the idea of creating something from nothing.",`,
    `  hobbies: ["Coding", "Reading", "Gaming", "Exploring AI"],`,
    `  philosophy: "Write code that humans can read and machines can execute quickly."`,
    `};`,
    ``,
    `console.log("Learning never stops.");`
  ];

  return (
    <motion.div initial={hasBeenOpened ? "visible" : "hidden"} animate="visible" variants={container} className="pt-2 px-6 font-mono text-[13px] text-[#cccccc] leading-[18px] w-full h-full">
      {lines.map((line, i) => {
        let content = <span className="text-[#cccccc]">{line}</span>;
        if (line.startsWith('/**') || line.startsWith(' *')) content = <span className="text-[#6A9955]">{line}</span>;
        else if (line.includes('export const')) content = <span><span className="text-[#c586c0]">export</span> <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">aboutMe</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#ffd700]">{'{'}</span></span>;
        else if (line.includes('background:')) content = <span className="pl-6"><span className="text-[#9cdafe]">background:</span> <span className="text-[#ce9178]">"I started coding because I loved the idea of creating something from nothing."</span>,</span>;
        else if (line.includes('hobbies:')) content = <span className="pl-6"><span className="text-[#9cdafe]">hobbies:</span> <span className="text-[#cca700]">[</span><span className="text-[#ce9178]">"Coding"</span>, <span className="text-[#ce9178]">"Reading"</span>, <span className="text-[#ce9178]">"Gaming"</span>, <span className="text-[#ce9178]">"Exploring AI"</span><span className="text-[#cca700]">]</span>,</span>;
        else if (line.includes('philosophy:')) content = <span className="pl-6"><span className="text-[#9cdafe]">philosophy:</span> <span className="text-[#ce9178]">"Write code that humans can read and machines can execute quickly."</span></span>;
        else if (line === '};') content = <span className="text-[#ffd700]">{'}'};</span>;
        else if (line.includes('console.log')) content = <span><span className="text-[#4fc1ff]">console</span>.<span className="text-[#dcdcaa]">log</span>(<span className="text-[#ce9178]">"Learning never stops."</span>);</span>;

        return (
          <motion.div key={i} variants={lineVariant} className="flex">
            <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{i + 1}</span>
            <span className="whitespace-pre-wrap">{content}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
