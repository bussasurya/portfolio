'use client';
import { useState, useRef, useEffect } from 'react';
import { VscClose, VscChevronUp, VscChevronDown, VscTrash } from 'react-icons/vsc';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function Terminal() {
  const { isTerminalOpen, toggleTerminal, terminalHistory, addTerminalHistory } = useStore();
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory, isTerminalOpen]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      addTerminalHistory(`PS C:\\Users\\surya\\portfolio> ${cmd}`);
      
      if (cmd === 'clear') {
        useStore.setState({ terminalHistory: [] });
      } else if (cmd === 'whoami') {
        addTerminalHistory('Surya - Developer building web experiences.');
      } else if (cmd === 'projects') {
        addTerminalHistory('1. VS Code Portfolio\\n2. DSA Mentorship Platform\\n3. Space Portfolio 3D');
      } else if (cmd === 'contact') {
        addTerminalHistory('Email: surya@example.com | GitHub: @surya');
      } else if (cmd !== '') {
        addTerminalHistory(`Command not found: ${cmd}. Type "whoami", "projects", "contact" or "clear".`);
      }
      
      setInput('');
    }
  };

  return (
    <AnimatePresence>
      {isTerminalOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 260, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="border-t border-[#3c3c3c] bg-[#1e1e1e] flex flex-col shrink-0 overflow-hidden w-full z-10"
        >
          <div className="flex items-center justify-between px-4 py-2 text-[11px] text-[#cccccc] border-b border-[#2b2b2b] bg-[#1e1e1e]">
            <div className="flex space-x-6 uppercase tracking-widest font-semibold text-[#858585]">
              <span className="cursor-pointer hover:text-[#cccccc]">Problems <span className="opacity-60 font-normal">0</span></span>
              <span className="cursor-pointer hover:text-[#cccccc]">Output</span>
              <span className="cursor-pointer hover:text-[#cccccc]">Debug Console</span>
              <span className="cursor-pointer text-[#cccccc] border-b-[1px] cursor-default border-[#007acc] pb-1">Terminal</span>
              <span className="cursor-pointer hover:text-[#cccccc]">Ports</span>
            </div>
            <div className="flex items-center space-x-3 text-base text-[#858585]">
              <VscTrash className="cursor-pointer hover:text-[#cccccc] transition-colors" onClick={() => useStore.setState({ terminalHistory: [] })} />
              <VscChevronUp className="cursor-pointer hover:text-[#cccccc] transition-colors" />
              <VscChevronDown className="cursor-pointer hover:text-[#cccccc] transition-colors" />
              <VscClose className="cursor-pointer hover:text-[#cccccc] transition-colors" onClick={toggleTerminal} />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 text-[13px] font-mono text-[#cccccc] leading-relaxed custom-scrollbar">
            {terminalHistory.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap leading-[1.4] mb-0.5">{line}</div>
            ))}
            <div className="flex flex-wrap items-center mt-0.5">
              <span className="text-[#4af626] mr-2">PS C:\\Users\\surya\\portfolio&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-1 bg-transparent outline-none border-none text-[#cccccc] min-w-[200px]"
                autoFocus
                spellCheck={false}
              />
            </div>
            <div ref={bottomRef} className="h-4" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
