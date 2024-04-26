// arrow function

let sum1 = (a,b) => {
    return a + b;
}

console.log(sum1(3,2));

// Filter
let students = [
    {id : 101 , name : "Mohit" , sport : "cricket" , food : "Paneer"},
    {id : 102 , name : "Rohit" , sport : "Football" , food : "Biryani"},
    {id : 101 , name : "Ram" , sport : "cricket" , food : "chhole bahture"},
    {id : 101 , name : "hari" , sport : "Basketball" , food : "kheer"},
]

let news = students.filter( (student) => {
    return student.sport !== "cricket";
})

console.log(news);

// Map
let name = news.map( (student) => {
    return student.name;
})

// console.log(name);
// Reduced
 
// The reduce() function in JavaScript is used to reduce the array to a single value. 
// It iterates over each element of the array, applying a function to an accumulator and the current element. The accumulator is the value returned by the previous iteration, and the current
// element is the current value being processed in the array.
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce( (acc,curr) => {
    return (acc * 2) + curr;
},1)

// console.log(sum);