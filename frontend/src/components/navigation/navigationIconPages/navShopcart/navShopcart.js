import React, {useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { NavLink } from "react-router-dom";
import "./navShopcart.scss";

import Sprite from "../../../../assets/images/sprite.svg";

const NavShopcart = props => {
  const dispatch = useDispatch()

  const menuItem = useSelector((state) => state.menusDetail)
  const { menusItem, shopCartReducer }  = menuItem
  
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

      {menusItem.length !== 0 ? 
    (menusItem.map((item) => 
    (<div className="navShopcart__detail--menu">
      <ul key={item.menu}>
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
        <p className="offer">{item.offer}</p>
        </li>
    </ul>
    </div>
      )))
    : (<div className="navShopcart__detail--content">
          <h2>Your Shopping Bag is Empty</h2>
          <button>
            <NavLink to="/shop">Go to The Shop</NavLink>
          </button>
        </div>)}
      </div>
    </div>
  );
};

export default NavShopcart;
