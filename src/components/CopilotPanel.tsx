'use client';
import { VscCopilot, VscSend } from 'react-icons/vsc';
import { useState } from 'react';

export default function CopilotPanel() {
  const [input, setInput] = useState('');
  
  const suggestedQueries = [
    "Tell me about Surya",
    "What projects has Surya built?",
    "What is Surya's tech stack?",
    "What is Surya's experience?",
    "How can I contact Surya?",
    "Is Surya open to opportunities?",
    "Why should I hire Surya?"
  ];

  return (
    <div className="flex select-none h-full bg-[#252526] text-[#cccccc] w-[280px] flex-shrink-0 flex-col border-l border-[#2b2b2b]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 text-[11px] uppercase tracking-wide text-[#bbbbbb] shrink-0 font-semibold mb-1">
        <span>Surya's Copilot</span>
        <VscCopilot className="text-[#cccccc]" />
      </div>

      <div className="flex-1 overflow-y-auto px-3 pb-2 custom-scrollbar flex flex-col">
        {/* Intro */}
        <div className="text-[11px] text-[#cccccc] mb-3 leading-[16px]">
          Ask about Surya's projects, skills, experience, and anything else you want to know!
        </div>

        {/* Suggested Queries */}
        <div className="flex flex-col space-y-[2px] mt-1 border-t border-[#3c3c3c] pt-2">
          <div className="text-[9px] text-[#858585] uppercase tracking-wider mb-1 font-semibold">Suggested</div>
          {suggestedQueries.map((query, i) => (
            <div 
              key={i} 
              className="text-[11px] text-[#cccccc] py-[2px] pl-2 hover:bg-[#2a2d2e] border-l-2 border-transparent hover:border-[#007acc] cursor-pointer transition-colors text-wrap leading-[14px]"
            >
              {query}
            </div>
          ))}
        </div>
        <div className="flex-1" />
      </div>

      {/* Input Field */}
      <div className="px-3 pb-3 pt-2">
        <div className="relative border border-[#3c3c3c] focus-within:border-[#007acc] rounded-[2px] bg-[#3c3c3c] flex items-center transition-colors">
          <textarea 
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-transparent text-[11px] text-[#cccccc] outline-none px-2 py-1 resize-none placeholder-[#858585] custom-scrollbar"
            placeholder="Ask Copilot..."
            spellCheck={false}
          />
          <VscSend 
            className={`absolute right-2 bottom-1.5 text-[12px] cursor-pointer transition-colors ${input.length > 0 ? 'text-[#007acc] hover:text-[#4fc1ff]' : 'text-[#858585]'}`} 
          />
        </div>
      </div>
    </div>
  );
}
