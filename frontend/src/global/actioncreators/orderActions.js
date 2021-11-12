import {SEND_ORDER_REQUEST,SEND_ORDER_SUCCESS,SEND_ORDER_FAIL, SAVE_PRICES, SAVE_PAYMENT_METHOD} from '../constants/orderConstants'
export const sendOrder=(order)=async (dispatch)=>{
    try{
        dispatch({
            type:SEND_ORDER_REQUEST
        })
    //api post request
    //
        dispatch({
            type:SEND_ORDER_SUCCESS,
            payload:1234
        })
    }catch(err){
        dispatch({
            type:SEND_ORDER_FAIL,
            payload:{error:"ORDER ERROR"}
        })
    }
}
export const savePrices=(prices)=(dispatch)=>{
    dispatch({
        type:SAVE_PRICES,
        payload:prices
    })
}
export const savePaymentMethod=(method)=(dispatch)=>{
    dispatch({
        type:SAVE_PAYMENT_METHOD,
        payload:method
    })
}