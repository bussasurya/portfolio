'use client';
import { VscFiles, VscSearch, VscSourceControl, VscCopilot, VscSettingsGear, VscAccount, VscCloudDownload } from 'react-icons/vsc';
import { useStore } from '../store/useStore';
import { useState } from 'react';

export default function ActivityBar() {
  const { activeSidebarPanel, setActiveSidebarPanel, isCopilotOpen, toggleCopilot } = useStore();
  const [downloadMsg, setDownloadMsg] = useState(false);

  const getIconClass = (panel: string) => {
    return activeSidebarPanel === panel 
      ? "text-[#ffffff]" 
      : "text-[#858585] hover:text-[#ffffff]";
  };

  const renderActiveBorder = (panel: string) => {
    return activeSidebarPanel === panel && (
      <div className="absolute left-0 top-0 h-full w-[2px] bg-[#007acc]"></div>
    );
  };

  const handleDownload = () => {
    setDownloadMsg(true);
    setTimeout(() => {
      setDownloadMsg(false);
    }, 2000);
  };

  return (
    <div className="flex h-full w-[48px] shrink-0 flex-col items-center justify-between bg-[#333333] py-2 border-r border-[#252526] select-none z-20 relative">
      {/* Toast Mock */}
      {downloadMsg && (
        <div className="absolute left-14 bottom-4 bg-[#007acc] text-white text-[11px] px-3 py-1.5 rounded shadow-lg whitespace-nowrap z-50">
          Downloading resume.pdf...
        </div>
      )}

      <div className="flex flex-col w-full items-center">
        <div 
          title="Explorer"
          className={`cursor-pointer text-[24px] relative w-full flex justify-center py-3 transition-colors ${getIconClass('explorer')}`}
          onClick={() => setActiveSidebarPanel('explorer')}
        >
          <VscFiles />
          {renderActiveBorder('explorer')}
        </div>
        <div 
          title="Search"
          className={`cursor-pointer text-[24px] relative w-full flex justify-center py-3 transition-colors ${getIconClass('search')}`}
          onClick={() => setActiveSidebarPanel('search')}
        >
          <VscSearch />
          {renderActiveBorder('search')}
        </div>
        <div 
          title="Source Control"
          className={`cursor-pointer text-[24px] relative w-full flex justify-center py-3 transition-colors ${getIconClass('sourceControl')}`}
          onClick={() => setActiveSidebarPanel('sourceControl')}
        >
          <VscSourceControl />
          <div className="absolute top-3 right-2 flex items-center justify-center bg-[#007acc] text-white text-[9px] rounded-full w-[14px] h-[14px]">
            1
          </div>
          {renderActiveBorder('sourceControl')}
        </div>
        <div 
          title="Copilot"
          className={`cursor-pointer text-[24px] relative w-full flex justify-center py-3 transition-colors ${
            isCopilotOpen ? "text-[#ffffff]" : "text-[#858585] hover:text-[#ffffff]"
          }`}
          onClick={() => toggleCopilot()}
        >
          <VscCopilot />
          {isCopilotOpen && (
            <div className="absolute left-0 top-0 h-full w-[2px] bg-[#007acc]"></div>
          )}
        </div>
        {/* Added Download Resume action replacing strictly buggy mock */}
        <a 
          href="/resume.pdf" 
          download 
          title="Download Resume"
          onClick={handleDownload}
          className={`cursor-pointer text-[24px] relative w-full flex justify-center py-3 transition-colors text-[#858585] hover:text-[#ffffff]`}
        >
          <VscCloudDownload />
        </a>
      </div>
      
      <div className="flex flex-col w-full items-center mb-2">
        <div className="cursor-pointer text-[24px] text-[#858585] hover:text-[#ffffff] py-3 transition-colors w-full flex justify-center">
          <VscAccount />
        </div>
        <div className="cursor-pointer text-[24px] text-[#858585] hover:text-[#ffffff] py-3 transition-colors w-full flex justify-center">
          <VscSettingsGear />
        </div>
      </div>
    </div>
  );
}
