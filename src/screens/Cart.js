import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {cartItems}=useSelector(state=>state)
    console.log(cartItems)
    return (
        <div>
            {cartItems.map(item=>(<h2>{item.name}</h2>))}
        </div>
    )
}

export default Cart
