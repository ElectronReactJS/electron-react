const { app, BrowserWindow, session } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  
  // Clear the cache
  session.defaultSession.clearCache();

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: true, // Enable Node.js integration
      enableRemoteModule: true, // Enable remote module
      contextIsolation: true, // Disable context isolation
      autoHideMenuBar: true, // Auto-hide menu bar
      webSecurity: false
    },
  });
  const isPackaged = app.isPackaged;
  if (isPackaged) {
    // and load the index.html of the app.
    console.log("\n **********************************");
    console.log("\n *    app.isPackaged ==  TRUE     *");
    console.log("\n **********************************");
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  } else {
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    // and load the index.html of the app.
    //mainWindow.loadURL(`file://${path.join(__dirname, './pages/index.html')}`);
    console.log("\n **********************************");
    console.log("\n *    app.isPackaged ==  FALSE    *");
    console.log("\n **********************************");
  }
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
