// import mongoose from  'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/dbconfig.js'
import Product from './models/productModel.js'
import products from './data/products.js'
// import colors from 'colors'

dotenv.config()

connectDB() 

const importData=async()=>{
    try{
        await Product.deleteMany()
        await Product.insertMany(products)
        console.log(`DATA IMPORTED`.green.bold);
        process.exit()
    } catch(error){
        console.log(`ERROR: ${error}`);
        process.exit(1)
    }
}
importData()