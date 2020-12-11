import React, { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"

import "./purchase.scss";
import Pizza3 from "../../assets/images/pizza-3.jpg";
import Wrap from "../../assets/images/wrap-2 (Custom).jpg";
import Burger from "../../assets/images/burger-1 (Custom).jpg";

const Purchase = () => {

  const [menus, setMenus]  = useState({})

  useEffect(() => {
    const fetchMenus = async () => {
      const { data } = await axios.get("/api/purchase")
      setMenus(data)
    }
    fetchMenus()
    
  }, [])

  console.log(menus)
  return (
    
    <div className="purchase">
      {/* {menus} */}
      <div className="purchase__wrap">
        <img src={menus.wrapImg} alt="wrap" />
        <h2>Wrap</h2>
        <p>
          <NavLink to="/shop">buy now</NavLink>
        </p>
      </div>
      <div className="purchase__pizza">
        <img src={menus.pizzaImg} alt="Pizza3" />
        <h2>Pizza</h2>
        <p>
          <NavLink to="/shop">buy now</NavLink>
        </p>
      </div>

      <div className="purchase__burger">
        <img src={menus.burgerImg} alt="Hamberger" />
        <h2>Burger</h2>
        <p>
          <NavLink to="/shop">buy now</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Purchase;
