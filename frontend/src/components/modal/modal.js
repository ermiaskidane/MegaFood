import React from "react";
import { useDispatch, useSelector } from "react-redux"
import "./modal.scss";
import { NavLink } from "react-router-dom";
import Sprite from "../../assets/images/sprite.svg";

import { logout } from "../../store/actions/userActions";
 
const Modal = props => {

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    console.log("logout")
    dispatch(logout())
  }

  return (
    <div className="modal">
      <div className="modal__lists">
        <ul className="modal__list">
          {userInfo ? (
            <li className="modal__name">User: {userInfo.name}</li>
          ): (
            null
          )}
          {userInfo ? (
            <li onClick={logoutHandler}>LogOut</li>
          ): (
            <li onClick={props.signin}>
          Login
          </li>
          )}
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

export default Modal;
