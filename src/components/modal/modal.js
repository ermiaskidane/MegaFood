import React from "react";
import "./modal.scss";
import { NavLink } from "react-router-dom";
import Sprite from "../../assets/images/sprite.svg";

const modal = props => {
  return (
    <div className="modal">
      <div className="modal__lists">
        <ul className="modal__list">
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

      <div className="modal__close" onClick={props.open}>
        <svg>
          <use xlinkHref={`${Sprite}#icon-cross`} />
        </svg>
        <p>close</p>
      </div>
    </div>
  );
};

export default modal;
