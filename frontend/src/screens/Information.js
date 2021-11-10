import React from 'react'
import Sidebar from '../components/Sidebar'
import {Link} from 'react-router-dom'
import CheckoutNav from '../components/CheckoutNav'
import { useState } from 'react'
import { saveShippingAddress } from '../global/actioncreators/cartItemsActions'
import { useDispatch,useSelector } from 'react-redux'
const Information = ({history}) => {
    const dispatch=useDispatch()
    const shippingAddress=useSelector(state=>state.shippingAddress)
    const [firstName,setFirstName]=useState(shippingAddress.firstName||"")
    const [lastName,setLastName]=useState(shippingAddress.lastName||"")
    const [email,setEmail]=useState((shippingAddress.email||""))
    const [emailUpdate,setEmailUpdate]=useState(false)
    const [company,setCompany]=useState(shippingAddress.company||"")
    const [address,setAddress]=useState(shippingAddress.address||"")
    const [apartment,setApartment]=useState(shippingAddress.apartment||"")
    const [city,setCity]=useState(shippingAddress.city||"")
    const [phoneNum,setPhoneNum]=useState(shippingAddress.phoneNum||"")
    const submitHandler=(e)=>{
        e.preventDefault()
        if(!firstName||!lastName||!address||!city||!phoneNum)return
        dispatch(saveShippingAddress({
            firstName,
            lastName,
            company,
            address,
            apartment,
            city,
            phoneNum,
            email,
            emailUpdate
        }))
        history.push('/shipping')
    }
    return (
        <div className='information-screen'>
            <div className="form-container">
                <form className='form' onSubmit={submitHandler}>
                    <Link to='/' className='logo-container'>
                        A R T I F O X
                    </Link>
                    <CheckoutNav/>
                    <div className='header'>                
                        <h4>Contact information</h4>
                        <span>Already have an account? <Link to='/user/login'>Log in.</Link></span>
                    </div>
                    <input className='input' type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <div className='input-check'>
                        <input className='checkbox' type="checkbox" value={emailUpdate} onChange={(e)=>setEmailUpdate(e.target.value)}/>
                        <p>Send me an email and transactional SMS updates about my order. Msg & data rates may apply.</p>
                    </div>
                    <div className="header">
                    <h4>Shipping address</h4>
                    </div>
                    <input className='input half' type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                    <input className='input half' type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                    <input className='input' type="text" placeholder="Company (optional)" value={company} onChange={(e)=>setCompany(e.target.value)}/>
                    <input className='input' type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    <input className='input' type="text" placeholder="Apartment, suite, etc. (optional)" value={apartment} onChange={(e)=>setApartment(e.target.value)}/>
                    <input className='input' type="text" placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)}/>
                    <input className='input' type="text" placeholder="Phone" value={phoneNum} onChange={(e)=>setPhoneNum(e.target.value)}/>
                    <button className='button' type='submit'>Continue to shipping</button>
                    <Link to='/cart'><button className='button back-button'>Back to Cart</button></Link>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Information
