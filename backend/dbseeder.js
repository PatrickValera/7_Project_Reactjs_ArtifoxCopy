// import mongoose from  'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/dbconfig.js'
import Product from './models/productModel.js'
import products from './data/products.js'
import User from './models/userModel.js'
import users from './data/users.js'
import Order from './models/orderModel.js'
import orders from './data/orders.js'
// import colors from 'colors'

dotenv.config()

connectDB() 

const importData=async()=>{
    try{
        await Product.deleteMany()
        await User.deleteMany()
        await Order.deleteMany()
        await User.insertMany(users)
        await Product.insertMany(products)
        await Order.insertMany(orders)
        console.log(`DATA IMPORTED`.green.bold);
        process.exit()
    } catch(error){
        console.log(`ERROR: ${error}`);
        process.exit(1)
    }
}
importData()