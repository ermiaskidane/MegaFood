import React, { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"

import "./purchase.scss";
import Pizza3 from "../../assets/images/pizza-3.jpg";
import Wrap from "../../assets/images/wrap-2.jpg";
import Burger from "../../assets/images/burger-1 (Custom).jpg";

const Purchase = () => {

  const [purchase, setPurchase]  = useState({})

  useEffect(() => {
    const fetchPurchase = async () => {
      const { data } = await axios.get("/api/purchase")
      setPurchase(data)
    }
    fetchPurchase()
    
  }, [])

  console.log(purchase)
  return (
    
    <div className="purchase">
      <div className="purchase__wrap">
        <img src={purchase.wrapImg} alt="wrap" />
        <h2>Wrap</h2>
        <p>
          <NavLink to="/shop">buy now</NavLink>
        </p>
      </div>
      <div className="purchase__pizza">
        <img src={purchase.pizzaImg} alt="Pizza3" />
        <h2>Pizza</h2>
        <p>
          <NavLink to="/shop">buy now</NavLink>
        </p>
      </div>

      <div className="purchase__burger">
        <img src={purchase.burgerImg} alt="Hamberger" />
        <h2>Burger</h2>
        <p>
          <NavLink to="/shop">buy now</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Purchase;
