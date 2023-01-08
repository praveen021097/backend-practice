const {name1,name2}=require("./file2");
const showName = require("./file1");

console.log(showName(name1,name2))

// module allow us to write encapsulated code we can use minified version of our code
// you define code in seprate place and use anywhere by module 
// first thing we write the code after that we use some predefined keywords "module.exports" it make the code send 
// for using the code of which you want to use so you can use require keyword to use which file where to use code