// number
const x: number = 3;
console.log(x);

// passing string
function greeting(firstName: string) {
    console.log("Hello ", firstName);
    
}

greeting("Mohit")

// return number
function sum(a : number , b: number): number {
    return a + b;
}

console.log(sum(3,4));

// retrun boolean
function isLegal(age:number) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

const legal = isLegal(19);
console.log(legal);

// passing function
function printAfter1S(fn : () => number) {
    setTimeout(fn , 1000);
}

printAfter1S( () => {
    console.log("hello world");
    return 2;
})


