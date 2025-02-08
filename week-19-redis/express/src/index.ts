
import express from "express";
import { createClient } from "redis";

const app = express();
const client = createClient();

app.use(express.json());

app.post("/submit" , async (req , res) => {
    const {problemId , userId , code , language} = req.body;
    try {
        await client.lPush("submissions" , JSON.stringify({problemId,userId,code,language}));
    res.json({
        message : "Submission received"
    })
    } catch(e) {
        res.json({
            message : "Submission failed"
        })
    }
})


async function startServer() {
    try {
        await client.connect();
        console.log("Connected to the redis");
        
    }
    catch (e) {
        console.log(e);

        
    }
}

startServer();

app.listen(3000);