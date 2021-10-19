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
    const {email,password}=req.body
    // console.log(email,password)
    const user=await User.findOne({email})
    if(user&&await user.matchPassword(password)){
        res.json({
            id:user._id,
            name:user.name
        })
    }else{
        res.send("WRONG EMAIL OR PASSWORD")
    }
}

export {registerUser,authenUser}