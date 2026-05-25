'use client';
import { VscCopilot, VscSend, VscRefresh } from 'react-icons/vsc';
import { useState, useEffect, useRef } from 'react';
import { useStore } from '../store/useStore';

interface Message {
  sender: 'user' | 'copilot';
  text: string;
  fileAction?: string;
}

export default function CopilotPanel() {
  const { openFile } = useStore();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = { sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    try {
      // 1. Map messages to OpenRouter system format
      const historyPayload = messages.map(m => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text
      }));
      historyPayload.push({ role: 'user', content: textToSend });

      // 2. Query serverless Next route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: historyPayload })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      const rawText = data.text;
      
      // 3. Extract optional [FileAction: file] tags from the LLM
      const fileActionRegex = /\[FileAction:\s*([a-zA-Z0-9_\-\.]+?)\]/;
      const match = rawText.match(fileActionRegex);
      let fileAction: string | undefined = undefined;
      let cleanText = rawText;
      
      if (match) {
        fileAction = match[1].trim();
        cleanText = rawText.replace(fileActionRegex, '').trim();
      }

      setIsThinking(false);
      setMessages((prev) => [...prev, {
        sender: 'copilot',
        text: cleanText,
        fileAction: fileAction
      }]);

    } catch (err) {
      console.error("OpenRouter API error:", err);
      setIsThinking(false);
      setMessages((prev) => [...prev, {
        sender: 'copilot',
        text: "Sorry — the AI assistant is temporarily unavailable."
      }]);
    }
  };

  const handleSuggestion = (type: string) => {
    let queryText = '';
    switch (type) {
      case 'projects':
        queryText = 'Show me your deep learning and clinical fine-tuning projects.';
        break;
      case 'skills':
        queryText = 'What is your stack, specifically DevOps and AI/ML?';
        break;
      case 'experience':
        queryText = 'Detail your co-leadership role at ACM Student Chapter.';
        break;
      case 'achievements':
        queryText = 'Tell me about your IEEE Xplore publication and hackathons.';
        break;
      case 'contact':
        queryText = 'What is your email and LinkedIn profile?';
        break;
      default:
        return;
    }
    handleSend(queryText);
  };

  const clearChat = () => {
    setMessages([]);
  };

  const SunAvatar = () => (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-amber-500/10 blur-xl animate-pulse" />
      <div className="absolute w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 shadow-[0_0_22px_rgba(245,158,11,0.65)]" />
      <svg 
        className="w-16 h-16 text-amber-500" 
        style={{ animation: 'spin 18s linear infinite' }} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      >
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    </div>
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <div className="flex select-none h-full bg-[#252526] text-[#cccccc] w-[calc(100vw-48px)] md:w-[300px] flex-shrink-0 flex-col border-l border-[#2b2b2b] subheading-font relative">
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#2b2b2b] shrink-0 font-semibold select-none text-[11px] uppercase tracking-wider text-[#cccccc]">
        <div className="flex items-center gap-1.5 text-amber-400">
          <svg className="w-4.5 h-4.5 text-amber-500 fill-current animate-pulse" viewBox="0 0 24 24">
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-10c.28 0 .5-.22.5-.5V3c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1.5c0 .28.22.5.5.5zm0 14c-.28 0-.5.22-.5.5V21c0 .28.22.5.5.5s.5-.22.5-.5v-1.5c0-.28-.22-.5-.5-.5zm8.5-7.5H19c-.28 0-.5.22-.5.5s.22.5.5.5h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zM6 12c0-.28-.22-.5-.5-.5H4c-.28 0-.5.22-.5.5s.22.5.5.5h1.5c.28 0 .5-.22.5-.5zm12.36-6.95c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.06 1.06c.2.2.51.2.71 0s.2-.51 0-.71l-1.06-1.06zm-11.3 11.3c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.06 1.06c.2.2.51.2.71 0s.2-.51 0-.71l-1.06-1.06zm11.3 0c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.06-1.06c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-1.06 1.06zm-11.3-11.3c-.2-.2-.51-.2-.71 0s-.2.51 0 .71l1.06-1.06c.2-.2.2-.51 0-.71s-.51-.2-.71 0l-1.06 1.06z" />
          </svg>
          <span className="font-semibold text-xs text-[#e2c08d] tracking-normal uppercase">Surya's Personal AI</span>
        </div>
        {messages.length > 0 && (
          <button 
            title="Clear Chat"
            onClick={clearChat}
            className="text-[#858585] hover:text-[#e2c08d] p-1 rounded hover:bg-[#2d2a20] transition-colors focus:outline-none cursor-pointer"
          >
            <VscRefresh className="text-[14px]" />
          </button>
        )}
      </div>

      {/* Main Panel Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col">
        {messages.length === 0 ? (
          /* Welcome Branding Screen */
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center my-auto">
            <SunAvatar />
            <h3 className="text-[13px] font-semibold text-[#e2c08d] mt-4 mb-1.5">Surya's Personal AI</h3>
            <p className="text-[11px] text-[#858585] max-w-[215px] leading-[16px] mb-6">
              Welcome! Ask me anything about Surya's experience, skills, and publications. I have full knowledge of his profile and workspace.
            </p>

            {/* Quick Prompts Grid */}
            <div className="grid grid-cols-2 gap-2 w-full max-w-[250px]">
              <button 
                onClick={() => handleSuggestion('projects')} 
                className="flex flex-col items-center justify-center p-2.5 bg-[#2b271d] hover:bg-[#383120] border border-[#d97706]/20 hover:border-amber-500/40 rounded transition-all text-center cursor-pointer group"
              >
                <span className="text-[16px] mb-1 group-hover:scale-110 transition-transform">📁</span>
                <span className="text-[10px] font-bold text-[#e2c08d]">Projects</span>
              </button>
              <button 
                onClick={() => handleSuggestion('skills')} 
                className="flex flex-col items-center justify-center p-2.5 bg-[#2b271d] hover:bg-[#383120] border border-[#d97706]/20 hover:border-amber-500/40 rounded transition-all text-center cursor-pointer group"
              >
                <span className="text-[16px] mb-1 group-hover:scale-110 transition-transform">⚡</span>
                <span className="text-[10px] font-bold text-[#e2c08d]">Tech Stack</span>
              </button>
              <button 
                onClick={() => handleSuggestion('experience')} 
                className="flex flex-col items-center justify-center p-2.5 bg-[#2b271d] hover:bg-[#383120] border border-[#d97706]/20 hover:border-amber-500/40 rounded transition-all text-center cursor-pointer group"
              >
                <span className="text-[16px] mb-1 group-hover:scale-110 transition-transform">💼</span>
                <span className="text-[10px] font-bold text-[#e2c08d]">Experience</span>
              </button>
              <button 
                onClick={() => handleSuggestion('achievements')} 
                className="flex flex-col items-center justify-center p-2.5 bg-[#2b271d] hover:bg-[#383120] border border-[#d97706]/20 hover:border-amber-500/40 rounded transition-all text-center cursor-pointer group"
              >
                <span className="text-[16px] mb-1 group-hover:scale-110 transition-transform">🏆</span>
                <span className="text-[10px] font-bold text-[#e2c08d]">Achievements</span>
              </button>
              <button 
                onClick={() => handleSuggestion('contact')} 
                className="col-span-2 flex items-center justify-center gap-2 p-2.5 bg-[#2b271d] hover:bg-[#383120] border border-[#d97706]/20 hover:border-amber-500/40 rounded transition-all cursor-pointer group"
              >
                <span className="text-[14px] group-hover:scale-110 transition-transform">✉</span>
                <span className="text-[10px] font-bold text-[#e2c08d]">Contact & Profiles</span>
              </button>
            </div>
          </div>
        ) : (
          /* Conversational Messages */
          <div className="flex flex-col gap-3.5 p-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex gap-2 max-w-[92%] items-start">
                  {msg.sender === 'copilot' && (
                    <div className="w-5 h-5 shrink-0 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center shadow-[0_0_8px_rgba(245,158,11,0.5)] mt-0.5">
                      <svg className="w-3 h-3 text-white fill-current animate-pulse" viewBox="0 0 24 24">
                        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                      </svg>
                    </div>
                  )}
                  <div 
                    className={`rounded px-3 py-2.5 text-xs leading-[17px] whitespace-pre-line ${
                      msg.sender === 'user' 
                        ? 'bg-[#37373d] text-[#cccccc] border border-[#454545]' 
                        : 'bg-[#2b271d] text-[#e2c08d] border border-[#d97706]/20'
                    }`}
                  >
                    {msg.text}

                    {/* Action Button linked to the workspace */}
                    {msg.fileAction && (
                      <div className="mt-2.5 pt-2 border-t border-[#d97706]/10 flex">
                        <button 
                          onClick={() => openFile(msg.fileAction!)}
                          className="flex items-center gap-1.5 bg-[#1e1c15] border border-amber-500/30 hover:border-amber-500 hover:bg-amber-950/20 text-[#e2c08d] text-[10px] px-2 py-1 rounded transition-colors font-mono cursor-pointer font-bold"
                        >
                          <span>📂 Open {msg.fileAction}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* AI thinking state */}
            {isThinking && (
              <div className="flex gap-2 max-w-[92%] items-start self-start">
                <div className="w-5 h-5 shrink-0 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 flex items-center justify-center shadow-[0_0_8px_rgba(245,158,11,0.5)] mt-0.5 animate-spin">
                  <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                  </svg>
                </div>
                <div className="rounded px-3 py-2.5 text-xs bg-[#2b271d] text-[#e2c08d] border border-[#d97706]/20 font-bold animate-pulse italic">
                  AI is thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Footer Query Box */}
      <div className="p-3 border-t border-[#2b2b2b] shrink-0 bg-[#252526]">
        <div className="relative border border-[#3c3c3c] focus-within:border-amber-500/50 focus-within:shadow-[0_0_8px_rgba(217,119,6,0.15)] rounded-[3px] bg-[#3c3c3c] flex items-center transition-all">
          <textarea 
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-[11px] text-[#cccccc] outline-none pl-2.5 pr-8 py-2.5 resize-none placeholder-[#858585] custom-scrollbar max-h-24 overflow-y-auto leading-[14px]"
            placeholder="Ask Surya's AI..."
            spellCheck={false}
          />
          <button 
            onClick={() => handleSend(input)}
            disabled={!input.trim()}
            className="absolute right-2 bottom-2 text-[13px] transition-colors focus:outline-none cursor-pointer"
          >
            <VscSend 
              className={`transition-colors ${
                input.trim() 
                  ? 'text-amber-500 hover:text-amber-400' 
                  : 'text-[#858585]'
              }`} 
            />
          </button>
        </div>
      </div>
    </div>
  );
}
