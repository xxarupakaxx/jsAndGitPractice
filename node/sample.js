let http = require("http");
let fs = require("fs");
let server = http.createServer(function(req,res){
    fs.readFile("./index.html","utf-8",function(err,data){
        res.writeHead(200,{"Content-Tyoe":"text/html"});
        res.write(data);
        res.end();
    });
});

server.listen(1234,"127.0.0.1");
console.log("サーバーが起動しました")