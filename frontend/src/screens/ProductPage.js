import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import {bindActionCreators} from "redux"
// import { actionCreators } from '../global/actioncreators/index'
import Carousel from '../components/Carousel'
import {Grid} from '@material-ui/core'
// import { addToCart } from '../global/actioncreators/cartItemsActions'
import { getItem } from '../global/actioncreators/storeItemActions'
import {Box, Typography} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import Accordions from '../components/Accordions'
import { addToCart } from '../global/actioncreators/cartItemsActions'

const ProductPage = ({match}) => {
    const dispatch = useDispatch();
    const {product,loading}=useSelector(state=>state.itemDetails)
    useEffect(()=>{
        dispatch(getItem(match.params.id))
    },[dispatch,match])
    
    const clickHandler=(id)=>{
        dispatch(addToCart(id))
    }
    
    return (
        <>
        {!loading?(<Grid xs={12} container className="product-page">
        <Grid item  xs={12} md={5} lg={4} xl={3}className="product-info">
            <div className="sticky-container">
                    <h3 className="name">{`${product.name}${product.tag.length>0?` - ${product.tag[0]}`:""}`}</h3>
                    <Box component="fieldset" mb={3} borderColor="transparent" className="rating">
                        <Rating name="read-only" value={4} readOnly size='small' />
                        <span>43 reviews</span>
                    </Box>
                    <span className="price">{product.price.toLocaleString()}</span>
                    <button className="checkout-button" onClick={()=>clickHandler(product._id)}>Add to cart</button>
                    <Typography variant="subtitle2" className="affirm-link">Starting at $118/mo with <b>affirm</b>. <a href="/">Learn more</a></Typography>
                    <Typography variant="subtitle2" className="shipping-text"><em>Now Shipping</em></Typography>
                    {product.details&&<Accordions details={product.details}/>}
            </div>
        </Grid>
        <Grid item xs={12} md={7} lg={8} xl={9} className="gallery">
            <Carousel item={product}/>
        </Grid>

    </Grid>):"LOADING"}
    </>
    
    )
}

export default ProductPage
