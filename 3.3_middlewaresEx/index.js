const express = require("express")
const app = express()

// wap for a rider who can ride if only he is above 16

function ageMiddleware(req,res,next)
{
    let age = req.query.age;
    if(age > 16)
    {
        next();
    }
    else {
        res.status(411).json({msg : "your age is not eligible for this ride"})
    }
}

app.use(ageMiddleware)
app.get("/user" , function(req,res) {
    res.status(200).json({msg : "You are eligible for the ride "})

})

app.listen(3000 , () => {
    console.log("app is listening at port 3000");
})