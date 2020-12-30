// import React from "react";
import React, {useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import "./navShopcart.scss";

import { detailMenus, removeFromMenus} from "../../../../store/actions/menusActions"
import Sprite from "../../../../assets/images/sprite.svg";
 
const NavShopcart = props => {
  const dispatch = useDispatch()

  const menuItem = useSelector((state) => state.menusDetail)
  const { menusItem, shopCartReducer }  = menuItem

  const removeFromDetailMenusHandler = (id) => {
    console.log(id)
    dispatch(removeFromMenus(id))
  }
 
  return (
    <div className="navShopcart">
      <div className="navShopcart__detail">
        <div className="navShopcart__detail--head">
          <svg onClick={props.show}>
            <use xlinkHref={`${Sprite}#icon-cross`} />
          </svg>
          <h3>Shopping Cart</h3>
          <svg>
            <use xlinkHref={`${Sprite}#icon-circle`} />
          </svg>
        </div>

    {menusItem.length === 0 ?(
      <div className="navShopcart__detail--content">
          <h2>Your Shopping Bag is Empty</h2>
          <button>
            <NavLink to="/shop">Go to The Shop</NavLink>
          </button>
      </div>
    ):
    (menusItem.map((item) => 
    (<div className="navShopcart__detail--menu" key={item.menu}>
      <ul>
      <li>
        <figure>
          <NavLink to="/">
            <img src={item.image} alt={item.name} 
              style={{ 
                height: "3rem",
                width: "2.8rem",
                borderRadius: "50%" }}
            />
          </NavLink>
        </figure>
        <p className="Name"><NavLink to="/">{item.name}</NavLink></p>
        <p className="price">{item.price}</p>
        <select 
          id="navShopcart__detail--id"
          name="find-us" 
          value={item.qty} 
          onChange={(e) => dispatch(
            detailMenus(item.menu, Number(e.target.value))
          )}>
          {[...Array(6).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>{x + 1}</option>
          ))}
        </select>
        <button 
        type="button" 
        onClick={() => removeFromDetailMenusHandler(item.menu)}>
          <svg>
            <use xlinkHref={`${Sprite}#icon-cross`} />
          </svg>
        </button>
      </li>
    </ul>
    </div>
      )))
    }
        
        <div className="navShopcart__detail--pay">
          <h2>total: <span>£0.00</span></h2> 
          <button type="button">Proceed To payment</button>
        </div>
      </div>
    </div>
  );
};

export default NavShopcart;
