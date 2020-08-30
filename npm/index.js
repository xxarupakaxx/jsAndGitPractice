let http = require("http");
let fs = require("fs");
let ejs = require("ejs");

let temp =fs.readFileSync("./temp.ejs","utf-8");
let server = http.createServer(function(req,res){
    let data = ejs.render(temp,{
        title: "EJSのテスト",
        contents1 :"<p>ここはエスケープされない</p>",
        contents2 :"<p>ここはエスケープされる</p>",
        arr: ["イチゴ","メロン","バナナ"]
        
        
    });
    res.writeHead(200,{
        "Content-Type":"text/html"
    });
    res.write(data);
    res.end();
});

server.listen(1234,"127.0.0.1");
console.log("server start")