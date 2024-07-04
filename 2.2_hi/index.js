const express = require("express")
const app = express()
const port = 3000
const path = require('path')

app.get('/login',function (req,res) {
  res.sendFile(path.join(__dirname, '/login.html'));
})

app.get('/sum', (req,res) => {
  
})

app.listen(port, ()=> {
  console.log(`app is listening on port ${port}`);
})