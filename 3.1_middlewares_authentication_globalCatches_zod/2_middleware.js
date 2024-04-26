const express = require("express")
const app = express()

function userMiddleware(req,res,next) {
    username = req.headers.username;
    password = req.headers.password;
    console.log("in user middleware");
    if(username != "mohit" || password != "pass")
    {
        res.status(403).json({
            msg : "user is not valid"});
    }
    else {
        next();
    }
}

let numberofRequests = 0;

function numberofRequest(req,res,next)
{
    numberofRequests++;
    console.log(numberofRequests);
    next();
}

function kidneyMiddleware(req,res,next)
{
    console.log("in kidney middleware");
    kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId != 2)
    {
        res.status(403).json({
            msg : "Incorrect inputs"
        });
    }
    else {
        next();
    }
};

app.use(numberofRequest); // This middleware is used first and to all the router

app.get('/health-checkup' , userMiddleware , kidneyMiddleware , (req,res) => {
    res.send("Your kidney is healthy");
});

app.get("/logged-in" , userMiddleware , (req,res) => {
    res.status(200).json({msg : "logged in successfully"})
    console.log("logged in successfully");
})

app.listen(3000, () => {
    console.log("app is listening");
})