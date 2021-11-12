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