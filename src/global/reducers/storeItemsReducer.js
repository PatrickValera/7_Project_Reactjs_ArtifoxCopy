const storeItems=[{
    id:1,
    name:"tables",
    price:100
},{
    id:2,
    name:"drawer",
    price:100
},{
    id:3,
    name:"desk",
    price:99
},{
    id:4,
    name:"shelf",
    price:50
},{
    id:5,
    name:"chair",
    price:150
},{
    id:6,
    name:"notebook",
    price:20
},{
    id:7,
    name:"pencil cup",
    price:40
}]

const storeItemsReducer = (state=storeItems,action) =>{
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