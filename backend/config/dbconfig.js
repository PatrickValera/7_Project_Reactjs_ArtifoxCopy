import mongoose from "mongoose"
import colors from 'colors'

const connectDB = async() => {
    try{
        // console.log(process.env.MONGO_URI);
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${connect.connection.host}`.blue.bold);
    } catch(error){
        console.log(`Error: ${error.message}`.red.bold);
        process.exit(1)
    }
}

export default connectDB