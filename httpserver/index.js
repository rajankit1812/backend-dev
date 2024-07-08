const http = require("http")

const server = http.createServer((req,res) => {
    // console.log(req.url);
    if(req.url == "/"){
        res.end('Hello from the other side, Ankit');
    }else if(req.url == "/about"){
        res.end("Hello from the about side")
    }else if(req.url == "/contact"){
        res.end("This is from contact side")
    }else if(req.url == "/userapi"){
        fs.readFile(`${__dirname}/userAPI/userApi.json`,"utf-8", (err,data)=>{
            console.log(data);
        })
        res.end("This is from contact side")
    }
    else{
        res.writeHead(404, {"Content-type" : "text/html"})
        res.end("<h1> 404 error pages, page does not exist </h1")
    }
    
});

server.listen(8000,"127.0.0.1", () => {
    console.log("listening to the port number 8000")
});