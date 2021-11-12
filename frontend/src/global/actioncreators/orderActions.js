import {SEND_ORDER_REQUEST,SEND_ORDER_SUCCESS,SEND_ORDER_FAIL} from '../constants/orderConstants'
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