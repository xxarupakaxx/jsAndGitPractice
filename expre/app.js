let http = require("http");
var ejs = require("ejs");
let express = require("express");
var app = express();

app.engine("ejs",ejs.renderFile);

app.get("/" ,function(req,res){
    res.render("temp.ejs",{
        contents:"<p>hoge</p>"
    });
});

let server = app.listen(1234,"127.0.0.1",function(){
    console.log("server");
})