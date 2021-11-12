export const orderStatusReducer=(state={success:false},action)=>{
    switch(action.type){
        case "SEND_ORDER_REQUEST":{
            return{
                success:false
            }
        }
        case "SEND_ORDER_SUCCESS":{
            return{
                success:true,
                orderId:action.payload
            }
        }
        case "SEND_ORDER_FAIL":{
            return{
                success:false,
                error:action.payload
            }
        }
        default: return state
    }
}

export const paymentDetailReducer=(state={prices:{total:0,shipping:0,taxes:0},method:""},action)=>{
    switch(action.type){
        case "SAVE_ORDER_PRICES":{
            return{
                ...state,prices:action.payload
            }
        }
        case "SAVE_PAYMENT_METHOD":{
            return{
                ...state,method:action.payload
            }
        }
        default: return state
    }
}