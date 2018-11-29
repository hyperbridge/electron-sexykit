const path = require('path');
const { BrowserWindow } = require('electron');
const url = require('url');

class TrayWindow {
    constructor(){

        this.window = new BrowserWindow({
            show: false,
            height: 500,
            width: 500,
            frame: false,
            resizable: false
        });
    

        this.window.loadURL(url.format({
            pathname: path.join(__dirname, './index.html'),
            protocol: 'file',
            slashes: true
        }));
    

        this.window.on('blur', () => {
            this.window.hide(); 
        });
    } 
}

module.exports = TrayWindow;