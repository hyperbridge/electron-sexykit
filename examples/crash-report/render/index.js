console.log('Index.js');

const {webFrame} = require('electron');
const electron = require('electron');
const remote = electron.remote;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

const crashReporter = require('./util/crash-report');
crashReporter.init();

const maxWidth = 1920;
const maxHeight = 1080; 

window.onerror = () => {
   showErrorModal();
}

showErrorModal = () => {
    let win = new remote.BrowserWindow({
        modal: true
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, './windows/crash-report/index.html'),
        protocol: 'file',
        slashes: true
    }));
}


const size = electron.screen.getPrimaryDisplay().workAreaSize;

if (size.width > maxWidth || size.height > maxHeight) {
    const zoomFactor = Math.min((size.width/maxWidth), (size.height/maxHeight));
    webFrame.setZoomFactor(zoomFactor);
}

let var2 = var1 + 1;

