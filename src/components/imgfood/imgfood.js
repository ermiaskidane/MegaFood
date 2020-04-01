import React from "react";
import "./imgfood.scss";
import Sprite from "../../assets/images/sprite.svg";

const imgFood = () => {
  return (
    <div className="picfood">
      <div className="picfood__content">
        <h2 className="picfood__title">Get Update</h2>
        <p>
          Subscribe our newsletter and get <br /> discount 20% off
        </p>

        <form action="#">
          <input type="email" name="email" placeholder="Enter Your Email" />
          <button>
            <svg>
              <use xlinkHref={`${Sprite}#icon-paper-plane`} />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default imgFood;
