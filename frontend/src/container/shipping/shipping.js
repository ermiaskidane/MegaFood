import React, { useState} from "react"
import { useDispatch, useSelector } from 'react-redux'

import CheckoutSteps from "../../components/checkoutSteps/CheckoutSteps"
import { saveShippingAddress} from "../../store/actions/menusActions"
import "./shipping.scss"

const Shipping = ({history}) => {
//   const cart = useSelector((state) => state.cart)
//   const { shippingAddress } = cart

  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [country, setCountry] = useState("")

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push('/payment')
  }

  return (
      <div className="shipping">
        <CheckoutSteps step1 step2 />
        <h1>Shipping</h1>

        <form  onSubmit={submitHandler}>
            <div className="shipping__form">
            <input 
                type="text" 
                placeholder="Enter address" 
                name="text" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                />
                <input 
                type="text" 
                placeholder="Enter City" 
                name="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                />
                <input
                type="text"
                placeholder="Enter postal code"
                name="text"
                value={postalCode} 
                onChange={(e) => setPostalCode(e.target.value)} 
                />
                <input
                type="text"
                placeholder="Enter country"
                name="text"
                value={country} 
                onChange={(e) => setCountry(e.target.value)} 
                />
                <button type="submit" className="shipping--button">
                Continue
                </button>
            </div>
        </form>
  </div>
  )
}

export default Shipping