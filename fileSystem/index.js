
import * as fs from "fs/promises"

// console.log(fs);

//creating Directory - path shoulg be there

// try{
//     await fs.mkdir("C:\\Users\\acer\\Documents\\GitHub\\backend-practice\\fileSystem\\pk");
//     console.log("directory is created")
// }catch(err){
//     console.log(err)
// }
// // when parent diretory is not present a the last one level

// try{
//     await fs.mkdir("C:\\Users\\acer\\Documents\\GitHub\\backend-practice\\fileSystem\\test//kallu",{recursive:true});
//     console.log("directory is created")
// }catch(err){
//     console.log(err)
// }
// read file 
// try{
//     const files=await fs.readFile("C:\\Users\\acer\\Documents\\GitHub\\backend-practice\\fileSystem\\pk\\plain.txt","utf-8");
//     for(const file of files){
//         console.log(file)
//     }
//     console.log("directory is created")
// }catch(err){
//     console.log(err)
// }

// you can also write code for 
// remove dir
// fs.rmdir,fs.writeFile,fs.readfile,fs.appendFile,fs.copyFile