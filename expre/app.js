//let http = require("http");
let ejs = require("ejs");
let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.engine("ejs",ejs.renderFile);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/" ,function(req,res){
    console.log("---GET---");
    console.log("nameは" + req.query.name);
    console.log("ageは" + req.query.age);
    res.render("temp.ejs",{});
});

app.post("/",function(req,res){
    console.log("--post---");
    console.log("nameは" +req.body.name);
    console.log("ageは" +req.body.age);
    res.render("temp.ejs",{});
    
});
let server = app.listen(1234,"127.0.0.1",function(){
    console.log("server");
})