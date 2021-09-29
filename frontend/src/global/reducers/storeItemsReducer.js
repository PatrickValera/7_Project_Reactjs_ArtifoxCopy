import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../constants/storeitemConstants"

const storeItemsReducer = (state=[],action) =>{
    switch(action.type){
        case GET_PRODUCTS_REQUEST:{
            return{
                loading:true,
                storeItems:[]
            }
        }
        case GET_PRODUCTS_SUCCESS:{
            return{
                loading:false,
                storeItems:action.payload
            }
        }
        case "ADD_TO_STORE":{
            return state
        }
        case "REMOVE_FROM_STORE":{
            return state
        }
        default:{
            return{
                loading:true,
                storeItems:[]
            }
        }
    }
}
export default storeItemsReducer