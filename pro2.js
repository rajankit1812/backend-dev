const fs = require("fs")

// fs.mkdir('newproject',(err)=>{
//     console.log("folder created");
// })

// fs.writeFile('newproject/bio.txt',"Ankit is avery good boy",(err)=>{
//     console.log("Hello I am created");
// })

// fs.appendFile('newproject/bio.txt'," Please like my photo",(err)=>{
//     console.log("appended");
// })

fs.readFile('newproject/bio.txt','utf-8',(err,data)=>{
    console.log(data);
})