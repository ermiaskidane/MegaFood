import { 
    MENUS_FOOD_REQUEST,
    MENUS_FOOD_SUCCESS,
    MENUS_FOOD_FAIL,
    MENU_ADD_ITEM,
    MENU_REMOVE_ITEM,
    MENU_SAVE_SHIPPING_ADDRESS,
    MENU_SAVE_PAYMENT_METHOD
} from "../constants/menusConstants"

export const menusDetailReducer = (state = {menusItem: [], shippingAddress: {}}, action) => {
    switch (action.type) {
        case MENU_ADD_ITEM:
            const item = action.payload

            const existItems = state.menusItem.find((x) => x.menu === item.menu)

            if(existItems) {
                return {
                    ...state,
                    menusItem: state.menusItem.map((x) => x.menu === existItems.menu ? item : x),
                    shopCartReducer: false
                }
            } else {
                return {
                    ...state,
                    menusItem: [...state.menusItem, item],
                    shopCartReducer: false
                }
            }
            case MENU_REMOVE_ITEM:
                return {
                    ...state,
                    menusItem: state.menusItem.filter((x) => x.menu !== action.payload)
                }
            case MENU_SAVE_SHIPPING_ADDRESS:
                return{
                    ...state,
                    shippingAddress: action.payload
                }
            case MENU_SAVE_PAYMENT_METHOD:
                return {
                    ...state,
                    paymentMethod: action.payload
                }
            default:
                return state
    }
} 