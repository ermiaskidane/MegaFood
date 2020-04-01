import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

import Sprite from "../../assets/images/sprite.svg";

const navigation = props => {
  return (
    <header>
      <div className="header__content">
        <h2 className="header-logo">MegaFood</h2>
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
            <svg onClick={props.singup}>
              <use xlinkHref={`${Sprite}#icon-login`} />
            </svg>
            <svg onClick={props.shopcart}>
              <use xlinkHref={`${Sprite}#icon-shopping-bag`} />
            </svg>
          </div>
        </nav>
      </div>
      {/*######  mobile nav #######*/}
      <nav className="mobile__content">
        <p onClick={props.open} className="mobile__button">
          <button className="mobile__content--hamburger"></button>
        </p>

        <div className="mobile__content--logo">
          <h2 className="mobile--logo">MegaFood</h2>
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

export default navigation;
