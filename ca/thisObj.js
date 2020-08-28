let obj = {
    val:"hoge",

    checkThis:function(){
        console.log(this);
        this.val ="fuga";
    }

};
obj.checkThis();
console.log(obj.val);


let arr = [0,9,8,7,6,5];

arr.copyWithin(2,4);
console.log(arr);
arr.copyWithin(2,4,3);
console.log(arr);
arr.copyWithin(2,4);
console.log(arr);


let obj1 ={};
let s = Symbol();

obj[s] = "hoge";

console.log(obj[s]);

let arre =[1,2,3];
let itr = arre.values();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

let obj3 ={};
obj[Symbol.iterator] = function() {
    let itr2 = {};
    let count = 1;
    itr.next = function (){
    let itrResult = (count <=3) ? {value: count++,done:false}
    : {value: undefined,done:true};
    return itrResult;
    };
    return itr;
};

let iterator = obj[Symbol.iterator]();
let itratorResult;
while(1){
    itratorResult = iterator.next();
    if(itratorResult.done){
        break;
    }
    console.log(itratorResult.value);
}


let arr3 = ["hoge","fuga","boo"];
for(let val of arr3.entries()){
    console.log(val);
}

function func() {
    return "hoge";
}
console.log(func);
console.log(func());

let func2 = function (){return "boo";}
console.log(func2);
console.log(func2());
let funcStr = "function func() {return \"fuga\"}";
console.log(funcStr);



console.log("-------------------------------");

let human = {
    _name :"",
    get name() {
        return this._name;
    },
    set name(val){
        this._name = val;
    }
}

human.name="uti";
console.log(human.name);

console.log("-----------------------------------------");

class Human{
    constructor(name = "",age =0,sex =""){
        this.name = name;
        this.age = age;
        this.sex =sex =="M" ?"男性" : "女性";
    }
    showInfo(){
        console.log('私は'　+this.name +","+this.age+"歳の"+this.sex+'です');
    }
    getName(){
        console.log("名前は" +this.name +　"ｄす");

    }
}
let igarashi = new Human("igrashi",35,"M");
igarashi.getName();
igarashi.showInfo();


