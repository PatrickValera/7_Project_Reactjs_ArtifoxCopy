const cartItemsReducer = (state={list:[]},action) =>{
    switch(action.type){
        case "ADD_TO_CART":{
            // if(state.list.includes(action.payload)){
            //     return{
            //         list:[]
            //     }
            // }
            return {
                list:[...state.list,action.payload]
            }
        }
        case "REMOVE_FROM_CART":{
            return {
                list:state.list.filter(item=>item._id!==action.payload)
            }
        }
        default:
            return state
    }
}
export default cartItemsReducer
