const http = require("http");


const server = http.createServer((req,res)=>{

    if(req.url!="/student"){
     console.log(req.url)
    }

    // res.statusCode=202;
    // res.statusMessage="good";
    // res.setHeader("Content-Type","text/plain")
   res.writeHead(202,{"Content-Type":"text/plain"},"Good")
    res.end("student url")   
})
const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log(PORT)
    console.log("server listening port 5000")
})