import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from '../components/CartItem'
import { removeFromCart } from '../global/actioncreators/cartItemsActions'
// import { bindActionCreators } from 'redux'
// import { actionCreators } from '../global/actioncreators/index'

const Cart = () => {
    const dispatch= useDispatch()
    const {list}=useSelector(state=>state.cartItems)

    const handleDeleteItem=(id)=>{
        dispatch(removeFromCart(id))
    }
    useEffect(() => {
        {list.map((x)=>{total+=x})}

    }, [list])
    let total=0
    return (
        <div className="cart">
            <h3>Shopping Cart</h3>
            {list.length>0?
            <>
                <span>{`${list.length} product${list.length>1?'s':''} in your cart`}</span>
                <div className="cart-item-container">
                    {list.map((item)=>(
                    <CartItem item={item} key={item.id} deleteItem={handleDeleteItem}/>
                    ))}
                    <button>Check Out</button>
                </div>
                <h4>TOTAL</h4>
                <span>
                ${list.reduce((itemTotal,item)=>itemTotal+item.price,0)}
            </span>
            </>:
            "EMPTY CART"
            }
            

        </div>
    )
}

export default Cart
