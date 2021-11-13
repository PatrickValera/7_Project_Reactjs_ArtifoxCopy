import Order from '../models/orderModel.js'

export const createOrder=async(req,res)=>{
    // console.log(req.body.shippingAddress)
    // console.log('hello')
    const {_id}=Order.create({...req.body,userId:req.user._id});
    res.send("_id")
    
}