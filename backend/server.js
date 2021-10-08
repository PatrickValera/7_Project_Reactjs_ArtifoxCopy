import express from 'express'
import connectDB from './config/dbconfig.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import path from 'path'
dotenv.config()
connectDB()
const app=express();


app.use('/api/products',productRoutes)

const __dirname=path.resolve()
if(process.env.NODE_ENV==='development'){
    app.use(express.static(path.join(__dirname,'/frontend/build')))

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}else{
    app.get('/api',(req,res)=>{
    res.send("api")
})
}
app.listen(5001,console.log(`SERVER IS RUNNING ON PORT 5000`.green.underline))