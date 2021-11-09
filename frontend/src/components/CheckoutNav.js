import React from 'react'
import { Breadcrumbs } from '@material-ui/core'
import { Link } from 'react-router-dom'
const CheckoutNav = () => {
    return (
        <Breadcrumbs separator=">"aria-label="breadcrumb" className="breadcrumb checkout-breadcrumb">
            <Link color="inherit" to="/cart" className="crumb-text">
                <span>Cart</span>
            </Link>
            <Link color="inherit" to="/checkout" className="crumb-text">
                <span>Information</span>
            </Link>
            <Link color="inherit" to="/shipping" className="crumb-text">
                <span>Shipping</span>
            </Link>
            <Link disabled color="inherit" to="/payment" className="crumb-text">
                <span>Payment</span>
            </Link>
        </Breadcrumbs>
    )
}

export default CheckoutNav
