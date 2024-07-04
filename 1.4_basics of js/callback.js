// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished


// function square(n)
// {
//     return n*n;
// }

// function sumofSquares(a,b)
// {
//     let val1 = square(a);
//     let val2 = square(b);

//     return val1 + val2;
// }

// console.log(sumofSquares(2,3));


function square(n)
{
    return n*n;
}

function cube(n)
{
    return n * n * n;
}

function sumOfSomething(a,b,fn)
{
    let val1 = fn(a);
    let val2 = fn(b);

    return val1 + val2;
}


console.log(
    sumOfSomething(2,3,square)
);

console.log(    sumOfSomething(2,3,cube));


// Anonomous function => which does not have any name and passed as the whole body

let ans = sumOfSomething(9,3,function (n){
    return n * n;
})

console.log(ans);

function shyam(fn)
{
    return fn;
}

let ans1 = shyam(function (hari)
{
console.log("shyam says : " , hari);
})

ans1("narayana")