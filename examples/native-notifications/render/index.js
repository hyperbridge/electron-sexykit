console.log('Index.js');

/**
 * Trying this method from https://electronjs.org/docs/tutorial/notifications
 * Doesn't show notifications on my system
 */
let notif = new Notification('Pokemon', {
    body: 'Pikachu has evolved into Raichu!'
});

/**
 * Trying this from https://gist.github.com/dcposch/e9f1479317abc2024c44270fe85f3f4b#file-electron-notification-js 
 * Based on article https://blog.dcpos.ch/how-to-make-your-electron-app-sexy
 * Doesn't show notifications on my system
 */
var notif = new window.Notification('Pokemon', {
    body: 'Pikachu has evolved into Raichu!'
});
  

