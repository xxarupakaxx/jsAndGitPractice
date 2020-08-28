function closure(initVal) {
    let count = initVal;

    let innerFunc = function() {
        return ++count;
    };

return innerFunc;
}

let myClosure = closure(100);
let myClosure2 = closure(200);
console.log(myClosure());
console.log(myClosure());   
console.log(myClosure2());
console.log(myClosure2());
