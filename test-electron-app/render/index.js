console.log('Index.js');

const {webFrame} = require('electron');
const electron = require('electron');
const remote = electron.remote;
const maxWidth = 1920;
const maxHeight = 1080; 

window.onresize = () =>{
    const size = remote.getCurrentWindow().getSize();
    console.log('Size: ', size);
}

// if (size.width > maxWidth || size.height > maxHeight) {
//     const zoomFactor = Math.min((size.width/maxWidth), (size.height/maxHeight));
//     webFrame.setZoomFactor(zoomFactor);
// }


