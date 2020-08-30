let http = require("http");
let url = require("url");
let fs = require("fs");

let server = http.createServer(function(req,res){
    let urlPart = url.parse(req.url);
    let path = __dirname +"/" +urlPart.pathname;//1
    let stream =fs.createReadStream(path);//2

    stream.on("data",function(data){
        res.write(data);
    });
    stream.on("end",function(data){
        res.end();
    });

});

server.listen(1234,"127.0.0.1");
console.log("server start");