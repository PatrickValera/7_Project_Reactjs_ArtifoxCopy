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
const qualitySchema=mongoose.Schema({
    image:String,
    qualities:Array
},{
    _id:false
})
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    colors:Array,
    tags:Array,
    price:{
        type:Number,
        required:true,
        default:0
    },

    images:{
        main:String,
        sub:String
    },
    video:String,
    featured:{
        type:Boolean,
        required:true,
        default:false
    },
    options:{
        type:Array,
        
    },
    details:detailsSchema,
    quality:qualitySchema
},{
    timestamps:true
})

const Product=mongoose.model('Product',productSchema)

export default Product