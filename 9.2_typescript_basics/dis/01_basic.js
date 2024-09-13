"use strict";
// number
const x = 3;
console.log(x);
// passing string
function greeting(firstName) {
    console.log("Hello ", firstName);
}
greeting("Mohit");
// return number
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));
// retrun boolean
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const legal = isLegal(19);
console.log(legal);
// passing function
function printAfter1S(fn) {
    setTimeout(fn, 1000);
}
printAfter1S(() => {
    console.log("hello world");
    return 2;
});
