'use client';
import { motion, Variants } from 'framer-motion';
import { Trophy, Award, Briefcase, Star, BookOpen } from 'lucide-react';

const experiences = [
   {
  period: "May 2026 – Present",
  role: "Software Intern,PipeBit",
  organization: "PipeBit ",
  description:
    "Working as a remote Software Intern at PipeBit, contributing to software development projects and gaining hands-on industry experience in scalable application development, collaboration workflows, and modern development practices. Collaborating with the development team on building and maintaining software solutions, participating in technical discussions, and improving problem-solving skills in a professional environment. Engaging in practical learning across software engineering, APIs, backend systems, and deployment workflows while adhering to industry-standard confidentiality and development practices.",
  tags: [
    "Software Development",
    "Backend Development",
    "APIs",
    "Remote Collaboration",
    "Problem Solving",
    "Git/GitHub",
    "Teamwork",
    "Software Engineering"
  ]
},
  {
    period: "Jun 2024 – Jul 2025",
    role: "Co-Lead, ACM Glitch",
    organization: "ACM Student Chapter, Amritapuri Kerala, India",
    description:
      "Led and coordinated game development initiatives across 2D, 3D, and AR domains, guiding multiple teams to deliver high-quality interactive projects. Organized and executed 5+ technical events including hackathons, workshops, and coding sessions, improving member engagement and technical proficiency. Mentored 20+ members in game development, problem-solving, and emerging technologies, fostering a collaborative and growth-driven environment. Established industry collaborations and sponsorships, expanding chapter reach and enabling larger-scale technical events. Collaborated with leadership and faculty advisors to streamline operations and scale chapter activities effectively.",
    tags: [
      "Unity",
      "Game Development",
      "AR/VR",
      "Leadership",
      "Hackathons",
      "Mentoring",
      "Team Management",
      "Technical Events"
    ]
  }
 
];
const hackathons = [
  {
    project: "AeroFlare ",
    name: "CMR HACKFEST 3.0",
    year: "2026",
    description: "AeroFlare — real-time wildfire intelligence platform, Top 20 of 400+ teams. Automated pipeline fusing live NASA/NOAA satellite feeds and wind vectors to deliver predictive fire-spread modeling and disaster intelligence.",
    badge: "Top Project 🌟",
    colorTheme: {
      bg: "bg-[#4fc1ff]/10",
      text: "text-[#4fc1ff]",
      border: "border-[#4fc1ff]/50",
      shadow: "shadow-[0_0_12px_rgba(79,193,255,0.4)]",
      hoverBorder: "hover:border-[#4fc1ff]/50",
      gradient: "from-[#4fc1ff]/5",
      hoverText: "group-hover:text-[#4fc1ff]"
    }
  },
  {
    project: "Ecolink ",
    name: "Brinhack 2025",
    year: "2025",
    description: "Developed Ecolink, an AI-driven food donation and sustainability platform optimizing pickup routes to reduce food waste.",
    badge: "Finalist 🏅",
    colorTheme: {
      bg: "bg-[#9333EA]/10",
      text: "text-[#d8b4fe]",
      border: "border-[#9333EA]/50",
      shadow: "shadow-[0_0_12px_rgba(147,51,234,0.4)]",
      hoverBorder: "hover:border-[#9333EA]/50",
      gradient: "from-[#9333EA]/5",
      hoverText: "group-hover:text-[#d8b4fe]"
    }
  },
  {
    project: "FarmFlow",
    name: "EvoLumin Hackathon",
    year: "2024",
    description: "Built a farmer-centric platform integrating real-time weather forecasts, pest identification, and market insights.",
    badge: "Runner-Up 🥈",
    colorTheme: {
      bg: "bg-[#D97706]/10",
      text: "text-[#fbbf24]",
      border: "border-[#D97706]/50",
      shadow: "shadow-[0_0_12px_rgba(217,119,6,0.4)]",
      hoverBorder: "hover:border-[#D97706]/50",
      gradient: "from-[#D97706]/5",
      hoverText: "group-hover:text-[#fbbf24]"
    }
  }
];

