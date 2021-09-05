const storeItems=[{
    id:1,
    name:"tables",
    price:100,
    images:{
        main:'/images/table.jpeg',
        sub:'/images/tablesub.jpeg'
    }
},{
    id:2,
    name:"stand",
    price:100,
    images:{
        main:'/images/stand.jpeg',
        sub:'/images/standsub.jpeg'
    }
},{
    id:3,
    name:"small stand",
    price:99,
    images:{
        main:'/images/smallstand.jpeg',
        sub:'/images/smallstandsub.jpeg'
    }
},{
    id:4,
    name:"mini shelf",
    price:50,
    images:{
        main:'/images/minishelf.jpeg',
        sub:'/images/minishelfsub.jpeg'
    }
},{
    id:5,
    name:"hook",
    price:50,
    images:{
        main:'/images/hook.jpeg',
        sub:'/images/hooksub.jpeg'
    }
},{
    id:6,
    name:"notebook",
    price:20,
    images:{
        main:'/images/table'.jpeg,
        sub:'/images/tablesub.jpeg'
    }
},{
    id:7,
    name:"pencil cup",
    price:40,
    images:{
        main:'/images/table.jpeg',
        sub:'/images/tablesub.jpeg'
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