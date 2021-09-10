import {GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS} from '../constants/storeitemConstants'
import axios from 'axios'
export const getStoreItems=()=>async(dispatch)=>{
    try{
        dispatch({
            type:GET_PRODUCTS_REQUEST,
            payload:[]}
        )
        const {data}=await axios.get('/api/products')
        dispatch({
            type:GET_PRODUCTS_SUCCESS,
            payload:data
        })
    } catch(error){
        console.log(error);
    }
}