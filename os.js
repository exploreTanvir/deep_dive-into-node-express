const OS=require("os")

//hardware
console.log(OS.arch())
console.log(OS.cpus())
console.log(OS.freemem())
console.log(OS.networkInterfaces())


//software
console.log(OS.hostname())
console.log(OS.homedir())
console.log(OS.type())
console.log(OS.userInfo())