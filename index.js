const fs = require("fs");

// //creating a new file
// fs.writeFileSync('read.txt',"welcome to my channel");
// //overwrite
// fs.writeFileSync('read.txt',"Hello I am Ankit")

// fs.appendFileSync('read.txt'," I am a very good boy")



const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);

org_data = buf_data.toString();
console.log(org_data);