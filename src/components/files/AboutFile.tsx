'use client';
import { motion } from 'framer-motion';
import { FaServer, FaBrain, FaCloud, FaDatabase, FaCode, FaTools, FaGraduationCap } from 'react-icons/fa';

export default function AboutFile({ hasBeenOpened }: { hasBeenOpened: boolean }) {
  const dly = (n: number) => hasBeenOpened ? 0 : n;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="about-page font-mono text-[#d4d4d4] text-[14px] leading-[24px] p-6 max-w-4xl mx-auto flex flex-col gap-6 w-full h-full overflow-y-auto custom-scrollbar bg-[#1e1e1e]"
    >

      {/* 2. Header Section */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: dly(0.1) }} className="about-header flex flex-col gap-2">
        <div className="code-line text-[#6A9955] text-sm">{'// about.ts -- details about the developer'}</div>
        <h1 className="heading-font text-4xl md:text-5xl font-bold text-white tracking-tight">About Me</h1>
        <p className="subtitle text-[#858585] mt-1">Bridging the gap between intelligent systems and scalable architecture.</p>
      </motion.div>

      {/* 3. Intro Card (Main About Box) */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: dly(0.2) }} className="about-card bg-[#252526] border border-[#333] rounded-lg p-4 shadow-lg">
        <p className="text-[#cccccc]">
          Hi, I&apos;m <span className="highlight-name text-[#4fc1ff] font-bold">Surya</span>. I&apos;m a passionate developer whose work focuses on
          <span className="highlight-keyword text-[#ce9178]"> full-stack development</span> and
          <span className="highlight-keyword text-[#ce9178]"> artificial intelligence</span>. I love solving complex structural problems
          and building <span className="highlight-keyword text-[#ce9178]">production-ready applications</span> that deliver real-world impact.
        </p>
      </motion.div>

      {/* 4. Current Focus Section */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: dly(0.3) }} className="focus-section flex flex-col gap-4">
        <h2 className="heading-font text-2xl font-bold text-white border-b border-[#333] pb-2 uppercase tracking-wider">CURRENT FOCUS</h2>

        <div className="focus-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Focus Items (2x3 Grid implies 6 items) */}
          <div className="focus-item flex items-center gap-4 bg-[#1e1e1e] border border-[#3c3c3c] rounded-md p-4 hover:border-[#4fc1ff] transition-colors cursor-default">
            <span className="icon text-xl text-[#4fc1ff]"><FaServer /></span>
            <p className="font-medium text-[#d4d4d4]">Backend Engineering</p>
          </div>

          <div className="focus-item flex items-center gap-4 bg-[#1e1e1e] border border-[#3c3c3c] rounded-md p-4 hover:border-[#c586c0] transition-colors cursor-default">
            <span className="icon text-xl text-[#c586c0]"><FaBrain /></span>
            <p className="font-medium text-[#d4d4d4]">Machine Learning</p>
          </div>

          <div className="focus-item flex items-center gap-4 bg-[#1e1e1e] border border-[#3c3c3c] rounded-md p-4 hover:border-[#00D4FF] transition-colors cursor-default">
            <span className="icon text-xl text-[#00D4FF]"><FaCloud /></span>
            <p className="font-medium text-[#d4d4d4]">Cloud Architecture</p>
          </div>

          <div className="focus-item flex items-center gap-4 bg-[#1e1e1e] border border-[#3c3c3c] rounded-md p-4 hover:border-[#dcdcaa] transition-colors cursor-default">
            <span className="icon text-xl text-[#dcdcaa]"><FaDatabase /></span>
            <p className="font-medium text-[#d4d4d4]">Database Design</p>
          </div>

          <div className="focus-item flex items-center gap-4 bg-[#1e1e1e] border border-[#3c3c3c] rounded-md p-4 hover:border-[#16A34A] transition-colors cursor-default">
            <span className="icon text-xl text-[#16A34A]"><FaCode /></span>
            <p className="font-medium text-[#d4d4d4]">Full-Stack Systems</p>
          </div>

          <div className="focus-item flex items-center gap-4 bg-[#1e1e1e] border border-[#3c3c3c] rounded-md p-4 hover:border-[#D97706] transition-colors cursor-default">
            <span className="icon text-xl text-[#D97706]"><FaTools /></span>
            <p className="font-medium text-[#d4d4d4]">DevOps & CI/CD</p>
          </div>
        </div>
      </motion.div>

      {/* 5. Education Section */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: dly(0.4) }} className="education-section flex flex-col gap-4">
        <h2 className="heading-font text-2xl font-bold text-white border-b border-[#333] pb-2 uppercase tracking-wider">EDUCATION</h2>

        <div className="flex flex-col gap-4">
          {/* Ed Card 1 */}
          <div className="education-card bg-[#252526] border border-[#333] rounded-lg p-4 hover:border-[#4fc1ff]/50 transition-colors">
            <div className="education-header flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#3c3c3c] pb-4 mb-4">
              <div className="left flex items-center gap-4">
                <span className="icon bg-[#1e1e1e] p-3 rounded-full border border-[#333] text-[#4fc1ff]">
                  <FaGraduationCap size={20} />
                </span>
                <div className="title-group">
                  <h3 className="heading-font text-xl font-bold text-[#e0e0e0]">University Institute of Technology</h3>
                  <p className="subtitle text-[#858585] text-sm mt-1">Undergraduate Studies</p>
                </div>
              </div>
              <div className="right mt-4 sm:mt-0">
                <span className="year text-[#6A9955] font-bold border border-[#6A9955]/30 bg-[#6A9955]/10 px-3 py-1 rounded text-sm">
                  2021 — 2025
                </span>
              </div>
            </div>

            <div className="education-body flex flex-col gap-1">
              <p className="degree text-[#4fc1ff] font-semibold text-[14px]">B.Tech in Computer Science & Engineering</p>
              <p className="minor text-[#d4d4d4]">Minor in Data Science</p>
              <p className="gpa text-[#858585] mt-1">GPA: <span className="text-[#dcdcaa]">3.8/4.0</span></p>
            </div>
          </div>

          {/* Ed Card 2 */}
          <div className="education-card bg-[#252526] border border-[#333] rounded-lg p-4 hover:border-[#4fc1ff]/50 transition-colors">
            <div className="education-header flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#3c3c3c] pb-4 mb-4">
              <div className="left flex items-center gap-4">
                <span className="icon bg-[#1e1e1e] p-3 rounded-full border border-[#333] text-[#4fc1ff]">
                  <FaGraduationCap size={20} />
                </span>
                <div className="title-group">
                  <h3 className="heading-font text-xl font-bold text-[#e0e0e0]">High School Academy</h3>
                  <p className="subtitle text-[#858585] text-sm mt-1">Secondary Education</p>
                </div>
              </div>
              <div className="right mt-4 sm:mt-0">
                <span className="year text-[#6A9955] font-bold border border-[#6A9955]/30 bg-[#6A9955]/10 px-3 py-1 rounded text-sm">
                  2019 — 2021
                </span>
              </div>
            </div>

            <div className="education-body flex flex-col gap-1">
              <p className="degree text-[#4fc1ff] font-semibold text-[14px]">High School Diploma (MPC)</p>
              <p className="minor text-[#d4d4d4]">Math, Physics, Chemistry</p>
              <p className="gpa text-[#858585] mt-1">Percentage: <span className="text-[#dcdcaa]">95%</span></p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Spacer for bottom padding */}
      <div className="pb-8"></div>
    </motion.div>
  );
}
