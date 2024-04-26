// "I will finish later!"

// Functions running in parallel with other functions are called asynchronous

// A good example is JavaScript setTimeout()

function sumtill(n)
{
    let a = 0;
    for(let i = 1; i <= n ; i++)
    {
        a += i;
    }
    return a;
}

function sum()
{
   console.log(sumtill(100)); 
}

setTimeout(sum,2 * 1000);
console.log("hello world");