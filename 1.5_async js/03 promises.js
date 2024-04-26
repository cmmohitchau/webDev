const fs = require("fs");
const path = "c:/Users/Mohit/Desktop/web dev/05 async js (week 1.5)/a.txt";

// function MohitReadfile()
// {
//     let p = new Promise(function(resolve , reject)
//     {
//         fs.readFile(path,"utf-8",function (err,data){
//             if(err) {
//                 reject(err);
//             return;
//         }else {
//             resolve(data); // after doing high level job call resolve
//         }
//         });
//     })
//     return p;
// }

// function log(data)
// {
//     console.log(data);
// }

// let a = MohitReadfile();
// a.then(log);  // .then gets called whenever the async fn resolves

function sayHello()
{
    return new Promise(function (resolve,reject)
    {
        resolve(setTimeout(function (){
            console.log("Hello");
        },3*1000))
    });
}

let p = sayHello();

p.then(()=>{
    setTimeout(()=>{
        console.log(" world");

    },3*1000)

})