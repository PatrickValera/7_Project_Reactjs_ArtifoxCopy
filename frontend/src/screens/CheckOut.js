import React from 'react'

const CheckOut = () => {
    return (
        <form>
            <h3>Contact information</h3>
            <span>Already have an account? Log in</span>
            <input type="email" placeholder="Email" />
            <div>
                <input type="checkbox" />
                <p>Send me an email and transactional SMS updates about my order. Msg & data rates may apply.</p>
            </div>
            <h3>Shipping address</h3>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="text" placeholder="Company (optional)"/>
            <input type="text" placeholder="Address"/>
            <input type="text" placeholder="Apartment, suite, etc. (optional)"/>
            <input type="text" placeholder="City"/>
            <input type="text" placeholder="Phone"/>
            <button>Continue to shipping</button>


            

   
        </form>
    )
}

export default CheckOut
