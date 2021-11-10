import { ADD_TO_CART,REMOVE_FROM_CART,SAVE_SHIPPING_ADDRESS,CHANGE_QTY } from "../constants/cartItemsConstants"
import axios from "axios"

export const addToCart=(id,qty)=>async(dispatch,getState)=>{
    const{data}=await axios.get(`/api/products/${id}`)
    dispatch({
        type:ADD_TO_CART,
        payload:{
            _id:data._id,
            name:data.name,
            images:data.images,
            colors:data.colors||"",
            price:data.price,
            qty:qty
        }
    })
    localStorage.setItem('cartList',JSON.stringify(getState().cartItems.list))
}
export const changeQty=(id,qty)=>(dispatch,getState)=>{
    dispatch({
        type:CHANGE_QTY,
        payload:{_id:id,qty}
    })
    localStorage.setItem('cartList',JSON.stringify(getState().cartItems.list))
}
export const removeFromCart=(id)=>async(dispatch,getState)=>{
    dispatch({
        type:REMOVE_FROM_CART,
        payload:id
    })
    localStorage.setItem('cartList',JSON.stringify(getState().cartItems.list))
}

export const saveShippingAddress=(address)=>(dispatch)=>{
    dispatch({
        type: SAVE_SHIPPING_ADDRESS,
        payload:address
    })
    localStorage.setItem('shippingAddress',JSON.stringify(address))
}