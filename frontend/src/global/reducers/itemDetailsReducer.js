import { GET_APRODUCT_REQUEST,GET_APRODUCT_SUCCESS } from "../constants/storeitemConstants";

const itemDetailsReducer=(state={loading:true,item:{}},action)=>{
    switch(action.type){
        case GET_APRODUCT_REQUEST:
            return{
                loading:true,
                item:{}
            }
        case GET_APRODUCT_SUCCESS:
            return{
                loading:false,
                item:action.payload
            }
        default:
            return state
    }
}
export default itemDetailsReducer