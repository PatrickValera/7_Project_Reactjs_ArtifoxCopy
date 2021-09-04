import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {bindActionCreators} from "redux"
import { actionCreators } from '../global/actioncreators/index'


const ProductPage = ({match}) => {
    const dispatch=useDispatch();
    const item=useSelector(state=>state.storeItems.find(item=>item.id===Number(match.params.id)))
const {addToCart}=bindActionCreators(actionCreators,dispatch)

    const handleClick=()=>{
        console.log("ADDING TO CART")
        addToCart(item)
    }
    return (
    <div>
        Product Page {match.params.id}
    <div>
    <h3>{item.name}</h3>
    <span>{item.price}</span>
    <button onClick={handleClick}>ADD TO CART</button>
</div>
        </div>
    )
}

export default ProductPage
