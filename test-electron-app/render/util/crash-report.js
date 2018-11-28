const electron = require('electron');

function init () {
    electron.crashReporter.start({
        companyName: 'ATIF',
        productName: 'BUTTER',
        submitURL: 'test.com'
    });
}

module.exports = {
    init
  }