const programs = [
  {
    title: "McKinsey Forward Program",
    badge: "Selected",
    year: "2026",
    description: "Selected for the McKinsey Forward program, focusing on foundational skills in leadership, business strategy, and complex problem-solving."
  }
];

const publications = [
  {
    title: "High-Precision Real-Time Detection of Marine Fish Species Using Fine-Tuned YOLO Models",
    publication: "IEEE Xplore — ACOIT 2025",
    year: "2025",
    description: "A deep learning research study on underwater object detection and marine species classification using fine-tuned YOLOv9 and YOLOv10 models for high-accuracy real-time detection.",
    badge: "Published"
  }
];

const certifications = [
  {
    title: "Google AI Essentials",
    issuer: "Google ",
    date: "Apr 2025",

  }
];

export default function ExperienceFile({ hasBeenOpened }: { hasBeenOpened: boolean }) {
  const dly = (n: number) => hasBeenOpened ? 0 : n;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="experience-page font-mono text-[#d4d4d4] text-[14px] leading-[24px] p-6 max-w-4xl mx-auto flex flex-col gap-6 w-full h-full overflow-y-auto custom-scrollbar bg-[#1e1e1e]"
    >
      {/* Experience Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: dly(0.1) }}
        className="experience-header flex flex-col gap-2"
      >
        <div className="code-line text-[#6A9955] text-sm">{'// experience.ts -- career journey and roles'}</div>
        <h1 className="heading-font text-4xl md:text-5xl font-bold text-white tracking-tight">Experience</h1>
        <p className="subtitle text-[#858585] mt-1 font-mono text-sm">{'<Timeline />'}</p>
      </motion.div>

      {/* Experience Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: dly(0.2) }}
        className="timeline-section relative border-l border-[#3c3c3c] ml-3 md:ml-4 mt-4"
      >
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-10 ml-8 relative">
            <div className="absolute -left-[39px] md:-left-[41px] top-1.5 w-3.5 h-3.5 bg-[#4fc1ff] rounded-full ring-4 ring-[#1e1e1e]"></div>

            <div className="bg-[#252526] border border-[#333] rounded-lg p-5 hover:border-[#4fc1ff]/50 hover:bg-[#2a2d2e] transition-colors shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h3 className="subheading-font text-xl font-bold text-[#e0e0e0] flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#4fc1ff]" />
                  {exp.role}
                </h3>
                <span className="year text-[#6A9955] font-bold border border-[#6A9955]/30 bg-[#6A9955]/10 px-3 py-1 rounded text-sm mt-2 sm:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>

              <div className="text-[#4fc1ff] font-medium mb-3">{exp.organization}</div>
              <p className="text-[#cccccc] mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2.5 py-1 text-xs font-mono bg-[#1e1e1e] text-[#dcdcaa] border border-[#3c3c3c] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Achievements Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: dly(0.3) }}
        className="achievements-header flex flex-col gap-2 mt-8"
      >
        <div className="code-line text-[#6A9955] text-sm">{'// achievements.ts -- milestones and accomplishments'}</div>
        <h1 className="heading-font text-4xl md:text-5xl font-bold text-white tracking-tight">Achievements</h1>
      </motion.div>

      {/* Achievements Content Sections */}
      <div className="space-y-8">

        {/* Hackathons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: dly(0.4) }}
        >
          <h2 className="subheading-font flex items-center gap-2 text-2xl font-bold text-white border-b border-[#333] pb-2 uppercase tracking-wider mb-4">
            <Trophy className="w-6 h-6 text-[#D97706]" />
            Hackathons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hackathons.map((h, idx) => (
              <div key={idx} className={`bg-[#252526] border border-[#333] p-4 rounded-lg ${h.colorTheme.hoverBorder} hover:bg-[#2a2d2e] transition-all duration-300 cursor-default relative group overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${h.colorTheme.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2 gap-3">
                    <h4 className={`subheading-font text-lg font-bold text-[#e0e0e0] leading-tight ${h.colorTheme.hoverText} transition-colors`}>{h.project}</h4>
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-md text-sm font-bold ${h.colorTheme.bg} ${h.colorTheme.text} border ${h.colorTheme.border} ${h.colorTheme.shadow} whitespace-nowrap shrink-0`}>
                      {h.badge}
                    </span>
                  </div>
                  <div className="text-[#4fc1ff] font-medium mb-1">{h.name}</div>
                  <div className="text-[#858585] text-xs font-mono mb-3">{h.year}</div>
                  <p className="text-[#cccccc] text-sm leading-relaxed">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Programs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: dly(0.45) }}
          className="mt-8"
        >
          <h2 className="subheading-font flex items-center gap-2 text-2xl font-bold text-white border-b border-[#333] pb-2 uppercase tracking-wider mb-4">
            <Star className="w-6 h-6 text-[#9333EA]" />
            Programs
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {programs.map((p, idx) => (
              <div key={idx} className="bg-[#252526] border border-[#333] p-4 rounded-lg hover:border-[#9333EA]/50 hover:bg-[#2a2d2e] transition-all duration-300 cursor-default relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9333EA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2 gap-3">
                    <h4 className="subheading-font text-lg font-bold text-[#e0e0e0] leading-tight group-hover:text-[#c084fc] transition-colors">{p.title}</h4>
                    <span className="inline-flex items-center px-4 py-2 rounded text-xs font-bold bg-[#9333EA]/10 text-[#d8b4fe] border border-[#9333EA]/50 shadow-[0_0_12px_rgba(147,51,234,0.4)] whitespace-nowrap shrink-0">
                      {p.badge}
                    </span>
                  </div>
                  <div className="text-[#858585] text-xs font-mono mb-3">{p.year}</div>
                  <p className="text-[#cccccc] text-sm leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Research Papers / Publications */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: dly(0.5) }}
          className="mt-8"
        >
          <h2 className="subheading-font flex items-center gap-2 text-2xl font-bold text-white border-b border-[#333] pb-2 uppercase tracking-wider mb-4">
            <BookOpen className="w-6 h-6 text-[#10b981]" />
            Research Papers / Publications
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {publications.map((pub, idx) => (
              <div key={idx} className="bg-[#252526] border border-[#333] p-4 rounded-lg hover:border-[#10b981]/50 hover:bg-[#2a2d2e] transition-all duration-300 cursor-default relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2 gap-3">
                    <h4 className="subheading-font text-lg font-bold text-[#e0e0e0] leading-tight group-hover:text-[#34d399] transition-colors">{pub.title}</h4>
                    <span className="inline-flex items-center px-4 py-2 rounded text-xs font-bold bg-[#10b981]/10 text-[#6ee7b7] border border-[#10b981]/50 shadow-[0_0_12px_rgba(16,185,129,0.4)] whitespace-nowrap shrink-0">
                      {pub.badge}
                    </span>
                  </div>
                  <div className="text-[#4fc1ff] font-medium mb-1">{pub.publication}</div>
                  <div className="text-[#858585] text-xs font-mono mb-3">{pub.year}</div>
                  <p className="text-[#cccccc] text-sm leading-relaxed">{pub.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: dly(0.6) }}
        >
          <h2 className="subheading-font flex items-center gap-2 text-2xl font-bold text-white border-b border-[#333] pb-2 uppercase tracking-wider mb-4">
            <Award className="w-6 h-6 text-[#ee0000]" />
            Certifications
          </h2>
          <div className="flex flex-col gap-4">
            {certifications.map((c, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-[#252526] rounded-lg border border-[#333] hover:border-[#ee0000]/50 hover:bg-[#2a2d2e] transition-colors cursor-default">
                <div>
                  <span className="subheading-font text-[#e0e0e0] font-bold block mb-1 text-lg">{c.title}</span>
                  <span className="text-[#4fc1ff]">{c.issuer}</span>
                </div>
                <span className="year text-[#6A9955] font-bold border border-[#6A9955]/30 bg-[#6A9955]/10 px-3 py-1 rounded text-sm mt-3 sm:mt-0 w-fit">
                  {c.date}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Spacer for bottom padding */}
      <div className="pb-8"></div>
    </motion.div>
  );
}