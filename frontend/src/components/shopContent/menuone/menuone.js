import React from "react";
import { NavLink } from "react-router-dom";

import Sprite from "../../../assets/images/sprite.svg";
import "./menuone.scss";

const menuOne = (props) => {
  return (
    <div className="menu__content">
      {props.content.map((m) => {
        return (
          <div className="menu__content--one" key={m.name}>
            <div className="menu__content--wrapper">
              <img src={m.image} alt="BurgerTwo" />

              {/* ##### corner content ##### */}

              <div>
                <h5>New</h5>
                <h5 style={{ background: "#ea8025" }}>Sale</h5>
              </div>

              {/* ##### icon content ##### */}
              <div className="menu__content--options">
                <div className="menu__content--detail">
                  <NavLink to="/shop">
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-heart-outlined`} />
                    </svg>
                  </NavLink>
                </div>
                <div className="menu__content--detail">
                  <NavLink to="/shop">
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-dots-three-horizontal`} />
                    </svg>
                  </NavLink>
                </div>
                <div className="menu__content--detail">
                  <NavLink to="/shop">
                    <svg>
                      <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>
            {/* ##### purchase Content ##### */}
            <p>{m.name}</p>
            <p>
              <s>${m.oldPrice}</s> <span>${m.price}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default menuOne;
