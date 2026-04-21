'use client';
import { useState, useEffect, useRef } from 'react';
import { VscChevronRight } from 'react-icons/vsc';
import { filesData } from '../data/files';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommandPalette() {
  const { commandPaletteOpen, setCommandPaletteOpen, openFile } = useStore();
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal on Ctrl+` or Ctrl+~
      if (e.ctrlKey && (e.key === '\`' || e.key === '~')) {
        e.preventDefault();
        useStore.getState().toggleTerminal();
      }
      
      // Toggle Command Palette on Ctrl+P
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
      
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setCommandPaletteOpen]);

  useEffect(() => {
    if (commandPaletteOpen && inputRef.current) {
      inputRef.current.focus();
    } else {
      setSearch('');
    }
  }, [commandPaletteOpen]);

  const filteredFiles = filesData.filter(f => f.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={() => setCommandPaletteOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%', scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
            exit={{ opacity: 0, y: -20, x: '-50%', scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 w-[600px] bg-[#252526] border border-[#454545] rounded-lg shadow-2xl z-[60] flex flex-col overflow-hidden max-w-[90vw]"
          >
            <div className="p-2 border-b border-[#454545]">
              <div className="flex items-center bg-[#3c3c3c] px-3 py-2 rounded border border-[#3c3c3c] focus-within:border-vscode-accent">
                <VscChevronRight className="text-vscode-textDark mr-2" />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent w-full outline-none text-[#cccccc] text-[13px] placeholder-vscode-textDark"
                  placeholder="Search files by name..."
                />
              </div>
            </div>
            {filteredFiles.length > 0 && (
              <div className="max-h-[350px] overflow-y-auto py-2 custom-scrollbar">
                {filteredFiles.map((file) => {
                  const Icon = file.icon;
                  return (
                    <div
                      key={file.name}
                      className="flex items-center px-4 py-[6px] hover:bg-[#04395e] cursor-pointer text-[#cccccc] text-[13px]"
                      onClick={() => {
                        openFile(file.name);
                        setCommandPaletteOpen(false);
                      }}
                    >
                      <Icon className="mr-3 inline text-base" style={{ color: file.color }} />
                      <span>{file.name}</span>
                    </div>
                  );
                })}
              </div>
            )}
            {filteredFiles.length === 0 && (
              <div className="p-4 text-center text-vscode-textDark text-[13px]">
                No matching files found.
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
