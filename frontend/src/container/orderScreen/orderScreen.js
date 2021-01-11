import React, {useState, useEffect} from "react"
import axios from "axios"
import { PayPalButton } from "react-paypal-button-v2"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import "./orderScreen.scss"

import  { getOrderMenusDetails } from "../../store/actions/orderActions"
import {
    ORDER_PAYMENT_RESET
} from "../../store/constants/orderConstants"

const OrderScreen = ({ match, history }) => {
    const orderId = match.params.id

    const [sdkReady, setSdkReady] = useState(false)

    const dispatch = useDispatch()

    const orderMenuDetails = useSelector((state) => state.orderMenuDetails)
    const { order, loading, error } = orderMenuDetails

    const orderPayment = useSelector((state) => state.orderPayment)
    const { loading: loadingPay, success: successPay } = orderPayment

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    if (!loading) {
        //   Calculate prices
        const addDecimals = (num) => {
          return (Math.round(num * 100) / 100).toFixed(2)
        }
    
        order.itemsPrice = addDecimals(
          order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
        )
      }

    useEffect(() => {
        if(!userInfo){
            history.push("/login")
        }

        const addPayPalScript = async () => {
            const { data: clientId } =  await axios.get("/api/config/paypal")
            const script = document.createElement("script")
            script.type = "text/javascript"
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async= script.onload = () => {
                setSdkReady(true)
            }
            document.body.appendChild(script)
        }

        if (!order || order._id !== orderId || successPay) {
            dispatch({ type: ORDER_PAYMENT_RESET})
            dispatch(getOrderMenusDetails(orderId))
        } else if (!order.isPaid){
            if(!window.paypal){
                addPayPalScript()
            } else {
                setSdkReady(true)
            }
        }
    }, [dispatch, order, successPay, userInfo])

    const successPaymentHandler = (paymentResult) => {
        console.log(paymentResult)
        dispatch(orderPayment(orderId, paymentResult))
      } 
    return loading ? (
        <Loader/>
    ) : error ? (
        <Message className="danger">{error}</Message>
    ) : (
        <>
            <div className="orderScreen">
                <h1> Order: {order._id} </h1>
                <div className="orderScreen__columns">
                    <div className="orderScreen__column1">
                        <div className="orderScreen__column1--shipping">
                            <h2>Shipping</h2>
                            <p>
                                Name: {order.user.name}
                            </p>
                            <p>
                                Email:   
                                <a href={` mailto:${order.user.email}`}> {order.user.email}</a>
                            </p>
                            <p>
                                Address: 
                                 {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                                {order.shippingAddress.postalCode},{' '}
                                {order.shippingAddress.country}
                             </p>
                                { order.isDelivered ? (
                                    <Message className="success">
                                        Delivered on {order.deliveredAt}
                                    </Message>
                                ): (
                                    <Message className="danger">
                                        Not Delivered
                                    </Message>
                                )}
                        </div>
                        <div className="orderScreen__column1--payment">
                            <h2> Payment Method</h2>
                            <p>
                                Method:
                                { order.paymentMethod}
                            </p>
                            {order.isPaid ? (
                                <Message className="success">
                                    Paid on {order.paidAt}
                                </Message>
                            ): (
                                <Message className="danger">
                                    Not Paid
                                </Message>
                            )}
                        </div>
                        <div className="orderScreen__column1--orders">
                            <h2> Order Items</h2>
                            { order.orderItems.length === 0 ? (
                                <Message>Order is empty</Message>
                            ) : (
                                <>
                                    { order.orderItems.map((item, index) => (
                                        <ul className="orderScreen__item--lists" key={index}>
                                        <li>
                                            <img src={item.image} alt={item.name} />
                                        </li>
                                        <li>
                                            <Link to={"/"} >
                                                {item.name}
                                            </Link>
                                        </li>
                                        <li>
                                            {item.qty} x ${item.price} = ${item.qty * item.price}
                                        </li>
                                     </ul>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                    <div className="orderScreen__column2">
                        <ul className="summary--lists">
                            <li className="summary--list">
                                <h2>Order Summary</h2>
                            </li>
                            <li>Items  <span>${order.itemsPrice}</span></li>
                            <li>Shipping  <span>${order.shippingPrice}</span></li>
                            <li>Total  <span>${order.totalPrice}</span></li>
                            <li>
                                {error && <Message className="danger">{error}</Message>}
                            </li>
                            {!order.ispaid && (
                                <li>
                                    { loadingPay && <Loader/> }
                                    {!sdkReady ? (
                                        <Loader/>
                                    ) :( <button>
                                            <PayPalButton
                                            amount={order.totalPrice}
                                            onSuccess={successPaymentHandler}
                                            style={{width: "100%"}}
                                        />
                                      </button> 
                                    )}
                                </li>
                            )} 
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderScreen
