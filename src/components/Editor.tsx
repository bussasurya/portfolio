'use client';
import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';

import HomeFile from './files/HomeFile';
import AboutFile from './files/AboutFile';
import ProjectsFile from './files/ProjectsFile';
import SkillsFile from './files/SkillsFile';
import ExperienceFile from './files/ExperienceFile';
import ContactFile from './files/ContactFile';

export default function Editor() {
  const { activeFile, openedHistory, markAsOpened } = useStore();

  const hasBeenOpened = activeFile ? openedHistory.includes(activeFile) : false;

  useEffect(() => {
    if (activeFile && !hasBeenOpened) {
      // Mark as opened after a very short delay so the initial render
      // receives hasBeenOpened = false and triggers animations.
      const timer = setTimeout(() => {
        markAsOpened(activeFile);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeFile, hasBeenOpened, markAsOpened]);

  if (!activeFile) {
    return (
      <div className="flex flex-1 items-center justify-center bg-vscode-bg h-full w-full">
        <div className="text-6xl font-bold tracking-widest text-[#2d2d2d] select-none">
          VS CODE PORTFOLIO
        </div>
      </div>
    );
  }

  const renderFileContent = () => {
    switch (activeFile) {
      case 'home.tsx': return <HomeFile hasBeenOpened={hasBeenOpened} />;
      case 'about.ts': return <AboutFile hasBeenOpened={hasBeenOpened} />;
      case 'projects.js': return <ProjectsFile hasBeenOpened={hasBeenOpened} />;
      case 'skills.json': return <SkillsFile hasBeenOpened={hasBeenOpened} />;
      case 'experience.ts': return <ExperienceFile hasBeenOpened={hasBeenOpened} />;
      case 'contact.css': return <ContactFile hasBeenOpened={hasBeenOpened} />;
      default: return <div className="p-6 text-[#cccccc]">Unknown file type...</div>;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-vscode-bg relative custom-scrollbar">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFile}
          initial={{ opacity: 0, y: 2 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -2 }}
          transition={{ duration: 0.15 }}
          className="h-full w-full"
        >
          {renderFileContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
