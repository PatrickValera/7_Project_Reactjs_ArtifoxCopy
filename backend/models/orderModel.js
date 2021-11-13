import mongoose from 'mongoose'

const orderSchema=mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'User'},
    orderItems:[{
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        }
    }],
    shippingAddress:{
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      company: { type: String, required: false },
      phoneNum: { type: String, required: false },
      email: { type: String, required: true },
      emailUpdate: { type: Boolean, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      country: { type: String, required: true },
    //   postalCode: { type: String, required: true },
    },
    PaymentDetail:{
        prices:{
            total:Number,
            shipping:Number,
            taxes:Number
        },
        method:String
    },
    // isDelivered:{
    //     type:Boolean,
    //     required:true,
    //     default:false
    // }

})
const Order=mongoose.model('Order',orderSchema)

export default Order