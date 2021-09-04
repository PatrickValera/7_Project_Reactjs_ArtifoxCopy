const cartItemsReducer = (state=[],action) =>{
    switch(action.type){
        case "ADD_TO_CART":{
            if(state.find(item=>item.id===action.payload.id)){
                return state.map(item=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)
            }
            return [...state,{...action.payload,qty:1}]
        }
        case "REMOVE_FROM_CART":{
            return state
        }
        case "EDIT_QTY":{
            return state.map(item=>item.id===action.payload.id? action.payload:item)
        }
        default:
            return state
    }
}
export default cartItemsReducer