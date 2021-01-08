import React,  {useEffect} from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import CheckoutSteps from '../../components/checkoutSteps/CheckoutSteps'
import { createOrder } from '../../store/actions/orderActions'
import "./placeOrder.scss"

const PlaceOrder = ({ history }) => {
    const dispatch = useDispatch()

    const menus = useSelector((state) => state.menusDetail)

    // Claculate price

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }
    menus.itemsPrice = addDecimals(menus.menusItem.reduce((acc, item) => acc + item.price * item.qty, 0))

    menus.shippingPrice = addDecimals(menus.itemsPrice > 15 ? 0 : 2)

    menus.totalPrice = (
        Number(menus.itemsPrice) + 
        Number(menus.shippingPrice)
    ).toFixed(2)

    const orderCreate = useSelector((state) => state.orderCreate)
    const { order, success, error} = orderCreate


    useEffect(() => {
        if (success) {
          history.push(`/order/${order._id}`)
        }
        // eslint-disable-next-line
      }, [history, success])

    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: menus.menusItem,
            shippingAddress: menus.shippingAddress,
            paymentMethod: menus.paymentMethod,
            itemsPrice: menus.itemsPrice,
            shippingPrice: menus.shippingPrice,
            totalPrice: menus.totalPrice
        }))
    }

    return (
        <>
        <div className="placeOrder">
            <CheckoutSteps step1 step2 step3 step4 />
            <div className="placeOrder__columns">
                <div className="placeOrder__column1">
                    <div className="placeOrder__column1--address">
                        <h2>Shipping</h2>
                    <p>
                      <strong>Address:</strong>
                      {menus.shippingAddress.address},
                      {menus.shippingAddress.city},
                      {menus.shippingAddress.postalCode},
                      {menus.shippingAddress.country}
                    </p>
                    </div>

                    <div className="placeOrder__column1--payment">
                        <h2>Payment Method</h2>
                        <p><strong>Method: </strong>{menus.paymentMethod}</p>
                    </div>

                    <div className="placeOrder__column1--orderItems">
                        <h2>Order Items</h2>
                        {menus.menusItem.length === 0 ? (
                            <Message> Your Cart is empty</Message>
                        ): (
                            <div className="placeOrder__column1--orderItem" >
                                {menus.menusItem.map((item, index) =>(
                                    <div className="orderItem--detail" key={index}>
                                        <ul className="orderItem--lists">
                                            <li>
                                                <img 
                                                src={item.image} 
                                                alt={item.name}
                                                />
                                            </li>
                                            <li>
                                                <Link to={`/menus/${item.menu}`}>{item.name}</Link>
                                            </li>
                                            <li>
                                                {item.qty} x ${item.price} = ${item.qty * item.price}
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="placeOrder__column2">
                    <div className="placeOrder__column2--summary">
                        <ul className="summary--lists">
                            <li className="summary--list">
                                <h2>Order Summary</h2>
                            </li>
                            <li>Items  <span>${menus.itemsPrice}</span></li>
                            <li>Shipping  <span>${menus.shippingPrice}</span></li>
                            <li>Total  <span>${menus.totalPrice}</span></li>
                            <li>
                                {error && <Message className="danger">{error}</Message>}
                            </li>
                            <li>
                                <button type="button" className="btn--block"
                                disabled={menus.menusItem === 0}
                                onClick={placeOrderHandler}>
                                    Place Order
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PlaceOrder
