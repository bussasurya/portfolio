'use client';
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose, VscMenu } from 'react-icons/vsc';

export default function TitleBar() {
  const menus = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];

  return (
    <div className="flex h-[28px] w-full shrink-0 select-none items-center justify-between bg-[#181818] text-[#cccccc] text-[13px] border-b border-[#2b2b2b]">
      {/* Left Menu Section */}
      <div className="flex h-full items-center pl-2">
        <div className="flex items-center justify-center p-2 mr-2 cursor-pointer hover:bg-white/10 rounded">
          {/* Subtle logo replacement or generic menu icon for mobile, but VS Code usually just has the actual icon */}
          <div className="w-4 h-4 bg-[#007acc] rounded-sm transform rotate-45 scale-75 opacity-90" />
        </div>
        <div className="hidden md:flex h-full items-center">
          {menus.map((menu) => (
            <div key={menu} className="flex h-full items-center px-2 cursor-pointer hover:bg-white/10 rounded-md transition-colors my-[2px]">
              {menu}
            </div>
          ))}
        </div>
      </div>

      {/* Center Search / Title */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto">
        <div className="flex items-center bg-[#2d2d2d] border border-[#3c3c3c] hover:border-[#555555] rounded-md px-32 py-[2px] transition-colors cursor-text max-w-[40vw]">
          <span className="text-[#858585] truncate text-[12px]">Surya - Visual Studio Code</span>
        </div>
      </div>

      {/* Right Windows Controls */}
      <div className="flex h-full items-center">
        <div className="flex h-full w-[46px] items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
          <VscChromeMinimize className="text-[14px]" />
        </div>
        <div className="flex h-full w-[46px] items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
          <VscChromeMaximize className="text-[14px]" />
        </div>
        <div className="flex h-full w-[46px] items-center justify-center cursor-pointer hover:bg-red-500 hover:text-white transition-colors">
          <VscChromeClose className="text-[14px]" />
        </div>
      </div>
    </div>
  );
}
