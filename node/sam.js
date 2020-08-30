let http = require("http");
let fs = require("fs");
const { deflateRaw } = require("zlib");

let indexPage = fs.readFileSync("./index.html","utf-8");
let nextPage = fs.readFileSync("./next.html","utf-8");

let server = http.createServer(function(req,res){
    let target ="";
    switch(req.url){
        case "/":
            case "/index":
        target =indexPage;
        break;
    case "/next":
        target = nextPage;
        break;
    default:
        res.writeHead(404,{
            "Content-Type":"text/plain"
        })
        res.end("not found");
        return;
    };

    res.writeHead(200,{
        "Content-Type":"text/html"
    });
    res.write(target);
    res.end();

});
server.listen(1234,"127.0.0.1");
console.log("server start")