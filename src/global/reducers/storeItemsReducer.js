const storeItems=[{
    id:1,
    name:"tables",
    price:100,
    images:{
        main:'/table',
        sub:'/tablesub'
    }
},{
    id:2,
    name:"stand",
    price:100,
    images:{
        main:'/stand',
        sub:'/standsub'
    }
},{
    id:3,
    name:"small stand",
    price:99,
    images:{
        main:'/smallstand',
        sub:'/smallstandsub'
    }
},{
    id:4,
    name:"mini shelf",
    price:50,
    images:{
        main:'/minishelf',
        sub:'/minishelfsub'
    }
},{
    id:5,
    name:"hook",
    price:50,
    images:{
        main:'/hook',
        sub:'/hooksub'
    }
},{
    id:6,
    name:"notebook",
    price:20,
    images:{
        main:'/table',
        sub:'/tablesub'
    }
},{
    id:7,
    name:"pencil cup",
    price:40,
    images:{
        main:'/table',
        sub:'/tablesub'
    }
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