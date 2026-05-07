'use client';
import TitleBar from './TitleBar';
import ActivityBar from './ActivityBar';
import Sidebar from './Sidebar';
import CopilotPanel from './CopilotPanel';
import Tabs from './Tabs';
import Breadcrumbs from './Breadcrumbs';
import Editor from './Editor';
import StatusBar from './StatusBar';
import Terminal from './Terminal';
import CommandPalette from './CommandPalette';
import { useStore } from '../store/useStore';

export default function AppLayout() {
  const { activeSidebarPanel, isCopilotOpen } = useStore();

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[#1e1e1e] font-sans text-[#cccccc] select-none">
      <TitleBar />

      <div className="flex flex-1 overflow-hidden">
        <ActivityBar />
        
        {/* Dynamic Left Sidebar Outlet */}
        {activeSidebarPanel === 'explorer' && (
          <div className="absolute left-[48px] z-40 h-full shadow-2xl md:relative md:left-0 md:shadow-none">
            <Sidebar />
          </div>
        )}
        {activeSidebarPanel === 'search' && (
          <div className="absolute left-[48px] z-40 h-full shadow-2xl md:relative md:left-0 md:shadow-none">
            <div className="flex select-none h-full bg-[#252526] text-[#cccccc] w-[calc(100vw-48px)] md:w-[250px] flex-shrink-0 flex-col border-r border-[#2b2b2b] p-4 text-[13px]">
              Search Panel Placeholder
            </div>
          </div>
        )}
        {activeSidebarPanel === 'sourceControl' && (
          <div className="absolute left-[48px] z-40 h-full shadow-2xl md:relative md:left-0 md:shadow-none">
            <div className="flex select-none h-full bg-[#252526] text-[#cccccc] w-[calc(100vw-48px)] md:w-[250px] flex-shrink-0 flex-col border-r border-[#2b2b2b] p-4 text-[13px]">
              Source Control Placeholder
            </div>
          </div>
        )}
        
        {/* Main Editor Zone */}
        <div className="flex flex-1 flex-col min-w-0 overflow-hidden relative bg-[#1e1e1e]">
          <Tabs />
          <Breadcrumbs />
          
          {/* Split view for Editor and Terminal */}
          <div className="flex flex-1 flex-col overflow-hidden relative">
            <Editor />
            <Terminal />
          </div>
        </div>

        {/* Dynamic Right Copilot Panel */}
        {isCopilotOpen && (
          <div className="absolute right-0 z-40 h-full shadow-2xl md:relative md:shadow-none">
            <CopilotPanel />
          </div>
        )}
      </div>

      <StatusBar />
      <CommandPalette />
    </div>
  );
}
