import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { 
    userLoginReducer,
    userRegisterReducer,
} from "./store/reducers/userReducers"

import { 
    menusDetailReducer
} from "./store/reducers/menusReducers"
import { 
    orderCreateReducer,
    orderMenuDetailsReducer,
    orderPaymentReducer
} from "./store/reducers/orderReducers"

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    menusDetail: menusDetailReducer,
    orderCreate: orderCreateReducer,
    orderMenuDetails: orderMenuDetailsReducer,
    orderPayment: orderPaymentReducer
})
const menusItemsFromStorage = localStorage.getItem("menusItem") ? 
    JSON.parse(localStorage.getItem("menusItem")) : []

const userInfoFromStorage = localStorage.getItem("userInfo") ? 
    JSON.parse(localStorage.getItem("userInfo")) : null

const initialState = {
    menusDetail: { menusItem: menusItemsFromStorage},
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
