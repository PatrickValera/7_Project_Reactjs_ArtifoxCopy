import express from 'express'
import connectDB from './config/dbconfig.js'
import dotenv from 'dotenv'

dotenv.config()
connectDB()
const app=express();

app.get('/api',(req,res)=>{
    res.send("api")
})


app.listen(5001,console.log(`SERVER IS RUNNING ON PORT 5000`.green.underline))