import React from "react";
import { NavLink } from "react-router-dom";

import HandTaco from "../../../assets/images/hand-taco.jpg";
import "./sideleft.scss";

const sideLeft = props => {
  return (
    <div className="sideleft">
      <div className="sideleft__categories">
        <h2>Categories</h2>
        <hr />
        <div className="sideleft__categories--content">
          <ul className="sideleft__categories--lists">
            <li>
              <NavLink to="/">
                <span>&#x3e;</span> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <span>&#x3e;</span> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/feature">
                <span>&#x3e;</span> Feature
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog">
                <span>&#x3e;</span> Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <span>&#x3e;</span> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="sideleft__brand">
        <h2>Brand</h2>
        <hr />
        <div className="sideleft__brand--content">
          <NavLink to="/shop">
            <p>
              <span>&#x3e;</span> MegaFood - Fast Food &amp; Restuarant
            </p>
          </NavLink>
        </div>
      </div>
      <div className="sideleft__collection">
        <h2>collection</h2>
        <hr />
        <div className="sideleft__collection--content">
          <ul className="sideleft__collection--lists">
            <li>
              <NavLink to="/shop">
                <span>&#x3e;</span> Taco
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <span>&#x3e;</span> Burger
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <span>&#x3e;</span> Pizza
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <span>&#x3e;</span> Burrito
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="sideleft__sizeOption">
        <h2>Side Option</h2>
        <hr />
        <div className="sideleft__sizeOption--content">
          <p className="small">Small</p>
          <p className="medium">Medium</p>
          <p className="big">Big</p>
        </div>
      </div>
      <div className="sideleft__priceFilter">
        <h2>Price Filter</h2>
        <hr />
        <div className="sideleft__priceFilter--content">
          <ul className="sideleft__priceFilter--lists">
            <li>
              <NavLink to="/shop">
                <span>&#x3e;</span> £0-£5
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <span>&#x3e;</span> £5-£10
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <span>&#x3e;</span> £10-£15
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <span>&#x3e;</span> £15-£20
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="sideleft__tags">
        <h2>Tags</h2>
        <hr />
        <div className="sideleft__tags--content">
          <NavLink to="/shop">
            <p>£0-£5</p>
          </NavLink>
          <NavLink to="/shop">
            <p>£5-£10</p>
          </NavLink>
          <NavLink to="/shop">
            <p>£10-£15</p>
          </NavLink>
          <NavLink to="/shop">
            <p>£15-£20</p>
          </NavLink>
          <NavLink to="/shop">
            <p>Big</p>
          </NavLink>
          <NavLink to="/shop">
            <p>vegeterian</p>
          </NavLink>
          <NavLink to="/shop">
            <p>small</p>
          </NavLink>
          <NavLink to="/shop">
            <p>Burrito</p>
          </NavLink>
        </div>
      </div>
      <figure>
        <img src={HandTaco} alt="taco-img" />
        <figcaption>Buy Now</figcaption>
      </figure>
    </div>
  );
};

export default sideLeft;
