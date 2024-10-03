const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = "1234567"
const app = express()
app.use(express.json())


const users = [
    {
        username : "Mohit@gmail.com",
        password : "12345",
        name : "Mohit chaudhary"
    }, {
        username : "Ram@gmail.com",
        password : "1122334455",
        name : "Ramanujan chaudhary"
    } , {
        username : "shyam@gmail.com",
        password : "54321",
        name : "Shyam chaudhary"
    }
];

function userExist (username , password)
{
    let userExists = false;
    for(let i = 0 ; i < users.length ; i++)
    {
        if(users[i].username.toLowerCase() == username.toLowerCase() && users[i].password === password)
        {
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin" , function (req,res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username , password))
    {
        return res.status(403).json({
            msg : "User doesn't exist in our memory db"
        });
    }

    var token = jwt.sign({ username : username } , jwtPassword);

    return res.json({
        token
    });
});

app.get("/users" , function (req,res) {
    try {
        const token = req.headers.authorization;
        const decode = jwt.verify(token , jwtPassword);
        const username = decode.username;

        res.status(200).json({
            user :  users.filter(function (value){
                return value.username !== username
            })
        })
    }
    catch (err) {
        return res.status(403).json({
            msg  :"invalid token"
        });
    }
});

app.listen(3000 , () => {
    console.log("app is listening at 3000");
})