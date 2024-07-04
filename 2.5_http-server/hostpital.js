const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const port = process.env.PORT || 3000

const Users = [{
    name : "hari",
    kidneys : [{
        healthy : false
    }]
}
];

app.get('/' , (req,res) => {


    // query param is used modtly in get method

  
        
            const patientKidneys = Users[0].kidneys
            const numberofKidneys = patientKidneys.length;
            let numberofHealthyKidney = 0;
            for(let i = 0 ; i < numberofKidneys ; i++)
            {
                if(patientKidneys[i].healthy) 
                {
                    numberofHealthyKidney = numberofHealthyKidney + 1;
                }

            }
            let numberofUnHealthyKidney = numberofKidneys - numberofHealthyKidney;
            res.json({
                numberofKidneys,
                numberofHealthyKidney,
                numberofUnHealthyKidney
            })
            

})

app.post('/insert',(req,res) => {
 const isHealthy = req.body.isHealthy;
 Users[0].kidneys.push({
    healthy : isHealthy
 })

 res.json({
    msg : "done"
 })

})

app.put('/' , (req,res) => {
for(let i = 0 ; i < Users[0].kidneys.length ; i++)
{
    Users[0].kidneys[i].healthy = true;
}
res.json({})

})

function isTheredamaged()
{
    let atleastOneUnhealthyKidneys = false

    for(let i = 0 ; i < Users[0].kidneys[i] ; i++)
    {
        if(Users[0].kidneys[i].healthy === false) {
            atleastOneUnhealthyKidneys = true
        }
    }

    return atleastOneUnhealthyKidneys;


}

app.delete('/' , (req,res) => {
    let atleastOneUnhealthyKidneys = isTheredamaged();
   
    if(!atleastOneUnhealthyKidneys) {
        res.status(411).json({
            error:411,
            message : "You don't have any unhealthy kidney"
        })
    }
    const newKidneys = []
for(let i = 0 ; i < Users[0].kidneys.length ; i++)
{
    if(!Users[0].kidneys[i].healthy ) {
        newKidneys.push({
            healthy : true
        })
    }
}
Users[0].kidneys = newKidneys;
res.json({msg : "done"})
})

app.listen(port , () => {
    console.log(`port is listening on port ${port}`);
})