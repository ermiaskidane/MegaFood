import React from "react";
import { NavLink } from "react-router-dom";

import "./purchase.scss";
import Pizza3 from "../../assets/images/pizza-3.jpg";
import Wrap from "../../assets/images/wrap-2 (Custom).jpg";
import Burger from "../../assets/images/burger-1 (Custom).jpg";

const purchase = () => {
  return (
    <div className="purchase">
      <div className="purchase__wrap">
        <img src={Wrap} alt="wrap" />
        <h2>Wrap</h2>
        <p>
          <NavLink to="/shop">buy now</NavLink>
        </p>
      </div>
      <div className="purchase__pizza">
        <img src={Pizza3} alt="Pizza3" />
        <h2>Pizza</h2>
        <p>
          <NavLink to="/shop">buy now</NavLink>
        </p>
      </div>

      <div className="purchase__burger">
        <img src={Burger} alt="Hamberger" />
        <h2>Burger</h2>
        <p>
          <NavLink to="/shop">buy now</NavLink>
        </p>
      </div>
    </div>
  );
};

export default purchase;
