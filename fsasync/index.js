const fs = require("fs")

// fs.writeFile('read.txt',"My name is Ankit",
//     (err) => {
//         console.log("files are created");
//         console.log(err);
//     }
// )   //have to use callback function


// fs.appendFile('read.txt'," Hello everyone",(err)=>{
//     console.log("task completed");
//     console.log(err);
// })

// fs.readFile('read.txt',"utf-8",(err,data)=>{
//     console.log(data);
// })
//we have to pass two arguments in readfile asynchronous


//synchronously reading data
// const data = fs.readFileSync("read.txt","utf-8");
// console.log(data);
// console.log("Ankit is everywhere");

//asynchronously reading the file
// fs.readFile("read.txt","utf-8",(err,data)=>{
//     console.log(data);
// });
// console.log("Ankit is everywhere");