const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://mohitprasad004:12345@cluster0.bmw7ccl.mongodb.net/userauthentication")

const User = mongoose.model('Users' , {name : String , email : String , password : String});

app.post('/signUp' , async function (req , res) {
    const name = req.body.name
    const username = req.body.email
    const password = req.body.password

    const UserExists = await User.findOne({email : username});
    
    if(UserExists)
    {
        res.status(400).send("User already exists");
    }

    const user = new User({
        name : name,
        email : username,
        password : password
    });
    user.save();
    res.json({
        "msg" : "User created successfully"
    })
})

app.listen(3000 , () => {
    console.log("app is listening at port 3000");
})