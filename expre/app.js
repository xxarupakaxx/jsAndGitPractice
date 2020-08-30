let express = require("express");
let ejs = require("ejs");
let app =express();
//let cookiesParser = require("cookie-parser");
let cookieParser = require("cookie-parser");
let js = require("js");
app.engine("ejs",ejs.renderFile);
app.use(cookieParser());

app.get("/",function(req,res){
    let cnt = req.cookies.cnt == undefined ? 0: req.cookies.cnt;
    cnt++;
    res.cookie("cnt",cnt,{maxAge:5000});
    res.render("temp.js",{
        cnt:cnt
    });


});

let server = app.listen(1234,"127.0.0.1",function() {
    console.log("サーバーが起動しました");
});