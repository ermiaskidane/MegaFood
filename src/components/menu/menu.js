import React from "react";
import { NavLink } from "react-router-dom";

import "./menu.scss";

import Burger2 from "../../assets/images/burger-2 (Custom).jpg";
import Burger3 from "../../assets/images/burger-3 (Custom).jpg";
import FriesMeat from "../../assets/images/fried-chicken (Custom).jpg";
import SliceMeat from "../../assets/images/fries-meat (Custom).jpg";
import Pizza4 from "../../assets/images/pizza-4 (Custom).jpg";
import Pizza5 from "../../assets/images/pizza-5 (Custom).jpg";
import Taco1 from "../../assets/images/taco-1 (Custom).jpg";
import Taco2 from "../../assets/images/taco-2 (Custom).jpg";

import Sprite from "../../assets/images/sprite.svg";

const menu = () => {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="menu__content">
        <div className="menu__content--one">
          <div className="menu__content--wrapper">
            <img src={Burger2} alt="BurgerTwo" />

            {/* ##### corner content ##### */}

            <div>
              <h5>New</h5>
              <h5 style={{ background: "#ea8025" }}>Sale</h5>
            </div>

            {/* ##### icon content ##### */}
            <div className="menu__content--options">
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-heart-outlined`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-dots-three-horizontal`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
          {/* ##### purchase Content ##### */}
          <p>Cheese Burger</p>
          <p>
            <s>$4.00</s> <span>$2.90</span>
          </p>
        </div>
        <div className="menu__content--two">
          <div className="menu__content--wrapper">
            <img src={Burger3} alt="BurgerThree" />
            <div>
              <h5>New</h5>
              <h5 style={{ background: "#ea8025" }}>Sale</h5>
            </div>

            {/* ##### icon content ##### */}
            <div className="menu__content--options">
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-heart-outlined`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-dots-three-horizontal`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
          <p>mini Burger</p>
          <p>
            <s>$3.00</s> <span>$1.90</span>
          </p>
        </div>
        <div className="menu__content--three">
          <div className="menu__content--wrapper">
            <img src={FriesMeat} alt="frieswith meat" />
            <div>
              <h5>New</h5>
              <h5 style={{ background: "#ea8025" }}>Sale</h5>
            </div>
            {/* ##### icon content ##### */}
            <div className="menu__content--options">
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-heart-outlined`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-dots-three-horizontal`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
          <p>fried chicken</p>
          <p>
            <s>$3.00</s> <span>$1.90</span>
          </p>
        </div>
        <div className="menu__content--four">
          <div className="menu__content--wrapper">
            <img src={SliceMeat} alt="fries-withslice-meat" />
            <div>
              <h5>New</h5>
              <h5 style={{ background: "#ea8025" }}>Sale</h5>
            </div>

            {/* ##### icon content ##### */}
            <div className="menu__content--options">
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-heart-outlined`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-dots-three-horizontal`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
          <p>fries chicken broccoli</p>
          <p>
            <s>$8.00</s> <span>$4.50</span>
          </p>
        </div>
        <div className="menu__content--five">
          <div className="menu__content--wrapper">
            <img src={Pizza4} alt="Pizza" />
            <div>
              <h5>New</h5>
            </div>
            {/* ##### icon content ##### */}
            <div className="menu__content--options">
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-heart-outlined`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-dots-three-horizontal`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>

          <p>Pizza mixed</p>
          <p>
            <span>$5.50</span>
          </p>
        </div>
        <div className="menu__content--six">
          <div className="menu__content--wrapper">
            <img src={Pizza5} alt="Pizza" />
            <div>
              <h5>New</h5>
            </div>

            {/* ##### icon content ##### */}
            <div className="menu__content--options">
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-heart-outlined`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-dots-three-horizontal`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
          <p>vegeterian Pizza</p>
          <p>
            <span>$6.00</span>
          </p>
        </div>
        <div className="menu__content--seven">
          <div className="menu__content--wrapper">
            <img src={Taco1} alt="Taco" />
            <div>
              <h5>New</h5>
            </div>

            {/* ##### icon content ##### */}
            <div className="menu__content--options">
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-heart-outlined`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-dots-three-horizontal`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
          <p>Deli taco crunchy</p>
          <p>
            <span>$7.00</span>
          </p>
        </div>
        <div className="menu__content--eight">
          <div className="menu__content--wrapper">
            <img src={Taco2} alt="Taco" />
            <div>
              <h5>New</h5>
            </div>
            {/* ##### icon content ##### */}
            <div className="menu__content--options">
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-heart-outlined`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-dots-three-horizontal`} />
                  </svg>
                </NavLink>
              </div>
              <div className="menu__content--detail">
                <NavLink to="/">
                  <svg>
                    <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
          <p>Avoca Deli taco</p>
          <p>
            <span>$5.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default menu;
