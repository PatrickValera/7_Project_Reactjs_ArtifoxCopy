import express from 'express'
const app=express();

app.get('/api',(req,res)=>{
    res.send("api")
})


app.listen(5000,console.log('SERVER IS RUNNING'))