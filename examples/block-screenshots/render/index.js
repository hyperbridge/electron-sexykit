console.log('Index.js');

const {webFrame} = require('electron');
const electron = require('electron');
const maxWidth = 1920;
const maxHeight = 1080; 

const size = electron.screen.getPrimaryDisplay().workAreaSize;

if (size.width > maxWidth || size.height > maxHeight) {
    const zoomFactor = Math.min((size.width/maxWidth), (size.height/maxHeight));
    webFrame.setZoomFactor(zoomFactor);
}

