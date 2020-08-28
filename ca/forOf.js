let x = "Global";
let y = "Global";

function outerFunc(){
    "use strict";
    let x = "Local Outer";

    
function innerFunc(){
    "use strict";
    let x = "Local Inner";

    console.log(x);

    console.log(y);

    //console.log(z);

}

console.log(x);
innerFunc();
}

console.log(x);
outerFunc();