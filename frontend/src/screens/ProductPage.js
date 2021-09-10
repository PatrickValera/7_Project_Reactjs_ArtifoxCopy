import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {bindActionCreators} from "redux"
import { actionCreators } from '../global/actioncreators/index'
import Carousel from '../components/Carousel'
import {Grid} from '@material-ui/core'

const ProductPage = ({match}) => {
    const [item,setItem]=useState()
    const dispatch = useDispatch();
    const fromState = useSelector(state=>state.xxx.storeItems.find(item=>item._id===(match.params.id)))
    const {addToCart} = bindActionCreators(actionCreators,dispatch)

    const handleClick=()=>{
        // addToCart(item)
    }
    useEffect(()=>{
        console.log(item)
        setItem(fromState)
    },[fromState])
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
