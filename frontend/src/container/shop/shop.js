import React, {useState, useEffect } from "react";
import axios from "axios"

import MenuOne from "../../components/shopContent/menuone/menuone";
import MenuTwo from "../../components/shopContent/menutwo/menutwo";
import SideLeft from "../../components/shopContent/sideleft/sideleft";

import Sprite from "../../assets/images/sprite.svg";
import "./shop.scss";

const Shop = () => {
    const [seller, setSeller] = useState([])
    const [food, setFood] = useState([])

    useEffect(() => {
      const fetchSeller = async () => {
      
        const { data } = await axios.get("/api/shop/bestsellers")

        console.log(data)
        setSeller(data)
      }
      fetchSeller()
    }, [])

  useEffect(() => {
    const fetchFood = async () => {
      const { data } = await axios.get("/api/shops/sellers")

      console.log(data)
      setFood(data)
    }
    fetchFood()
  }, [])

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
            <MenuOne content={seller} /> 
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
            <MenuTwo content={food} />
          </div>
        </div>
      </div>
    );
}

export default Shop;
