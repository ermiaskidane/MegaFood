import React from 'react'
import {NavLink } from "react-router-dom";

import "./CheckoutSteps.scss"

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className='checkoutStep'>
      <div className="checkoutStep__content">
        {step1 ? (
          <NavLink to='/login'>
            <span>Sign In</span>
          </NavLink>
        ) : (
          <span style={{color: "#9da1a5"}} disabled>Sign In</span>
        )}
      </div>

      <div className="checkoutStep__content">
        {step2 ? (
          <NavLink to='/shipping'>
            <span>Shipping</span>
          </NavLink>
        ) : (
          <span style={{color: "#9da1a5"}}  disabled>Shipping</span>
        )}
      </div>

      <div className="checkoutStep__content">
        {step3 ? (
          <NavLink to='/payment'>
            <span>Payment</span>
          </NavLink>
        ) : (
          <span style={{color: "#9da1a5"}}  disabled>Payment</span>
        )}
      </div>

      <div className="checkoutStep__content">
        {step4 ? (
          <NavLink to='/placeorder'>
            <span>Place Order</span>
          </NavLink>
        ) : (
          <span style={{color: "#9da1a5"}}  disabled>Place Order</span>
        )}
      </div>
    </div>
  )
}

export default CheckoutSteps