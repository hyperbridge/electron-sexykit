console.log('Index.js');

const electron = require('electron');
const {webFrame} = require('electron');
const remote = electron.remote;

const stdWidth = 800;
const stdHeight = 600; 


window.onresize = () => {
    let size = remote.getCurrentWindow().getSize();
    adjustZoom(size);
}

adjustZoom = (currentWindowSize) => {

    let width = currentWindowSize[0];
    let height = currentWindowSize[1];
    const zoomFactor = Math.min((width/stdWidth), (height/stdHeight));
    webFrame.setZoomFactor(zoomFactor);
}


