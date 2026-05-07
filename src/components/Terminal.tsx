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
      const cmdString = input.trim();
      addTerminalHistory(`bussasurya@portfolio:~$ ${cmdString}`);
      
      const args = cmdString.split(' ');
      const cmd = args[0].toLowerCase();
      const arg1 = args.slice(1).join(' ');

      if (cmd === 'clear') {
        useStore.setState({ terminalHistory: ["Welcome! Type 'help' to see available commands."] });
      } else if (cmd === 'help') {
        addTerminalHistory(`Available commands:
ls — list files in current directory
pwd — print working directory
cd <dir> — change directory (cd .. to go up)
cat <file> — view / open a file in the editor
open <file> — same as cat
whoami — who am I?
echo <text> — print text
date — show current date & time
git log — show recent commits
python --version — show Python version
clear — clear the terminal`);
      } else if (cmd === 'ls') {
        addTerminalHistory('home.tsx  about.ts  projects.js  skills.json  experience.tsx  contact.css');
      } else if (cmd === 'pwd') {
        addTerminalHistory('/home/bussasurya/portfolio');
      } else if (cmd === 'cd') {
        if (!arg1 || arg1 === '~') {
          // do nothing, conceptually moved to ~
        } else if (arg1 === '..') {
          addTerminalHistory('Cannot go up from root directory in this simulation.');
        } else {
          addTerminalHistory(`bash: cd: ${arg1}: No such file or directory`);
        }
      } else if (cmd === 'cat' || cmd === 'open') {
        if (!arg1) {
          addTerminalHistory(`${cmd}: missing file operand`);
        } else if (['home.tsx', 'about.ts', 'projects.js', 'skills.json', 'experience.tsx', 'contact.css'].includes(arg1)) {
          useStore.getState().openFile(arg1);
          addTerminalHistory(`Opened ${arg1} in the editor.`);
        } else {
          addTerminalHistory(`${cmd}: ${arg1}: No such file or directory`);
        }
      } else if (cmd === 'whoami') {
        addTerminalHistory('bussasurya');
      } else if (cmd === 'echo') {
        addTerminalHistory(arg1);
      } else if (cmd === 'date') {
        addTerminalHistory(new Date().toString());
      } else if (cmd === 'git') {
        if (arg1 === 'log') {
          addTerminalHistory(`commit 9f8a3b2e (HEAD -> main)
Author: Surya
Date:   ${new Date().toDateString()}

    Initial commit: Built amazing VS Code Portfolio`);
        } else {
          addTerminalHistory(`git: '${arg1}' is not a git command. See 'git --help'.`);
        }
      } else if (cmd === 'python') {
        if (arg1 === '--version') {
          addTerminalHistory('Python 3.10.12');
        } else {
          addTerminalHistory(`python: can't open file '${arg1}': [Errno 2] No such file or directory`);
        }
      } else if (cmd !== '') {
        addTerminalHistory(`bash: ${cmd}: command not found`);
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
          <div className="flex items-center justify-between px-4 py-2 text-[11px] text-[#cccccc] border-b border-[#2b2b2b] bg-[#1e1e1e] overflow-x-auto hide-scrollbar">
            <div className="flex space-x-6 uppercase tracking-widest font-semibold text-[#858585] whitespace-nowrap">
              <span className="cursor-pointer hover:text-[#cccccc]">Problems <span className="opacity-60 font-normal">0</span></span>
              <span className="cursor-pointer hover:text-[#cccccc]">Output</span>
              <span className="cursor-pointer hover:text-[#cccccc]">Debug Console</span>
              <span className="cursor-pointer text-[#cccccc] border-b-[1px] cursor-default border-[#007acc] pb-1">Terminal</span>
              <span className="cursor-pointer hover:text-[#cccccc]">Ports</span>
            </div>
            <div className="flex items-center space-x-3 text-base text-[#858585] ml-4 shrink-0">
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
              <span className="text-[#4af626] mr-2">bussasurya@portfolio:~$</span>
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
