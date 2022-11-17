const os=require('os');

// platform

console.log(os.platform())

// architecture

console.log(os.arch())

// cpu

//console.log(os.cpus())

// for free memory and total memory

console.log(os.freemem());
console.log(os.totalmem())

// for host name

console.log(os.hostname())

// for home direcotry

console.log(os.homedir())

// Netork interface

console.log(os.networkInterfaces())