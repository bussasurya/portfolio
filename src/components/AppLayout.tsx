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
        {activeSidebarPanel === 'explorer' && <Sidebar />}
        {activeSidebarPanel === 'search' && (
          <div className="flex select-none h-full bg-[#252526] text-[#cccccc] w-[250px] flex-shrink-0 flex-col border-r border-[#2b2b2b] p-4 text-[13px]">
            Search Panel Placeholder
          </div>
        )}
        {activeSidebarPanel === 'sourceControl' && (
          <div className="flex select-none h-full bg-[#252526] text-[#cccccc] w-[250px] flex-shrink-0 flex-col border-r border-[#2b2b2b] p-4 text-[13px]">
            Source Control Placeholder
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
        {isCopilotOpen && <CopilotPanel />}
      </div>

      <StatusBar />
      <CommandPalette />
    </div>
  );
}
