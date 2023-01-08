// node js provide us to some inbuilt core module which is very important us 
// its provide us some important feature which very useful and make our work seamlessly
// here i am cover os module which hep to operating system related information 

const os = require("os");

const space = os.freemem();//it provide free memory in sysytem
console.log(space)

const time = os.uptime(); //its proivde time 
console.log(time)

console.log(os.arch())//for architecture
console.log(os.cpus())//cpu information
console.log(os.endianness())//for enlineness
console.log(os.homedir())//tells us aboue home directory
console.log(os.hostname())//hostNmae

console.log(os.loadavg())//load average
console.log(os.machine())//machine information

console.log(os.networkInterfaces())//network information

console.log(os.version())//os version
console.log(os.userInfo())//userinformation
console.log(os.type())//os type
console.log(os.totalmem())//total memory

console.log(os.release())