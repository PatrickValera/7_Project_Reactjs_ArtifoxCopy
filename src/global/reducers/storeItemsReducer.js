const storeItemsReducer = (state=["storeitem1","storeitem2"],action) =>{
    switch(action.type){
        case "ADD_TO_STORE":{
            return state
        }
        case "REMOVE_FROM_STORE":{
            return state
        }
        default:
            return state
    }
}
export default storeItemsReducer