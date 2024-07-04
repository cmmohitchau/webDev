const user1 = {
    name : "mohit" , 
    email : "cmmohitchau@gmail.com",
    username : "cmmohitchau",
    welcome : function (hometown , country)
    {
        return this.name + " hometown is :" + hometown + " in " + country;
    }
}

const user2 = {
    name : "Rohit" , 
    email : "Rohit@gmail.com",
    username : "Rohit123",
}
// uses one object's method to another object
// first param is this and another params are parameter of function
console.log(user1.welcome.call(user2 , "mumbai" , "Nepal"))

console.log(user1.welcome.apply(user2 , ["mumbai" , "Nepal"]))

let result = user1.welcome.bind(user2 , "mumbai" , "Nepal")

console.log(result);

console.log(result());