console.log("The main process is working");
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const badge = require('electron-windows-badge');
let win;

app.on('ready', () => {

    win = new BrowserWindow();
    new badge(win); // For Windows
    
    win.loadURL(url.format({
        pathname: path.join(__dirname, './render/index.html'),            
        protocol: 'file',
        slashes: true
    }));

     // let dock = electron.app.dock;  // only for Mac
     // dock.setBadge(i);  
});




