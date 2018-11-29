const path = require('path');
const { BrowserWindow, Tray } = require('electron');

const Positioner = require('electron-positioner');

class TrayIcon {
    constructor(trayWindow) {
        let icon = path.join(__dirname, '../res/icons/pikachu.ico');
        this.trayIcon = new Tray(icon);
        this.trayIcon.setToolTip('Pika Pika');
        let bounds = this.trayIcon.getBounds()

        this.trayIcon.on('click', (e, bounds) => {
            if (trayWindow.isVisible() ) {
                trayWindow.hide();
            } else {
                let positioner = new Positioner(trayWindow);
                // positioner.move('trayCenter', bounds);
                positioner.move('trayBottomRight', bounds);
                trayWindow.show();
            }
        });
    }
}

module.exports = TrayIcon;