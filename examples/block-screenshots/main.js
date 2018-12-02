console.log("The main process is working");
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
let win;

app.on('ready', () => {

     win = new BrowserWindow({
       
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, './render/index.html'),            
        protocol: 'file',
        slashes: true
    }));

    win.setContentProtection(true); // only on Windows and Mac
});





