import React from "react";
import "./navSignup.scss";
import { NavLink } from "react-router-dom";

import Sprite from "../../../../assets/images/sprite.svg";

const navSignup = () => {
  return (
    <div className="navSignup">
      <div className="navSignup__detail">
        <h1>MegaFood</h1>
        <h3>Great to have you back!</h3>
        <form action="#">
          <div className="navSignup__form">
            <input type="email" placeholder="Enter Email" name="email" />
            <input
              type="password"
              placeholder="Enter password"
              name="password"
            />
            <NavLink to="#">Forget your password?</NavLink>
            <button type="submit" value="Login">
              Log In
            </button>
          </div>
        </form>

        <div className="navSignup__registerNow">
          <span>Don't have an account?</span>
          <NavLink to="#">
            Register Now
            <svg>
              <use xlinkHref={`${Sprite}#icon-arrow-right2`} />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default navSignup;
