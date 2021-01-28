import React from "react";
import { NavLink } from "react-router-dom";

import Sprite from "../../../assets/images/sprite.svg";
import "./menutwo.scss";
 
const menuTwo = ({content}) => {
  return (
    <div className="menu__content">
      {content.map((ms) =>(
          <div className="menu__content--one" key={ms.name}>
            <div className="menu__content--wrapper">
              <img src={ms.image} alt="BurgerTwo" />

              {/* ##### corner content ##### */}

              <div>
                <h5>New</h5>

                {ms.offer ? (
                  <h5 style={{ background: "#ea8025" }}>{ms.offer}</h5>
                ) : null}
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
            <p>{ms.name}</p>
            <p>
              {ms.oldPrice ? <s>${(ms.oldPrice).toFixed(2)}</s> : null}
              <span style={{ paddingLeft: "0.3rem" }}>${(ms.price).toFixed(2)}</span>
            </p>
          </div>
        ))}
    </div>
  );
};

export default menuTwo;
