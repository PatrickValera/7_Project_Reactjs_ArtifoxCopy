import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from '../components/CartItem'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../global/actioncreators/index'

const Cart = () => {
    const [total,setTotal]=useState(0)
    const dispatch=useDispatch()
    const {cartItems}=useSelector(state=>state)
    const {editQty}=bindActionCreators(actionCreators,dispatch);
    
    useEffect(() => {
        console.log(cartItems);
        console.log(`changing total`);
        setTotal(0)
        cartItems.forEach(item=>{
            setTotal(state=>(state+(item.price*item.qty)))
        })
    }, [cartItems])
    return (
        <div className="cart-item-container">
           { cartItems.map((item)=>(<CartItem item={item} key={item.id} edit={editQty}/>))}
           <button>CHEKCK OUT</button>
           <span>{total}</span>
        </div>

    )
}

export default Cart
