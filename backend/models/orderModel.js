import mongoose from 'mongoose'

const orderSchema=mongoose.Schema({
    orderItems:[{
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        }
    }],
    shippingAddress:{
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod:{
        type:String,
        required:true
    },
    isDelivered:{
        type:Boolean,
        required:true,
        default:false
    },
    Prices:{
        total:{type:Number,required:true},
        shipping:{type:Number,required:true},
        tax:{type:Number,required:true},
    }

})
const Order=mongoose.model('Order',orderSchema)

export default Order