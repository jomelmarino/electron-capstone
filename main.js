// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  // Create the browser window with dimensions for a desktop/web view.
  const mainWindow = new BrowserWindow({
    // Increased dimensions for a desktop feel
    width: 1600,       // A common small desktop/laptop width
    height: 900,       // Sufficient height to display the content
    resizable: true,   // Allowing resizing is typical for a desktop app
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), 
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  // Load the index.html of the app.
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});