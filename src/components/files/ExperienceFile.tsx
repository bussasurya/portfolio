'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Tech Solutions Inc.",
    role: "Frontend Developer",
    period: "2023 - Present",
    highlights: [
      "Led the migration of a legacy app to Next.js, improving load times by 40%.",
      "Developed an extensive UI component library used across 3 products."
    ]
  },
  {
    company: "Startup Co.",
    role: "Junior Web Developer",
    period: "2021 - 2023",
    highlights: [
      "Implemented responsive designs using Tailwind CSS.",
      "Integrated RESTful APIs into React frontend."
    ]
  }
];

export default function ExperienceFile({ hasBeenOpened }: { hasBeenOpened: boolean }) {
  const container = {
    hidden: { opacity: hasBeenOpened ? 1 : 0 },
    visible: { opacity: 1, transition: { staggerChildren: hasBeenOpened ? 0 : 0.15 } }
  };

  const item = {
    hidden: { opacity: hasBeenOpened ? 1 : 0, x: hasBeenOpened ? 0 : -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } }
  };

  let lineCounter = 1;

  return (
    <motion.div 
      initial={hasBeenOpened ? "visible" : "hidden"} 
      animate="visible" 
      variants={container}
      className="pt-2 px-6 font-mono text-[13px] text-[#cccccc] leading-[18px] w-full h-full"
    >
      <div className="flex mb-2">
        <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{lineCounter++}</span>
        <span className="text-[#6A9955]">// Work Experience Timeline</span>
      </div>
      <div className="flex"><span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{lineCounter++}</span></div>
      <div className="flex">
        <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{lineCounter++}</span>
        <span><span className="text-[#c586c0]">export</span> <span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">experiences</span> <span className="text-[#569cd6]">:</span> <span className="text-[#4ec9b0]">Experience</span><span className="text-[#ffd700]">[]</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#da70d6]">[</span></span>
      </div>

      {experiences.map((exp, idx) => {
        const startLine = lineCounter;
        lineCounter += 7;
        return (
          <motion.div key={idx} variants={item} className="flex flex-col border-l-2 border-[#454545] ml-[4.5em] pl-4 my-2 relative">
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#0e639c] border-2 border-[#1e1e1e]" />
            <div className="flex -ml-[4.5em] pl-[4.5em]">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block absolute left-0">{startLine}</span>
              <span className="text-[#ffd700]">{'{'}</span>
            </div>
            <div className="flex -ml-[4.5em] pl-[4.5em]">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block absolute left-0">{startLine + 1}</span>
              <span className="pl-6"><span className="text-[#9cdafe]">company:</span> <span className="text-[#ce9178]">"{exp.company}"</span>,</span>
            </div>
            <div className="flex -ml-[4.5em] pl-[4.5em]">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block absolute left-0">{startLine + 2}</span>
              <span className="pl-6"><span className="text-[#9cdafe]">role:</span> <span className="text-[#ce9178]">"{exp.role}"</span>,</span>
            </div>
            <div className="flex -ml-[4.5em] pl-[4.5em]">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block absolute left-0">{startLine + 3}</span>
              <span className="pl-6"><span className="text-[#9cdafe]">period:</span> <span className="text-[#ce9178]">"{exp.period}"</span>,</span>
            </div>
            <div className="flex -ml-[4.5em] pl-[4.5em]">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block absolute left-0">{startLine + 4}</span>
              <span className="pl-6"><span className="text-[#9cdafe]">highlights:</span> <span className="text-[#cca700]">[</span></span>
            </div>
            <div className="flex -ml-[4.5em] pl-[4.5em] flex-col">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block absolute left-0">{startLine + 5}</span>
              {exp.highlights.map((h, i) => (
                <div key={i} className="pl-12">
                  <span className="text-[#ce9178]">"{h}"</span>{i < exp.highlights.length - 1 ? ',' : ''}
                </div>
              ))}
            </div>
            <div className="flex -ml-[4.5em] pl-[4.5em]">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block absolute left-0">{startLine + 6}</span>
              <span className="pl-6 text-[#cca700]">]</span>
            </div>
            <div className="flex -ml-[4.5em] pl-[4.5em]">
              <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block absolute left-0">{startLine + 7}</span>
              <span className="text-[#ffd700]">{'}'}{idx < experiences.length - 1 ? ',' : ''}</span>
            </div>
          </motion.div>
        );
      })}

      <div className="flex mt-2">
        <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">{lineCounter}</span>
        <span className="text-[#da70d6]">]</span>;
      </div>
    </motion.div>
  );
}
