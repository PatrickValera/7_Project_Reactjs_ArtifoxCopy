import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc        Fetch all products
// @route       GET /api/products
// @access      Public

router.get(
    ['/','/new','/desk','/shelf','/side','/lift','/table','/bench'],
    asyncHandler(async(req,res)=>{
        const collection=req.url.split('/')[1]
        const products =await Product.find(collection?{tags:[collection]}:{})
        res.json(products)
}))


router.get(
    '/:id',
    asyncHandler(async(req,res)=>{
        const product =await Product.findById(req.params.id)
        if(product){
            res.status(200)
            res.json(product)
        } else {
            res.status(401)
            throw new Error('Product not found')
        }
}))

export default router