import React from 'react'
import { useState } from 'react'

const CartItem = ({item,deleteItem}) => {
    const [quantity,setQuantity]=useState(item.qty)
    
    const handleChange=(e)=>{
        setQuantity(e.target.value)
    }


    return (
        <div className="cart-item">
            <div className="thumbnail">
                <figure className="thumbnail-container">
                    <img className="product-thumbnail" src={item.images.main} alt="" />
                </figure>
            </div>
            <div className="detail">
                <h5>{item.name}</h5>
                <span>{item.price}</span>
            </div>
            <div className="qty-input">
                <input type="number" className="qty-input" value={quantity} onChange={(e)=>handleChange(e)}/>
                <i className="fas fa-times" onClick={()=>deleteItem(item._id)}></i>
            </div>
        </div>
    )
}

export default CartItem
