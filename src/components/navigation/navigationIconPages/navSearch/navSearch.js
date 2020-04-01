import React from "react";
import "./navSearch.scss";

import Sprite from "../../../../assets/images/sprite.svg";

const navSreach = props => {
  return (
    <div className="navSearch">
      <div className="navSearch__title">
        <div className="navSearch__close" onClick={props.show}>
          <svg>
            <use xlinkHref={`${Sprite}#icon-cross`} />
          </svg>
        </div>
        <h2>Type and Enter</h2>
      </div>
      <form action="#">
        <input type="text" placeholder="Search anything" />
        <button type="submit">
          <svg>
            <use xlinkHref={`${Sprite}#icon-magnifying-glass`} />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default navSreach;
