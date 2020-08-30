let http = require("http");

let server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("helloworld");
    res.end();
});

server.listen(1234,"127.0.0.1");
console.log("サーヴァ");