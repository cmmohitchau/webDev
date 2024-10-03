const fs = require("fs");
const path = "c:/Users/Mohit/Desktop/webDev/1.5_async js/a.txt";

function MohitReadfile()
{
    let p = new Promise(function(resolve , reject)
    {
        fs.readFile(path,"utf-8",function (err,data){
            if(err) {
                reject(err);
            return;
        }else {
            resolve(data); // after doing high level job call resolve
        }
        });
    })
    return p;
}

function log(data)
{
    console.log(data);
}

let a = MohitReadfile();
a.then(log)  // .then gets called whenever the async fn resolves

// function sayHello()
// {
//     return new Promise(function (resolve,reject)
//     {
//         resolve(setTimeout(function (){
//             console.log("Hello");
//         },3*1000))
//     });
// }

// let p = sayHello();

// p.then(()=>{
//     setTimeout(()=>{
//         console.log(" world");

//     },3*1000)

// })

function jk(res , rej) {
    return new Promise( (res,rej) => res(setTimeout(res,3000)))
}

jk()

setTimeout( () => {
    console.log("hello");
},3000)