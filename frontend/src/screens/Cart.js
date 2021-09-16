import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from '../components/CartItem'
// import { bindActionCreators } from 'redux'
// import { actionCreators } from '../global/actioncreators/index'

const Cart = () => {
    // const list=[]
    const s=useSelector(state=>state.cartItems)
    const list = s.list
    useEffect(() => {
    }, [])

    return (
        <>
        <div className="cart">
            <h3>Shopping Cart</h3>
            <span>{`${list.length} product${list.length>1?'s':''} in your cart`}</span>
        
        {list.length>0?<div className="cart-item-container">
            {list?<>
                { list.map((item)=>(<CartItem item={item} key={item.id} />))}
            </>:"EMPTY"}
            <button>Check Out</button>
        </div>
        :
        "EMPTY CART"}
        </div>
        </>

    )
}

export default Cart
