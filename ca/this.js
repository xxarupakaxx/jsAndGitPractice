function checkThis() {
    console.log(this);

    this.val = 'test';
}

checkThis();

console.log(val);

