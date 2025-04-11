/// <reference types="vite/client" />

// Used in Renderer process, expose in `preload.ts`
interface Window {
  ipcRenderer: import("electron").IpcRenderer;
  /** An object listing the version strings of Node.js and its dependencies */
  versions: {
    [key: string]: string;
  }
}
