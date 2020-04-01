import React, { Component } from "react";
import MenuOne from "../../components/shopContent/menuone/menuone";
import MenuTwo from "../../components/shopContent/menutwo/menutwo";
import SideLeft from "../../components/shopContent/sideleft/sideleft";

import Burger2 from "../../assets/images/shop-burger-2.jpg";
import Burrito3 from "../../assets/images/wrap-2 (Custom).jpg";
import Pizza1 from "../../assets/images/pizza-pepperoni (Custom).jpg";

import Fries from "../../assets/images/chillie-fries.jpg";
import Taco1 from "../../assets/images/taco-1 (Custom).jpg";
import PizzaMeat from "../../assets/images/pizza-meat-1.jpg";
import PizzaPepperoni from "../../assets/images/pizza-pepperoni (Custom).jpg";
import BurgerShop1 from "../../assets/images/shop-burger-1.jpg";
import FriedChicken from "../../assets/images/fried-chicken (Custom).jpg";
import Taco2 from "../../assets/images/taco-2 (Custom).jpg";

import Sprite from "../../assets/images/sprite.svg";
import "./shop.scss";

class Shop extends Component {
  state = {
    menu: [
      { src: Burger2, name: "Meal Burger", oldprice: "6.90", price: "5.90" },
      { src: Burrito3, name: "Burrito", oldprice: "6.00", price: "4.90" },
      { src: Pizza1, name: "Mixed Pizza", oldprice: "6.00", price: "4.90" }
    ],
    menuTwo: [
      {
        src: Fries,
        name: "Chillie fries",
        sale: "sale",
        oldprice: "3.00",
        price: "2.50"
      },
      {
        src: Taco1,
        name: "Deli Taco Crunchy",
        sale: "sale",
        oldprice: "6.00",
        price: "4.90"
      },
      {
        src: Burger2,
        name: "Meal Burger",
        sale: "sale",
        oldprice: "6.90",
        price: "5.90"
      },
      { src: PizzaMeat, name: "Beef Pizza", price: "6.90" },
      { src: PizzaPepperoni, name: "Pepparoni Pizza", price: "4.90" },
      { src: BurgerShop1, name: "Cheese Burger", price: "3.90" },
      { src: FriedChicken, name: "Fried Chicken", price: "3.50" },
      { src: Taco2, name: "Avoca Deli Taco", price: "5.00" }
    ],
    showMenu: true
  };
  render() {
    let menuOne = null;
    let menuTwo = null;

    if (this.state.showMenu) {
      menuOne = <MenuOne content={this.state.menu} />;
      menuTwo = <MenuTwo content={this.state.menuTwo} />;
    }
    return (
      <div className="shop">
        <div className="shop__image">
          <div className="shop__image--cont">
            <h2>All</h2>
            <div className="shop__image--para">
              <ul className="shop__image--lists">
                <li>Home</li>
                <li>&#x3e;</li>
                <li>All</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ################# sideleft component ############# */}
        <div className="shop__categories">
          <SideLeft />
        </div>

        {/* ################# end sideleft component ############# */}

        <div className="shop__main">
          <div className="shop__main--sellers">
            <div className="shop__main--head">
              <h2>Best Sellers</h2>
              <p>
                Show all <span>&#x3e;</span>
              </p>
            </div>
            {menuOne}
          </div>

          <div className="shop__main--all">
            <div className="shop__main--heads">
              <h2>All</h2>
              <div className="shop__main--para">
                <svg>
                  <use xlinkHref={`${Sprite}#icon-funnel`} />
                </svg>
                <label>Filter</label>
                <select id="filter">
                  <option value="Best Selling">Best Selling</option>
                  <option value="Alphabetically A-Z">Alphabetically A-Z</option>
                  <option value="Alphabetically Z-A">Alphabetically Z-A</option>
                  <option value="Price, low to high">Price, low to high</option>
                  <option value="Price, high to low">Price, high to low</option>
                </select>
              </div>
            </div>
            {menuTwo}
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
