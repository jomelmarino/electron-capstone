// Modules to control application life and create native browser window
import { app, BrowserWindow, Menu } from 'electron'; // IMPORT Menu
import * as path from 'path'; 

const createWindow = (): void => {
  const windowOptions: Electron.BrowserWindowConstructorOptions = {
    // Increased dimensions for a desktop feel
    width: 1600, 
    height: 900, 
    resizable: true,
    // Option to hide the menu bar on Windows/Linux
    autoHideMenuBar: true, 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), 
      nodeIntegration: false,
      contextIsolation: true,
    }
  };

  // Create the browser window
  const mainWindow = new BrowserWindow(windowOptions);

  // Load the index.html of the app.
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  Menu.setApplicationMenu(null);
   
  app.on('activate', () => {
    // Check if any windows are open before creating a new one
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  // Quit when all windows are closed, except on macOS (Darwin)
  if (process.platform !== 'darwin') {
    app.quit();
  }
});