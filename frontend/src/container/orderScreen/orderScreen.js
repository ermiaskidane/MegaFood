import React, {useState, useEffect} from "react"
import axios from "axios"
// import { PayPalButton } from "react-paypal-button-v2"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'

const OrderScreen = ({ match, history }) => {
    const orderId = match.params.id

    const [sdkReady, setSdkReady] = useState(false)

    const dispatch = useDispatch()

    return (
        <>
            <div className="orderScreen">
                <h2> orderScreen </h2>
            </div>
        </>
    )
}

export default OrderScreen