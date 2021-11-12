import React from 'react'
import Sidebar from '../components/Sidebar'
import {Link} from 'react-router-dom'
import CheckoutNav from '../components/CheckoutNav'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Payment = ({history}) => {
    const [cardNumber,setCardNumber]=useState()
    const [cardName,setCardName]=useState()
    const [expDate,setExpDate]=useState()
    const [securityCode,setSecurityCode]=useState()

    const shippingAddress=useSelector(state=>state.shippingAddress)
    const {address,city}=shippingAddress
    const submitHandler=(e)=>{
        e.preventDefault()
    }
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
                        <div className="infobit-container">
                            <span className='title'>Method</span>
                            <span className='content'>FedEx Ground $62.32</span>
                        </div>
                    </div>
                    <div className="header">
                        <h4>Payment</h4>
                        <p>All transactions are secure and encrypted</p>
                            <input className='input' type="number" placeholder="Card number" value={cardNumber} onChange={(e)=>setCardNumber(e.target.value)}/>
                            <input className='input' type="number" placeholder="Name on card" value={cardName} onChange={(e)=>setCardName(e.target.value)}/>
                            <input className='input half' type="number" placeholder="Expiration date" value={expDate} onChange={(e)=>setExpDate(e.target.value)}/>
                            <input className='input half' type="number" placeholder="Security code" value={securityCode} onChange={(e)=>setSecurityCode(e.target.value)}/>
                    </div>
                    <button className='button' type='submit'>Pay Now</button>
                    <Link to='/checkout'><button className='button back-button'>Back to Shipping</button></Link>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Payment
