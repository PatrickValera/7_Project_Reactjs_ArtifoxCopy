import { GET_APRODUCT_REQUEST,GET_APRODUCT_SUCCESS } from "../constants/storeitemConstants";

const itemDetailsReducer=(state={loading:true,product:[]},action)=>{
    switch(action.type){
        case GET_APRODUCT_REQUEST:
            return{
                loading:true,
                product:{}
            }
        case GET_APRODUCT_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
        default:
            return state
    }
}
export default itemDetailsReducer