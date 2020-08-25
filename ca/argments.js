"use stict";

function func1(a,b,c) {
    for(let p of arguments){
        console.log(p);
    }
}

func1('a','b','c',"d");

func1('a');
func1();

function func2(){
    console.log(arguments.length,arguments[0]);
}

func2('a','b','c');
