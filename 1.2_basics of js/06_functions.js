// a set of statements that performs a task or calculates a value, 
// but for a procedure to qualify as a function, it should take some input
//  and return an output where there is some obvious relationship between the input and the output


// waf that sums two numbers

// function findSum(a , b)
// {
//     return a + b;
// }

// // console.log(f(9,8));
// let c = findSum(3,4);
// console.log(c);


// callback function

// Any function that is passed as an argument to another function so that 
// it can be executed in that other function is called as a callback function.

function sum(a,b,fnToCall)
{

    let result = a + b;
    fnToCall(result);
    
}

function displayResult(data)
{
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data)
{
    console.log("The sum's result is : " + data);
}

let ans = sum(4,5,displayResultPassive );