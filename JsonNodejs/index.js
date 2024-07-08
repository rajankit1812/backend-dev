const fs = require("fs");
const bioData = {
    name : "ankit",
    age : 22,
    channel : "Ankit Raj"
}

// console.log(bioData.channel);

//to convert the object into json
// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// //again convert back to object
// const objData = JSON.parse(jsonData);
// console.log(objData);

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json" , jsonData, (err) => {
    console.log('done');
})

fs.readFile('json1.json','utf-8',(err,data)=>{
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
})
