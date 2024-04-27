const express = require("express")
const db = require("mongoose")
const app = express()
app.use(express.json())


db.connect("mongodb+srv://cmmohitchau:12345@cluster0.lfgiwby.mongodb.net/userapp");

const Users = db.model('Users' , {
    username : String,
    email : String,
    password : String
});

const Schema = new db.Schema({
    email : String,
    name : String,
    marks : String,
    age : String,
})


const Student = db.model("Student" , Schema)


app.post("/signUp" , async function (req,res) 
{

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    try {
        let existingUser = await Users.findOne({email : email});
        if(existingUser) {
            res.status(403).json({msg : "user already exist"})
        } else {
            let user = new Users ({
                username : username,
                email : email,
                password : password
            });
            await user.save();
            res.status(200).json({msg : "user created successfully"})
        }

    } catch (error)
    {
        console.error("Error" , error);
        res.status(500).json({msg : "Server error"});
    }
});



app.post("/student_data" , async function (req,res) {

    const email1 = req.body.email;
    console.log(email1);

    try {

        let userExist = await Users.findOne({email : email1});
        console.log("userExist" , userExist);



        if(!userExist) {
            res.status(403).json({msg : "user needs to sign up first"});
        } else {

            let dataExist = await Student.findOne({email : email1});
            console.log(dataExist);

            if(dataExist) {
                res.status(500).json({msg : "data already exist"});
            }
            else {
                let students = new Student ({
                    email : email1,
                    name : "mohit",
                    marks : "94",
                    age : "22"
                })
                    await students.save();
                    res.status(200).send("student's data created successfully");
            }
        }
    
    } catch (err){
        console.error("Error :" , err);
        res.status(404).json({msg : "server error"})
    }

    
});



app.listen(3000 , () => {
    console.log("app is listening at port 3000");
})