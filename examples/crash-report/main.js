console.log("The main process is working");
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const crashReporter = require('./render/util/crash-report');
crashReporter.init();

process.on('uncaughtException', () => {
    alert('oops from main');
})

function createWindow() {
    win = new BrowserWindow();
    win.loadURL(url.format({
        pathname: path.join(__dirname, './render/index.html'),
        protocol: 'file',
        slashes: true
    }));
}

// open at login set to false
app.setLoginItemSettings({
    openAtLogin:false
});

app.on('ready', () => {
    createWindow();
}); 