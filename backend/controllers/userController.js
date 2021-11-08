import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'
import asyncHandler from 'express-async-handler'

const registerUser=async(req,res)=>{
    const {name,email,password}=req.body
    const userExists=await User.findOne({email})
    if(userExists){
        res.send("USER EXISTS")
    }else{
        const user = User.create({
            name,
            email,
            password,
        })
        res.send("USER CREATED")
    }
}

const authenUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body
    console.log(email,password)
    const user=await User.findOne({email})
    if(user&&await user.matchPassword(password)){
        console.log("AUTHENTICATED")
        res.json({
            id:user._id,
            name:user.name,
            token:generateToken(user._id)

        })
    }else{
        res.status(401)
        throw new Error("Invalid email or password")
    }
})
const userProfile=async(req,res)=>{
    const user=await User.findById(req.user._id)
    if(user){
        res.json({
            id:user._id,
            name:user.name,
            email: user.email,
        })
    }else{
        res.status(404)
        throw new Error("USER NOT FOUND")
    }
}

export {registerUser,authenUser,userProfile}