const express = require("express")
const app = express()
const zod = require('zod')
// const schema = zod.array(zod.number())
app.use(express.json())

// {
// email : string => email
// password : atleast 8 numbers
// country : "IN" , "US"
// }

const schema = zod.object({
    email : zod.string(),
    password : zod.string(),
    country : zod.literal("IN").or(z.literal("US"))
})


app.post("/health-checkup" , function(req,res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success) {
        res.status(411).json({
            msg : "input is invalid"
        });
    }
    else {
        res.send({
            msg : "logged in"
        })
    }
})  
// global catch

app.use( (err,req,res,next) => {
    res.status(500).send("something badd is happen");
})

app.listen(3000 , ()=> {
    console.log("app is listening at 3000");
})
