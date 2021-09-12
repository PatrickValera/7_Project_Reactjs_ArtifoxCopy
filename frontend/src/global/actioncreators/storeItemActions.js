import {GET_APRODUCT_REQUEST, GET_APRODUCT_SUCCESS, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS} from '../constants/storeitemConstants'
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

export const getItem=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:GET_APRODUCT_REQUEST,
            payload:{}
        })
        const {data}=await axios.get(`/api/products/${id}`)
        dispatch({
            type:GET_APRODUCT_SUCCESS,
            payload:data
        })
    }catch(error){
        console.log("PRODUCT ACTION ERROR")
    
    }
}