import { create } from 'zustand';

interface StoreState {
  openedFiles: string[];
  activeFile: string | null;
  activeSidebarPanel: 'explorer' | 'search' | 'sourceControl';
  isTerminalOpen: boolean;
  isCopilotOpen: boolean;
  commandPaletteOpen: boolean;
  terminalHistory: string[];
  openedHistory: string[];
  
  // Actions
  openFile: (fileName: string) => void;
  closeFile: (fileName: string) => void;
  setActiveFile: (fileName: string) => void;
  setActiveSidebarPanel: (panel: 'explorer' | 'search' | 'sourceControl') => void;
  toggleTerminal: () => void;
  toggleCopilot: () => void;
  setCommandPaletteOpen: (isOpen: boolean) => void;
  addTerminalHistory: (entry: string) => void;
  markAsOpened: (fileName: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  openedFiles: ['home.tsx'],
  activeFile: 'home.tsx',
  activeSidebarPanel: 'explorer',
  isTerminalOpen: false,
  isCopilotOpen: false,
  commandPaletteOpen: false,
  terminalHistory: [
    'Welcome to the VS Code Terminal.',
    'Type "help" to see available commands.'
  ],
  openedHistory: [],

  openFile: (fileName) => set((state) => {
    if (!state.openedFiles.includes(fileName)) {
      return { 
        openedFiles: [...state.openedFiles, fileName],
        activeFile: fileName
      };
    }
    return { activeFile: fileName };
  }),

  closeFile: (fileName) => set((state) => {
    const newOpened = state.openedFiles.filter(f => f !== fileName);
    let newActive = state.activeFile;
    
    if (state.activeFile === fileName) {
      if (newOpened.length > 0) {
        const index = state.openedFiles.indexOf(fileName);
        newActive = newOpened[index - 1] || newOpened[0];
      } else {
        newActive = null;
      }
    }
    return { openedFiles: newOpened, activeFile: newActive };
  }),

  setActiveFile: (fileName) => set({ activeFile: fileName }),
  setActiveSidebarPanel: (panel) => set({ activeSidebarPanel: panel }),
  
  toggleTerminal: () => set((state) => ({ isTerminalOpen: !state.isTerminalOpen })),
  toggleCopilot: () => set((state) => ({ isCopilotOpen: !state.isCopilotOpen })),
  
  setCommandPaletteOpen: (isOpen) => set({ commandPaletteOpen: isOpen }),

  addTerminalHistory: (entry) => set((state) => ({ 
    terminalHistory: [...state.terminalHistory, entry] 
  })),

  markAsOpened: (fileName) => set((state) => {
    if (!state.openedHistory.includes(fileName)) {
      return { openedHistory: [...state.openedHistory, fileName] };
    }
    return state;
  })
}));
