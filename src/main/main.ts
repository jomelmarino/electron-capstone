// Modules to control application life and create native browser window
import { app, BrowserWindow, Menu } from 'electron';
import * as path from 'path'; 

const createWindow = (): void => {
    const windowOptions: Electron.BrowserWindowConstructorOptions = {
        width: 1600, 
        height: 900, 
        resizable: true,
        autoHideMenuBar: true, 
        webPreferences: {
            // ⚠️ FIX 1: Correct the path for the compiled preload.js.
            // __dirname is the directory of the compiled main.js (i.e., 'dist').
            // preload.js will also be compiled to 'dist', so we reference it directly.
            preload: path.join(__dirname, 'preload.js'), 
            
            nodeIntegration: false,
            contextIsolation: true,
        }
    };

    const mainWindow = new BrowserWindow(windowOptions);

    // ⚠️ FIX 2: Correct the path to the index.html file in the source structure.
    // The path is relative to the project root when using loadFile.
    mainWindow.loadFile('src/renderer/html/index.html');
}

app.whenReady().then(() => {
    createWindow();
    Menu.setApplicationMenu(null);
      
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});