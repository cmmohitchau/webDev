const fs = require("fs");
// filesystem

const path = "c:/Users/Mohit/Desktop/web dev/05 async js (week 1.5)/a.txt";

fs.readFile(path, "utf-8" , function(err,data){
    console.log(data);
})

console.log("hi there");

async function main() {
    const response = await fetch("https://sum-server.100xdevs.com/todos");
    const data = await response.json()
    const todo = data.todos;
    console.log(todo.length);
    todo.map( (t) => console.log(t))
    todo.map( (t) => console.log(t.id))
    
}

main()