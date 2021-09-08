import React from 'react'
import { useState,useEffect } from 'react'

const CartItem = ({item,edit}) => {
    const [quantity,setQuantity]=useState(item.qty)

    const handleChange=(e)=>{
        // console.log(e.target.value);
        // console.log('dslfj');
        setQuantity(e.target.value)
        // edit(e.target.value)
    }
    useEffect(() => {
        if(item.qty!==quantity)edit({...item,qty:quantity})
        // eslint-disable-next-line
    }, [quantity])
    return (
        <div className="cart-item">
            <div className="thumbnail">
                <figure className="thumbnail-container">
                    {console.log(item.images)}
                    <img className="product-thumbnail" src={item.images.main} alt="" />
                </figure>
            </div>
            <div className="detail">
                <h5>{item.name}</h5>
                <span>{item.price}</span>
            </div>
            <div className="qty-input">
                <input type="number" className="qty-input" value={quantity} onChange={(e)=>handleChange(e)}/>
                <span>x</span>
            </div>
        </div>
    )
}

export default CartItem
