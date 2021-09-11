import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItem from '../components/CartItem'
// import { bindActionCreators } from 'redux'
// import { actionCreators } from '../global/actioncreators/index'

const Cart = () => {
    // const [total,setTotal]=useState(0)
    // const dispatch=useDispatch()
    // const {cartItems}=useSelector(state=>state)
    // const {editQty}=bindActionCreators(actionCreators,dispatch);
    const{list}=useSelector(state=>state.cartItems)
    useEffect(() => {
        console.log(list);
        // console.log(`changing total`);
        // setTotal(0)
        // cartItems.forEach(item=>{
        //     setTotal(state=>(state+(item.price*item.qty)))
        // })
    }, [list])

    return (
        <div className="cart-item-container">
            {list?<>
                { list.map((item)=>(<CartItem item={item} key={item.id} />))}
                <button>CHEKCK OUT</button>
                {/* <span>{total}</span> */}
            </>:"EMPTY"}
           
        </div>

    )
}

export default Cart
