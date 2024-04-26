
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