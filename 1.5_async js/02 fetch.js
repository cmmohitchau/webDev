const fs = require("fs");
// filesystem

const path = "c:/Users/Mohit/Desktop/web dev/05 async js (week 1.5)/a.txt";

fs.readFile(path, "utf-8" , function(err,data){
    console.log(data);
})

console.log("hi there");