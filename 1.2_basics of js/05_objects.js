// what is an object 
// In JavaScript, an object is a standalone entity, with properties and type.


// wap to print first name whose gender is male


const allUsers = [{
    firstname : "Mohit",
    gender : "male"
}, {
    firstname : "hari",
    gender : "male" 
}, {
    firstname : "shreya",
    gender : "female"
}
]

for(let i = 0 ; i < allUsers.length ; i++)
{
    if(allUsers[i]["gender"] == "male")
    {
        console.log(allUsers[i]["firstname"]);  
        // you can also write allUsers[i].firstname
    }
}