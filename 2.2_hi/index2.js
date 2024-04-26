const express = require("express")
const app = express()
const fs = require("fs");
const path = require("path")
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
const h = "c:/Users/Mohit/Desktop/web dev/hi/a.txt";
function cb()
{
    return new Promise( (rej , res) => {
        fs.writeFile(h,data, () => {
            console.log("file has been written");
        })
    })
}
app.post("/" , (req,res) => {
    const message = req.body.title;
    async function main()
    {
        let me = await cb();
        
    }
    
})

app.listen(port , () => {
    console.log(`app is listening on port ${port}`);
})