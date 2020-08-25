"use strict";

function func1(a,b){

}

let f = function(){
    console.log("hoge");
}

f();

let f2 = function (){
    console.log("fuga");
} 

function func2(f) {
    f();
}
func2(f);
func2(f2);