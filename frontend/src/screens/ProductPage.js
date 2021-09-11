import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import {bindActionCreators} from "redux"
// import { actionCreators } from '../global/actioncreators/index'
import Carousel from '../components/Carousel'
import {Grid} from '@material-ui/core'
// import { addToCart } from '../global/actioncreators/cartItemsActions'
import { getItem } from '../global/actioncreators/storeItemActions'

const ProductPage = ({match}) => {
    const {item}=useSelector(state=>state.itemDetails)
    console.log(`item: ${item}`);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        // console.log(item)
        dispatch(getItem(match.params.id))
    },[dispatch,match])
    const handleClick=()=>{

    }
    return (
        <>
        {item?(<Grid xs={12} container className="product-page">
        <Grid item  xs={12} md={4}className="product-info">
            <div className="sticky-container">
                    <h3 className="name">{item.name}</h3>
                    <span className="price">${item.price}</span>
                    <button className="checkout-button" onClick={handleClick}>ADD TO CART</button>
            </div>
            
        </Grid>
        <Grid item xs={12} md={8}className="gallery">
            <Carousel item={item}/>
        </Grid>

    </Grid>):"LOADING"}
    </>
    
    )
}

export default ProductPage
