// This runs BEFORE the web page (index.html) is loaded in the renderer process.
// It is the secure bridge between the renderer (frontend) and main (backend).

// Ensure we don't expose any Node.js APIs directly
import { contextBridge } from 'electron';

// This simple bridge exposes nothing, but fulfills the path requirement.
// In the future, you will use contextBridge.exposeInMainWorld here
// to safely expose functions for login, navigation, database calls, etc.
contextBridge.exposeInMainWorld('api', {
  // You will define your safe, sandboxed functions here later
});

console.log('Preload script loaded successfully.');
