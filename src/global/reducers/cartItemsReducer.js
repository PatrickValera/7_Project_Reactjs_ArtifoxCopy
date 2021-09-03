const cartItemsReducer = (state=[{name:"cart item",price:999}],action) =>{
    switch(action.type){
        case "ADD_TO_CART":{
            return [...state,action.payload]
        }
        case "REMOVE_FROM_CART":{
            return state
        }
        default:
            return state
    }
}
export default cartItemsReducer