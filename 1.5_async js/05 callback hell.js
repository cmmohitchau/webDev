// Callback Hell is essentially nested callbacks stacked below one another
//  forming a pyramid structure. Every callback depends/waits for the previous callback, 
// thereby making a pyramid structure
//  that affects the readability and maintainability of the code. 

setTimeout(function ()
{
    console.log("inside firstone");

    setTimeout(function () {
        console.log("inside second one");
    },2000)
},1000)