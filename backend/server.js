import express from 'express'
import connectDB from './config/dbconfig.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import path from 'path'
import {notFound,errorHandler} from './middleware/errorMiddleWare.js'

dotenv.config()
connectDB()
const app=express();

app.use(express.json())
app.use('/api/products',productRoutes)
app.use('/api/user',userRoutes)

const __dirname=path.resolve()

if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'/frontend/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}else{
    app.get('/api',(req,res)=>{
    res.send("api")
})
}
//ERROR HANDLERS
app.use(errorHandler)
app.use(notFound)
app.listen(process.env.PORT,console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`.green.underline))