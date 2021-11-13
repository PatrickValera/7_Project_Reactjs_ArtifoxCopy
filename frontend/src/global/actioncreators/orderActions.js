import {SEND_ORDER_REQUEST,SEND_ORDER_SUCCESS,SEND_ORDER_FAIL, SAVE_PRICES, SAVE_PAYMENT_METHOD} from '../constants/orderConstants'
import axios from 'axios'
export const sendOrder=(order)=>async (dispatch,getState)=>{
    try{
        dispatch({
            type:SEND_ORDER_REQUEST,
            order
        })
        const {userLogin: { userInfo }} = getState()
        const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    }
    //api post request
    const {data}=await axios.post('/api/order',order,config)
        dispatch({
            type:SEND_ORDER_SUCCESS,
            payload:data
        })
        dispatch({
            type:"RESET_ORDER"
        })
    }catch(error){
        dispatch({
            type:SEND_ORDER_FAIL,
            payload:error.response && error.response.data.message ?error.response.data.message: error.message
        })
    }
}
export const savePrices=(prices)=>(dispatch)=>{
    dispatch({
        type:SAVE_PRICES,
        payload:prices
    })
}
export const savePaymentMethod=(method)=>(dispatch)=>{
    dispatch({
        type:SAVE_PAYMENT_METHOD,
        payload:method
    })
}