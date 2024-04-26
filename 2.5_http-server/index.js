const express = require("express")
const app = express()
const port = 3000;


function calculateSum(n)
{
    let a = 0;
    for(let i = 1 ; i <= n ; i++)
    {
        a = a + i;
    }
    return a;
}


app.get("/calculate" , function (req,res){
    let n = req.query.n
    const ans = calculateSum(n)
    res.send("ans is : " + ans.toString())
    // send some string not a number
})

app.listen(port,() => {
    console.log(`calculating `);
})