import User from '../models/userModel.js'

const registerUser=async(req,res)=>{
    const {name,email,password}=req.body
    const userExists=await User.findOne({email})
    if(userExists){
        // console.log(userExists)
        res.send("USER EXISTS")
    }else{
        const user = User.create({
            name,
            email,
            password
        })
        res.send("USER CREATED")
    }
}

const authenUser=async(req,res)=>{
    res.send("authenticate user")
}

export {registerUser,authenUser}