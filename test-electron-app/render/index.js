console.log('Index.js');

const electron = require('electron');
const {webFrame} = require('electron');
const remote = electron.remote;

const maxWidth = 800;
const maxHeight = 600; 
let i = 0;

window.onresize = () => {
    i++;
    console.log('Resize detected: ', i);
    
    let size = remote.getCurrentWindow().getSize();
    adjustZoom(size);
}

adjustZoom = (currentWindowSize) => {

    let width = currentWindowSize[0];
    let height = currentWindowSize[1];

    if (width > maxWidth || height > maxHeight) {
        const zoomFactor = Math.min((width/maxWidth), (height/maxHeight));
        webFrame.setZoomFactor(zoomFactor);
    }

}


