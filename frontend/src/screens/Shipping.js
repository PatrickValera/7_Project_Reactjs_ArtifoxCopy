import React from 'react'
import Sidebar from '../components/Sidebar'
import {Link} from 'react-router-dom'
import CheckoutNav from '../components/CheckoutNav'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Shipping = ({history}) => {
    const [shippingOption,setShippingOption]=useState('fedex')

    const shippingAddress=useSelector(state=>state.shippingAddress)
    const {address,city}=shippingAddress
    const submitHandler=(e)=>{
        e.preventDefault()
        history.push('/payment')
    }
    // const handleClick=(e)=>{
    //     e.preventDefault()
    //     console.log(fedexSelected)
    //     setFedexSelected(state=>!state.curr)
    // }
    return (
        <div className='information-screen'>
            <div className="form-container">
                <form className='form' onSubmit={submitHandler}>
                    <Link to='/' className='logo-container'>
                        A R T I F O X
                    </Link>
                    <CheckoutNav/>
                    <div className="info-container">
                        <div className="infobit-container">
                            <span className='title'>Contact</span>
                            <span className='content'>{shippingAddress.email}</span>
                            <Link to='/checkout'><button className='change-button'>Change</button></Link>
                        </div>
                        <div className="horizontal-line">
                            <span></span>
                            <hr />
                        </div>
                        <div className="infobit-container">
                            <span className='title'>Ship to</span>
                            <span className='content'>{`${address}, ${city} CA 92505, United States`}</span>
                            <Link to='/checkout'><button className='change-button'>Change</button></Link>
                        </div>
                    </div>
                    <div className="header">
                        <h4>Shipping method</h4>
                        <div className="info-container">
                            <div className="infobit-container">
                                <div className="radio-input">
                                    <input type='radio' name="shipping" className={`radio ${shippingOption==='fedex'?'radio-checked':''}`} value="fedex" onChange={(e)=>setShippingOption(e.target.value)}></input>
                                </div>
                                <span className='content'>FedEx Ground</span>
                                <span className="shipping-option-price">$62.23</span>
                            </div>
                            {/* <div className="infobit-container">
                                <div className="radio-input">
                                    <input type='radio' name="shipping" className={`radio ${shippingOption==='ups'?'radio-checked':''}`} value="ups" onChange={(e)=>setShippingOption(e.target.value)}></input>
                                </div>
                                <span className='content'>Fedex Ground</span>
                                <span className="shipping-option-price">$62.23</span>
                            </div> */}
                        </div>
                    </div>
                    <button className='button' type='submit'>Continue to Payment</button>
                    <Link to='/checkout'><button className='button back-button'>Back to Information</button></Link>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Shipping
