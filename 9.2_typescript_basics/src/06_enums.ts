const express = require("express")
const app = express()


enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keypressed : Direction) {
    if (keypressed === Direction.Up) {
        console.log("Up is pressed");
        
    }
}

doSomething(Direction.Up)

enum ResposneStatus {
    Success = 200,
    Notfound = 404,

}

app.get("/" , (req : any ,res : any) => {
    const username = req.body.username;

    if(!username) {
        res.status(ResposneStatus.Notfound).json({
            msg : "Not found"
        })
    }

    console.log("success");
    
})