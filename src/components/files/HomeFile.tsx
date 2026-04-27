'use client';
import { motion } from 'framer-motion';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useStore } from '../../store/useStore';

const rolesData = [
  { name: 'Full Stack Dev', color: 'bg-[#16A34A]' },
  { name: 'AI / ML Dev', color: 'bg-[#00D4FF]' },
  { name: 'Cloud Engineer', color: 'bg-[#0EA5E9]' },
  { name: 'DevOps', color: 'bg-[#D97706]' }
];

interface Props {
  hasBeenOpened: boolean;
}

const Line = ({ num, children, className = "" }: { num: number, children: React.ReactNode, className?: string }) => (
  <div className={`flex w-full group ${className}`}>
    <span className="text-[#858585] min-w-[3.5rem] tracking-wide text-right pr-6 select-none block shrink-0 font-mono">{num}</span>
    <div className="flex-1 shrink-0">{children}</div>
  </div>
);

export default function HomeFile({ hasBeenOpened }: Props) {
  const { openFile } = useStore();

  const dly = (n: number) => hasBeenOpened ? 0 : n;

  return (
    <>
      <div className="pt-6 pb-12 w-full h-full overflow-y-auto custom-scrollbar font-mono text-[14px] leading-[24px] flex flex-col text-[#d4d4d4] bg-[#1e1e1e]">

        {/* HEADER */}
        <Line num={1}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: dly(0.2) }} className="text-[#6A9955]">
            {'// hello world !! Welcome to my portfolio'}
          </motion.div>
        </Line>
        <Line num={2}>&nbsp;</Line>

        {/* NAME */}
        <Line num={3}>
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 5 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.4, delay: dly(0.4) }}>
            <div className="heading-font text-[50px] md:text-[70px] leading-[0.9] text-white mb-1">
              Bussa
            </div>
          </motion.div>
        </Line>

        <Line num={4}>
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 5 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.4, delay: dly(0.5) }}>
            <div style={{ display: 'inline-block' }}>
              <div className="heading-font text-[50] md:text-[70px] leading-[0.9] text-[#00D4FF] mb-1">
                Surya
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: dly(0.9), ease: 'easeOut' }}
                style={{
                  height: '3px',
                  background: '#074772ff',
                  borderRadius: '2px',
                  width: '100%',
                  marginBottom: '20px',
                  transformOrigin: 'left',
                }}
              />
            </div>
          </motion.div>
        </Line>

        {/* ROLES */}
        <Line num={5}>
          <div className="flex flex-wrap gap-3 py-1">
            {rolesData.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: dly(0.7 + i * 0.1) }}
                className="flex items-center gap-2 border border-[#333] bg-transparent px-3 py-1 rounded text-xs select-none"
              >
                <div className={`w-2 h-2 rounded-full ${r.color}`}></div>
                <span className="text-[#d4d4d4] font-medium">{r.name}</span>
              </motion.div>
            ))}
          </div>
        </Line>

        <Line num={6}>&nbsp;</Line>

        {/* ABOUT */}
        <Line num={7}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: dly(1.0) }}>
            <span className="text-[#858585]">
              I live at the crossroads of <span className="text-[#4fc1ff] font-medium">full-stack development</span>, <span className="text-[#4fc1ff] font-medium">AI/ML</span>, and
            </span>
          </motion.div>
        </Line>

        <Line num={8}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: dly(1.1) }}>
            <span className="text-[#858585]">
              <span className="text-[#4fc1ff] font-medium">cloud engineering</span>. I build systems that are genuinely <span className="text-[#4fc1ff] font-medium">intelligent</span>
            </span>
          </motion.div>
        </Line>

        <Line num={9}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: dly(1.2) }}>
            <span className="text-[#858585]">
              and <span className="text-[#4fc1ff] font-medium">scalable</span>.
            </span>
          </motion.div>
        </Line>

        <Line num={10}>&nbsp;</Line>

        {/* BUTTONS */}
        <Line num={11}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: dly(1.4) }} className="flex flex-wrap gap-3 py-2 font-mono">
            <button onClick={() => openFile('projects.js')} className="flex items-center gap-2 border border-[#007acc] bg-[#007acc] hover:bg-[#005f9e] text-white px-5 py-1.5 rounded text-sm font-medium">
              📁 Projects
            </button>
            <button onClick={() => openFile('about.ts')} className="flex items-center gap-2 border border-[#333] bg-transparent hover:bg-[#2d2d2d] text-[#d4d4d4] px-5 py-1.5 rounded text-sm font-medium">
              👤 About Me
            </button>
            <button onClick={() => openFile('contact.css')} className="flex items-center gap-2 border border-[#333] bg-transparent hover:bg-[#2d2d2d] text-[#d4d4d4] px-5 py-1.5 rounded text-sm font-medium">
              ✉ Contact
            </button>
          </motion.div>
        </Line>

        <Line num={12}>&nbsp;</Line>

        {/* STATS */}
        <Line num={13}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: dly(1.6) }} className="grid grid-cols-2 md:grid-cols-4 border border-[#333] rounded my-2 bg-[#1c1c1c] text-[#d4d4d4] font-mono">
            <div className="flex flex-col items-center justify-center py-6 border-b md:border-b-0 md:border-r border-[#333]">
              <span className="text-white font-black text-2xl">3+</span>
              <span className="text-[#858585] text-[10px] uppercase mt-2 font-bold">Years</span>
            </div>
            <div className="flex flex-col items-center justify-center py-6 border-b md:border-b-0 md:border-r border-[#333]">
              <span className="text-white font-black text-2xl">10+</span>
              <span className="text-[#858585] text-[10px] uppercase mt-2 font-bold">Projects</span>
            </div>
            <div className="flex flex-col items-center justify-center py-6 md:border-r border-[#333]">
              <span className="text-white font-black text-2xl">∞</span>
              <span className="text-[#858585] text-[10px] uppercase mt-2 font-bold">Curiosity</span>
            </div>
            <div className="flex flex-col items-center justify-center py-6">
              <span className="text-white font-black text-2xl">↑</span>
              <span className="text-[#858585] text-[10px] uppercase mt-2 font-bold">Always Learning</span>
            </div>
          </motion.div>
        </Line>

        <Line num={14}>&nbsp;</Line>

        {/* SOCIAL */}
        <Line num={15}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: dly(1.8) }} className="flex flex-wrap gap-3 py-1 font-mono">
            <a href="https://github.com/suryaaaaaaaaas-projects" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded border border-[#333] text-xs">
              <SiGithub size={14} /> GitHub
            </a>
            <a href="https://linkedin.com/in/surya" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded border border-[#333] text-xs">
              <FaLinkedin size={14} /> LinkedIn
            </a>
            <a href="https://leetcode.com/u/surya" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded border border-[#333] text-xs">
              <SiLeetcode size={14} /> LeetCode
            </a>
            <a href="mailto:surya@example.com" className="flex items-center gap-2 px-3 py-1.5 rounded border border-[#333] text-xs">
              <FiMail size={14} /> Email
            </a>
          </motion.div>
        </Line>

        <Line num={16}>&nbsp;</Line>

      </div>
    </>
  );
}