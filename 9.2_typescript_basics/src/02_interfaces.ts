// create a function isLegal that returns true or false if a user is above 18. It takes a user as an input

interface User {
    name : string;
    age : number;
    email? : string;
}

function isIllegal(user : User) : boolean {
    if(user.age < 18) {
        return true;
    } else {
        return false;
    }
}

const a = isIllegal({
    name : "Mohit",
    age : 19,
    email : "cmmohitchau@gmail.com"
})

console.log(a);
