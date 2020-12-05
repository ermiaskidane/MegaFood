import React, { Component } from "react";
import "./megafood.scss";

import HomeScreen from "../../components/homescreen/homescreen";
import Purchase from "../../components/purchase/purchase";
import Menu from "../../components/menu/menu";
import ImgFood from "../../components/imgfood/imgfood";

class MegaFood extends Component {
  state = {
    modal: false
  };

  openHandler = () => {
    this.setState(prevState => {
      return {
        modal: !prevState.modal
      };
    });
  };
  render() {
    return (
      <div className="megafood">
        <HomeScreen />
        <Purchase />
        <Menu />
        <ImgFood />
      </div>
    );
  }
}

export default MegaFood;
