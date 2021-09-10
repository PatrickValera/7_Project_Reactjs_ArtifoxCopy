import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {bindActionCreators} from "redux"
import { actionCreators } from '../global/actioncreators/index'
import Carousel from '../components/Carousel'

const ProductPage = ({match}) => {
    const dispatch = useDispatch();
    // const item = useSelector(state=>state.xxx.storeItems.find(item=>item._id===Number(match.params.id)))
    const item = useSelector(state=>state.xxx.storeItems.find(item=>item._id===(match.params.id)))
    const {addToCart} = bindActionCreators(actionCreators,dispatch)

    const handleClick=()=>{
        // addToCart(item)
    }
    return (
    <div className="product-page">
        <div className="product-info">
            <h3 className="name">{item.name}</h3>
            <span className="price">${item.price}</span>
            <button className="checkout-button" onClick={handleClick}>ADD TO CART</button>
        </div>
        <div className="gallery">
            <Carousel item={item}/>
        </div>

    </div>
    )
}

export default ProductPage
