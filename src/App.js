import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MegaFood from "./container/megafood/megafood";

import Modal from "./components/modal/modal";
import Backdrop from "./components/backdrop/backdrop";
import Shop from "./container/shop/shop";
import Feature from "./container/feature/feature";
import Contact from "./container/contact/contact";
import NavSearch from "./components/navigation/navigationIconPages/navSearch/navSearch";
import NavSignup from "./components/navigation/navigationIconPages/navSignup/navSignup";

import NavShopcart from "./components/navigation/navigationIconPages/navShopcart/navShopcart";

import Layout from "./container/layout/layout";

import "./App.scss";

class App extends Component {
  state = {
    modal: false,
    searchPage: false,
    singup: false,
    shopcart: false
  };

  openHandler = () => {
    this.setState(prevState => {
      return {
        modal: !prevState.modal
      };
    });
  };

  searchBarHandler = () => {
    this.setState(prevState => {
      return {
        searchPage: !prevState.searchPage
      };
    });
  };

  singUpHandler = () => {
    this.setState(prevState => {
      return {
        singup: !prevState.singup
      };
    });
  };

  shopcartHandler = () => {
    this.setState(prevState => {
      return {
        shopcart: !prevState.shopcart
      };
    });
  };

  render() {
    console.log(this.state.searchPage, "Searchpage");
    let modals = null;
    let page = null;
    let singupPage = null;
    let shopcartPage = null;

    if (this.state.modal) {
      modals = (
        <React.Fragment>
          <Modal open={this.openHandler} />
          <Backdrop open={this.openHandler} />
        </React.Fragment>
      );
    } else if (this.state.searchPage) {
      page = (
        <React.Fragment>
          <NavSearch show={this.searchBarHandler} />
        </React.Fragment>
      );
    } else if (this.state.singup) {
      singupPage = (
        <React.Fragment>
          <NavSignup />
          <Backdrop open={this.singUpHandler} />
        </React.Fragment>
      );
    } else if (this.state.shopcart) {
      shopcartPage = (
        <React.Fragment>
          <NavShopcart show={this.shopcartHandler} />
          <Backdrop open={this.shopcartHandler} />
        </React.Fragment>
      );
    }

    return (
      <div>
        <Layout
          openHandler={this.openHandler}
          searchBar={this.searchBarHandler}
          singup={this.singUpHandler}
          shopcart={this.shopcartHandler}
        >
          {modals}
          {page}
          {singupPage}
          {shopcartPage}
          <Switch>
            <Route path="/shop" component={Shop} />
            <Route path="/feature" component={Feature} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={MegaFood} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
