console.log("The main process is working");
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
const prompt = require('electron-prompt');
let win;

function createPopup(){
    prompt({
        title: 'Test Prompt',
        label: "What's your name?",
        value: 'John Doe',
        inputAttrs: {
            type: 'text'
        },
        type: 'input'
    })
    .then((r) => {
        if(r === null) {
            console.log('user cancelled');
        } else {
            console.log('Your name is ', r);
        }
    })
    .catch(console.error);
}

app.on('ready', () => {

     win = new BrowserWindow({
       
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, './render/index.html'),            
        protocol: 'file',
        slashes: true
    }));

    for (var i = 0; i < 100; i++){
        win.setProgressBar(i); 
    }
    
    
});




