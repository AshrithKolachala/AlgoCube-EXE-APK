const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

const APP_NAME = "AlgoCube";

function openOutside(url) {
  if (/^(https?:|mailto:)/i.test(url)) shell.openExternal(url);
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 760,
    minWidth: 360,
    minHeight: 480,
    title: APP_NAME,
    icon: path.join(__dirname, 'build', 'icon.png'),
    backgroundColor: '#ffffff',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => { openOutside(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) { event.preventDefault(); openOutside(url); }
  });
}

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.whenReady().then(createWindow);
  app.on('window-all-closed', () => app.quit());
}
