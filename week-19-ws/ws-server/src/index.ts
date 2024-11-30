import express from "express"
import {WebSocket , WebSocketServer} from "ws";
const app = express()

app.get("/" , (req , res) => {
    res.send("Hello world");
})

const httpServer = app.listen(8080)

const wss = new WebSocketServer({server : httpServer});

wss.on('connection' , function connection(ws) {
    ws.on('error' , () => console.error())

    ws.on('message' , function message(data , isBinary) {
       ws.for
        
    })

    ws.send("hello world")
})