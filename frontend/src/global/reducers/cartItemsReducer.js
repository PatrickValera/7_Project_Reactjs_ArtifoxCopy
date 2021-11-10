const cartItemsReducer = (state={list:[]},action) =>{
    switch(action.type){
        case "ADD_TO_CART":{
            const existingItem=state.list.find(item=>item._id===action.payload._id)
            if(existingItem){
                const newQty=existingItem.qty+action.payload.qty
                const newItem={...existingItem,qty:newQty}
                state.list.splice(state.list.indexOf(existingItem),1,newItem)
                return{
                    list:[...state.list]
                }
            }
            else return {
                list:[...state.list,action.payload]
            }
        }
        case "REMOVE_FROM_CART":{
            return {
                list:state.list.filter(item=>item._id!==action.payload)
            }
        }
        case "CHANGE_QTY":{
            const existingItem=state.list.find(item=>item._id===action.payload._id)
            if(existingItem){
                const newItem={...existingItem,qty:action.payload.qty}
                state.list.splice(state.list.indexOf(existingItem),1,newItem)
                return{
                    list:[...state.list]
                }
            }
            else return {
                list:[...state.list,action.payload]
            }
        }
        default:
            return state
    }
}
const shippingAddressReducer=(state={},action)=>{
    if(action.type==="SAVE_SHIPPING_ADDRESS")return action.payload
    else return state
}
export {cartItemsReducer,shippingAddressReducer}
