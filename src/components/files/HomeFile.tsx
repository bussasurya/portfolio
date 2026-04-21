'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const typeText = "/** Welcome to my portfolio */";

interface Props {
  hasBeenOpened: boolean;
}

export default function HomeFile({ hasBeenOpened }: Props) {
  const [typedText, setTypedText] = useState(hasBeenOpened ? typeText : '');
  
  useEffect(() => {
    if (hasBeenOpened) return;
    let i = 0;
    const intervalId = setInterval(() => {
      setTypedText(typeText.substring(0, i));
      i++;
      if (i > typeText.length) clearInterval(intervalId);
    }, 30);
    return () => clearInterval(intervalId);
  }, [hasBeenOpened]);

  const init = hasBeenOpened ? "visible" : "hidden";

  const containerVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, ease: "easeOut" } }
  };

  const mainHeadingVar = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: hasBeenOpened ? 0 : 0.8 } }
  };

  const tagContainerVar = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: hasBeenOpened ? 0 : 1.1 } }
  };

  const tagVar = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
  };

  const btnVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, delay: hasBeenOpened ? 0 : 1.5 } }
  };

  return (
    <motion.div 
      initial={init}
      animate="visible"
      variants={containerVar}
      className="pt-2 px-6 font-mono text-[13px] text-[#cccccc] leading-[18px] w-full h-full"
    >
      <div className="flex">
        <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">1</span>
        <div className="text-[#6A9955] inline-block">
          {typedText}
          <span className="inline-block w-[8px] h-[15px] bg-[#cccccc] ml-[1px] animate-pulse align-middle" />
        </div>
      </div>
      <div className="flex">
        <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">2</span>
        <span className="text-[#6A9955]">// I'm a passionate developer building interactive web experiences.</span>
      </div>
      <div className="flex"><span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">3</span></div>
      
      <motion.div variants={mainHeadingVar} className="flex flex-col">
        <div className="flex">
          <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">4</span>
          <span><span className="text-[#569cd6]">const</span> <span className="text-[#4fc1ff]">developer</span> <span className="text-[#d4d4d4]">=</span> <span className="text-[#ffd700]">{'{'}</span></span>
        </div>
        <div className="flex">
          <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">5</span>
          <span className="pl-6"><span className="text-[#9cdafe]">name:</span> <span className="text-[#ce9178]">"Surya"</span>,</span>
        </div>
        <div className="flex">
          <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">6</span>
          <span className="pl-6 flex flex-wrap items-center">
            <span className="text-[#9cdafe] mr-2">roles:</span> <span className="text-[#ffd700]">[</span>
            <motion.div variants={tagContainerVar} initial={init} animate="visible" className="flex ml-2 space-x-2">
              {["Frontend Engineer", "Full Stack Developer", "UX Enthusiast"].map((role, i) => (
                <motion.span key={i} variants={tagVar} className="text-[#ce9178] border border-[#ce9178]/30 px-1.5 py-0.5 rounded text-xs bg-[#ce9178]/10 cursor-default hover:bg-[#ce9178]/20 transition-colors">
                  "{role}"{i < 2 ? ',' : ''}
                </motion.span>
              ))}
            </motion.div>
            <span className="text-[#ffd700] ml-2">]</span>,
          </span>
        </div>
        <div className="flex">
          <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">7</span>
          <span className="pl-6"><span className="text-[#9cdafe]">status:</span> <span className="text-[#ce9178]">"Open to new opportunities"</span></span>
        </div>
        <div className="flex">
          <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">8</span>
          <span><span className="text-[#ffd700]">{'}'}</span>;</span>
        </div>
      </motion.div>
      
      <div className="flex"><span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">9</span></div>
      
      <div className="flex flex-col">
        <div className="flex">
          <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">10</span>
          <span><span className="text-[#c586c0]">export</span> <span className="text-[#c586c0]">default</span> <span className="text-[#569cd6]">function</span> <span className="text-[#dcdcaa]">Home</span>() <span className="text-[#ffd700]">{'{'}</span></span>
        </div>
        <div className="flex">
          <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">11</span>
          <span className="pl-6 text-[#c586c0]">return <span className="text-[#da70d6]">(</span></span>
        </div>
        <div className="flex">
          <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">12</span>
          <span className="pl-12 text-[#808080]">&lt;<span className="text-[#569cd6]">div</span> <span className="text-[#9cdafe]">className</span>=<span className="text-[#ce9178]">"hero-actions"</span>&gt;</span>
        </div>
        
        <div className="flex">
          <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">13</span>
          <motion.div variants={btnVar} initial={init} animate="visible" className="pl-16 flex space-x-4 my-2">
            <button className="bg-[#0e639c] text-white px-5 py-1.5 rounded text-xs shadow-md shadow-black/20 hover:bg-[#1177bb] transition-all hover:-translate-y-0.5 active:translate-y-0">&lt;Projects /&gt;</button>
            <button className="bg-transparent border border-[#0e639c] text-[#cccccc] px-5 py-1.5 rounded text-xs hover:bg-white/5 transition-all hover:-translate-y-0.5 active:translate-y-0">&lt;Contact /&gt;</button>
          </motion.div>
        </div>
        
        <div className="flex">
          <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">14</span>
          <span className="pl-12 text-[#808080]">&lt;/<span className="text-[#569cd6]">div</span>&gt;</span>
        </div>
        <div className="flex">
          <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">15</span>
          <span className="pl-6 text-[#da70d6]">)</span>;
        </div>
        <div className="flex">
          <span className="text-[#858585] min-w-[3em] text-right pr-4 select-none block">16</span>
          <span className="text-[#ffd700]">{'}'}</span>
        </div>
      </div>
    </motion.div>
  );
}
