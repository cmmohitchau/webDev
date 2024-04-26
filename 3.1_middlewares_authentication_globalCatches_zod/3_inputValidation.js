const express = require("express")
const app = express()

app.use(express.json())

app.post("/health-checkup" , function(req,res) {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys")
})  
// global catch

app.use( (err,req,res,next) => {
    res.status(500).send("something badd is happen");
})

app.listen(3000 , ()=> {
    console.log("app is listening at 3000");
})
