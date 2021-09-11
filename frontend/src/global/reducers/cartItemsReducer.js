const cartItemsReducer = (state={list:[{
                id:2,
                name:"stand",
                price:100,
                images:{
                    main:'/images/stand.jpeg',
                    sub:'/images/standsub.jpeg'
                },
                qty:1
}]},action) =>{
    switch(action.type){
        case "ADD_TO_CART":{
            return {
                list:[...state.list,action.payload]
            }
        }
        case "REMOVE_FROM_CART":{
            return {
                list:state.list.filter(item=>item._id!==action.payload_id)
            }
        }
        default:
            return state
    }
}
export default cartItemsReducer