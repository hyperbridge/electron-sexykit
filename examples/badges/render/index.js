console.log('Index.js');
const { ipcRenderer } = window.require('electron');

ipcRenderer.sendSync('update-badge', 1); // For Windows
