import axios from "axios"
import {
      MENUS_FOOD_REQUEST, 
      MENUS_FOOD_SUCCESS,
      MENUS_FOOD_FAIL,
      MENU_ADD_ITEM,
      MENU_REMOVE_ITEM
  } from "../constants/menusConstants"

  export const detailMenus = (id) => async(dispatch)  => {


        const { data } = await axios.get(`/api/homeScreen/menus/${id}`)

        dispatch({
            type: MENU_ADD_ITEM,
            payload: {
                menu: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                oldPrice: data.oldPrice,
                offer: data.offer
            }
        }) 
  }
 
 
//   export const detailMenus = (id) => async(dispatch)  => {
//     try {
//         dispatch({
//             type: MENUS_FOOD_REQUEST
//         })

//         const { data } = await axios.get(`/api/homeScreen/menus/${id}`)

//         dispatch({
//             type: MENUS_FOOD_SUCCESS,
//             payload: {
//                 menu: data._id,
//                 name: data.name,
//                 image: data.image,
//                 price: data.price,
//                 oldPrice: data.oldPrice,
//                 offer: data.offer,
//                 shopcart: true
//             }
//         }) 
//     } catch(error){
//         dispatch({
//             type: MENUS_FOOD_FAIL,
//               payload: error.response && error.response.data.message ? error.response.data.message : error.message
//         })
//     }
//   }
