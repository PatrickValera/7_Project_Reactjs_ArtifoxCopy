import { ADD_TO_CART,REMOVE_FROM_CART } from "../constants/cartItemsConstants"
import axios from "axios"

export const addToCart=(id,qty)=>async(dispatch,getState)=>{
    const{data}=await axios.get(`api/products/${id}`)
    dispatch({
        type:ADD_TO_CART,
        payload:{...data,qty}
    })
}