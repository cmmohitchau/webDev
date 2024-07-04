const { dir } = require("console");
const express = require("express")
const app = express()
const fs = require("fs")



app.get('/file' , (req,res) => {
    const directorypath = "c:/Users/Mohit/Desktop/web dev/2.5_http-server/file";
    fs.readdir(directorypath, (err,files) => {
        if(err) {
            res.status(500).json({err : err.message});
            return;
        }
        else {
        
            res.status(200).json({files})
        }
    })
 
})

app.get('/file/:filename' , (req,res) => {
    const name = req.params.filename;

    const directorypath = "c:/Users/Mohit/Desktop/web dev/2.5_http-server/file";

    fs.readdir(directorypath , (err,files) => {
        if(err) {
            res.status(500).json({err : err.message});
            return;
        }

        if(!files.includes(name)) {
            res.status(404).json({error : "File not found" });
            return;
        }

        fs.readFile(directorypath + "/" + name , "utf-8" , (err,data) => {
            if(err) {
                console.error(err);
                res.status(500).json({error : "Error reading File"});
                return;
            }  else
            {
                res.status(200).json({ data });

            }
        });

    });
      
});

app.listen(3000 , () => {
})
    console.log("Server is listening at port 3000");