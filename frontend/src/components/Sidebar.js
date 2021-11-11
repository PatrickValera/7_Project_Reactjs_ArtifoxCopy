import React from 'react'
import {useSelector} from 'react-redux'
const Sidebar = () => {
    const {list}=useSelector(state=>state.cartItems)
    return (
        <div className='sidebar'>
            <div className="sidebar-content">
                <div className="list">
                    <ul>
                        {list.map(item=>(
                        <div className="cart-item">
                            <div className="thumbnail">
                                <figure className="thumbnail-container">
                                    <img className="product-thumbnail" src={item.images.main} alt="" loading='lazy'/>
                                </figure>
                            </div>
                            <div className="detail">
                                <h5 className="name">{item.name}{item.colors.length>0&&` - ${item.colors[0]}`}</h5>
                                <span className="price">${(item.price).toFixed(2)}</span>
                                <span className="qty">{item.qty}</span>
                            </div>
                        </div>))}
                    </ul>
                </div>
                <div className="horizontal-line">
                    <span></span>
                    <hr />
                </div>
                <div className="discount-input">
                    <input className='input' placeholder="Gift card or discount code"/>
                    <button>Apply</button>
                </div>
                <div className="fees">
                    <span className='fee-title'>Subtotal</span>
                    <span className="value">${list.reduce((current,total,i)=>total+list[i].price),0}</span>
                </div>
                <div className="fees">
                    <span className='fee-title'>Shipping</span>
                    <span className="value">$1,000</span>
                </div>
                <div className="fees">
                    <span className='fee-title'>Taxes (estimated)</span>
                    <span className="value">$,1000</span>
                </div>
                <div className="horizontal-line">
                    <hr />
                </div>
                <div className="fees total">
                    <span className='fee-title'>Total</span>
                    <span className="value">$2,000</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
