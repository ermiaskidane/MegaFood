import React from "react";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./navigation.scss";

import { logout } from "../../store/actions/userActions";
import Sprite from "../../assets/images/sprite.svg";

const Navigation = props => {

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const menuItem = useSelector((state) => state.menusDetail)
  const { menusItem, shopCartReducer }  = menuItem
 

  const logoutHandler = () => {
    console.log("logout")
    dispatch(logout())
  }

  return (
    <header>
      <div className="header__content">
        <h2 className="header-logo">MegaFood {
          userInfo ? (
            <span>User: {userInfo.name}</span>
          ) : null
        } </h2>
        <nav className="header__nav">
          <div className="header__nav--menu">
            <ul className="header__nav--list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/feature">Feature</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
   
          <div className="header__nav--icon">
            <svg onClick={props.search}>
              <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
            </svg>
            {userInfo ? (
              <svg onClick={logoutHandler}>
              <use xlinkHref={`${Sprite}#icon-log-out`} />
            </svg>
            ): (
              <svg onClick={props.signup}>
              <use xlinkHref={`${Sprite}#icon-login`} />
            </svg>
            )}
            <svg onClick={props.shopcart}>
              <use xlinkHref={`${Sprite}#icon-shopping-bag`} />
            </svg>
            {menusItem.length !== 0 ? (
              <span className="header__nav--icon--notification">{menusItem.length}</span>
            ) : (
              null
            )}
            
          </div>
        </nav>
      </div> 
      {/*######  mobile nav #######*/}
      <nav className="mobile__content">
        <p onClick={props.open} className="mobile__button">
          <button className="mobile__content--hamburger"></button>
        </p>

        <div className="mobile__content--logo">
          <h2 className="mobile--logo">MegaFood {userInfo ? (
            <span>User: {userInfo.name}</span>
          ) : null }
          </h2>
        </div>
        <div className="mobile__content--icons">
          <svg onClick={props.search}>
            <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
          </svg>
          <svg onClick={props.shopcart}>
            <use xlinkHref={`${Sprite}#icon-shopping-bag`} />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
