import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema=mongoose.Schema({
    name:{
        type:String,
        isRequired:true,
    },
    email:{
        type:String,
        isRequired:true,
    },
    password:{
        type:String,
        isRequired:true
    }
})
userSchema.pre('save',function(next){
    let user = this
    if(!user.isModified('password'))return next()
    bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
})
userSchema.methods.matchPassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

const User=mongoose.model('User',userSchema)

export default User