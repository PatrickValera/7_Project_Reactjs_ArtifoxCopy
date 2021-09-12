import mongoose from 'mongoose'

const detailsSchema=mongoose.Schema({
    description:String,
    features:Array,
    specification:{
        dimension:String,
        weight:String,
        materials:Array
    }
},{
    _id:false
})
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    tag:Array,
    images:{
        main:String,
        sub:String
    },
    featured:{
        type:Boolean,
        required:true,
        default:false
    },
    details:detailsSchema,
},{
    timestamps:true
})

const Product=mongoose.model('Product',productSchema)

export default Product