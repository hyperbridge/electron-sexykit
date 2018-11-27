console.log('Index.js');

const {webFrame} = require('electron');
const electron = require('electron');
const remote = require('electron');
const path = require('path')
const { Tray, Menu } = require('electron').remote;

let tray = new Tray(path.join('__dirname', '../res/icons/pikachu.png'));

const trayTemplate = [
    {
        label: 'Tim',
        click: () => {
            alert('Hi Tim');
        }
    },
    {
        label: 'Eric',
        enabled: false,
        click: () => {
            alert('konnichiwa');
        }
    },
    {
        label: 'Joe',
        click: () => {
            alert('Hi Joe');
        }
    }
]

let trayMenu = Menu.buildFromTemplate(trayTemplate);
tray.setContextMenu(trayMenu);


