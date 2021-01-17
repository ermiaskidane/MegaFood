import React, {useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps'
import { savePaymentMethod } from "../../store/actions/menusActions"
import "./payment.scss"

const Payment = ({ history}) => {
    const menus = useSelector((state) => state.menusDetail)
    const { shippingAddress } = menus

    if (!shippingAddress){
        history.push("/shipping")
    }

    const [paymentMethod, setPaymentMethod] = useState("PayPal")

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push("/placeorder")
    }

    return(
        <div className="payment">
             <CheckoutSteps step1 step2 step3/>
             <h1>Payment Method</h1>
             <form onSubmit={submitHandler}>
                 <div className="payment__form">
                    <input type="radio" className="payment__radio1"  value="paypal" id="paypal" name="paymentMethod"  checked onChange={(e) => setPaymentMethod(e.target.value)}/>
                    <label htmlFor="paypal" className="payment__label">PayPal Or Credit Card</label>
                    <button type="submit" className="payment--button">Continue</button>
                 </div>
             </form>
        </div>
    )
}

export default Payment