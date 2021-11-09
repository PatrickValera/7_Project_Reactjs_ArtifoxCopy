import React from 'react'
import Sidebar from '../components/Sidebar'
import {Link} from 'react-router-dom'
import CheckoutNav from '../components/CheckoutNav'
const Information = () => {
    return (
        <div className='information-screen'>
            <div className="form-container">
                <form className='form'>
                    <Link to='/' className='logo-container'>
                    <img className="logo" src="/images/logo.png" alt="" />
                    </Link>
                    <CheckoutNav/>
                    <div className='header'>                
                        <h4>Contact information</h4>
                        <span>Already have an account? <Link to='/user/login'>Log in.</Link></span>
                    </div>
                    <input className='input' type="email" placeholder="Email" />
                    <div className='input-check'>
                        <input className='checkbox' type="checkbox" />
                        <p>Send me an email and transactional SMS updates about my order. Msg & data rates may apply.</p>
                    </div>
                    <div className="header">
                    <h4>Shipping address</h4>
                    </div>
                    <input className='input half' type="text" placeholder="First Name"/>
                    <input className='input half' type="text" placeholder="Last Name"/>
                    <input className='input' type="text" placeholder="Company (optional)"/>
                    <input className='input' type="text" placeholder="Address"/>
                    <input className='input' type="text" placeholder="Apartment, suite, etc. (optional)"/>
                    <input className='input' type="text" placeholder="City"/>
                    <input className='input' type="text" placeholder="Phone"/>
                    <Link to='/shipping'><button className='button'>Continue to shipping</button></Link>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Information
