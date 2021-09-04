export const addToCart = (item) =>{
    return (dispatch)=>{
        dispatch({
            type:"ADD_TO_CART",
            payload:item
        })
    }
}
export const removeFromCart = (item) =>{
    return (dispatch)=>{
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:item
        })
    }
}
export const editQty = (item) =>{
    return(dispatch)=>{
        dispatch({
            type:"EDIT_QTY",
            payload:item
        })
    }
}
export const addToStore = (item) =>{
    return (dispatch)=>{
        dispatch({
            type:"ADD_TO_STORE",
            payload:item
        })
    }
}
export const removeFromStore = (item) =>{
    return (dispatch)=>{
        dispatch({
            type:"REMOVE_FROM_STORE",
            payload:item
        })
    }
}