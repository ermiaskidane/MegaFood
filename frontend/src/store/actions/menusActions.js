import axios from "axios"
import {
      MENUS_FOOD_REQUEST, 
      MENUS_FOOD_SUCCESS,
      MENUS_FOOD_FAIL,
      MENU_ADD_ITEM,
      MENU_REMOVE_ITEM
  } from "../constants/menusConstants"
  
  export const detailMenus = (id, qty) => async(dispatch, getState)  => {

 
        const { data } = await axios.get(`/api/homeScreen/menus/${id}`)

        dispatch({
            type: MENU_ADD_ITEM,
            payload: {
                menu: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                oldPrice: data.oldPrice,
                offer: data.offer,
                qty
            }
        }) 

    localStorage.setItem("menusItem", JSON.stringify(getState().menusDetail.menusItem))
  }

  export const removeFromMenus = (id) => (dispatch, getState) => {
    dispatch({
      type: MENU_REMOVE_ITEM,
      payload: id,
    })
  
    localStorage.setItem("menusItem", JSON.stringify(getState().menusDetail.menusItem))
  }
 