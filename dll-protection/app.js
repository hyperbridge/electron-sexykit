console.log('App.js is running');
const memoryjs = require('memoryjs');

const processes = memoryjs.getProcesses();
console.log(processes);