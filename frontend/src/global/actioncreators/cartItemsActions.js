import { ADD_TO_CART,REMOVE_FROM_CART } from "../constants/cartItemsConstants"
import axios from "axios"

export const addToCart=(id)=>async(dispatch,getState)=>{
    const{data}=await axios.get(`/api/products/${id}`)
    dispatch({
        type:ADD_TO_CART,
        payload:data
    })
    localStorage.setItem('cartList',JSON.stringify(getState().cartItems.list))

}
export const removeFromCart=(id)=>async(dispatch,getState)=>{
    const{data}=await axios.get(`/api/products/${id}`)
    dispatch({
        type:REMOVE_FROM_CART,
        payload:id
    })
}