
import express from "express";
import {z} from "zod";


export const app = express();

app.use(express.json());

const sumInput = z.object({
    a : z.number(),
    b : z.number()
})

app.post("/sum" , (req , res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    res.json({
        answer
    })
});