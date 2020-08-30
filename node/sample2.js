let http = require("http");
let fs = require("fs");

let url =require("url");//1
let qs = require("querystring");//2

let indexPage =fs.readFileSync("./index.html","utf-8");
let server = http.createServer(function(req,res){
    if(req.method == "GET"){//3
        let urlPart =url.parse(req.url,true);//4
        console.log("--GET Request---");
        console.log("ageは" + urlPart.query.age);
        console.log("nameは" + urlPart.query.name);//5
        
    }
    else {
        let body ="";
        req.on("data",function(data){//6
            body += data;//7
        });
        req.method("end",function(){//8
            let params = qs.parse(body);//9
            console.log("--POST Request");
            console.log("nameは" + params.name);//10
            console.log("ageは" + params.age);

        });
    }

    res.writeHead(200,{
        "Content-Type":"text/html"
    });
    res.write(indexPage);
    res.end();
});

server.listen(1234,"127.0.0.1");
console.log("server start");