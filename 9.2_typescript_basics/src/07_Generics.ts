// function doSomething <T> (key : T) {
//     return key;
// }

// const output = <string> doSomething("help");
// const numOutput = <number> doSomething(2323);

// console.log(output);
// console.log(numOutput);

// wap to get first element of array whether it is num or string

function getFirstEl <T> (arr : T []) {
    return arr[0]
}

const output = <string> getFirstEl(["mohit" , "chaudhary"]);
const outputnum = getFirstEl([1,2,3,4,5])

console.log(output.toUpperCase());
console.log(outputnum);


