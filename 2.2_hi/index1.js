const express = require("express")
const app= express()
const bodyParser = require("body-parser");
// This middleware is used to parse the body of an HTTP request, which can contain JSON data or other types of data.
//  It allows you to access this data in your route handlers and use it to create or modify resources
let port = process.env.PORT || 3000
// $env:PORT = 3007 to change port
app.use(bodyParser.json());

app.post('/backend-api' , (req,res)=> {
    // const message = req.body.message;
    const message = req.query.message;

    console.log(message);
    // some machine learning model
    res.json({
        output : "2 + 2 = 4"
    })
})

app.listen(port , () => {
    console.log(`app is listening at port ${port}`);
})

// query param  
// process.env.PORT
