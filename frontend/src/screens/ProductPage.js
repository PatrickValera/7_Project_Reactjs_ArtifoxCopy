import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import {bindActionCreators} from "redux"
// import { actionCreators } from '../global/actioncreators/index'
import Carousel from '../components/Carousel'
import {Grid} from '@material-ui/core'
// import { addToCart } from '../global/actioncreators/cartItemsActions'
import { getItem } from '../global/actioncreators/storeItemActions'

const ProductPage = ({match}) => {
    const dispatch = useDispatch();
    const {product,loading}=useSelector(state=>state.itemDetails)
    console.log(product)
    // console.log(loading)
    useEffect(()=>{
        // console.log(match.params.id)
        dispatch(getItem(match.params.id))
    },[dispatch,match])
    const handleClick=()=>{

    }
    return (
        <>
      
        {!loading?(<Grid xs={12} container className="product-page">
        <Grid item  xs={12} md={4}className="product-info">
            <div className="sticky-container">
                    <h3 className="name">{product.name}</h3>
                    <span className="price">${product.price}</span>
                    <button className="checkout-button" onClick={handleClick}>ADD TO CART</button>
            </div>
            
        </Grid>
        <Grid item xs={12} md={8}className="gallery">
            <Carousel item={product}/>
        </Grid>

    </Grid>):"LOADING"}
    </>
    
    )
}

export default ProductPage
