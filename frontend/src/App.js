import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MegaFood from "./container/megafood/megafood";

import Modal from "./components/modal/modal";
import Backdrop from "./components/backdrop/backdrop";
import Shop from "./container/shop/shop";
import Feature from "./container/feature/feature";
import Contact from "./container/contact/contact";
import NavSearch from "./components/navigation/navigationIconPages/navSearch/navSearch";
import NavSignin from "./components/navigation/navigationIconPages/navSignin/navSignin";

import NavShopcart from "./components/navigation/navigationIconPages/navShopcart/navShopcart";

import Layout from "./container/layout/layout";

import "./App.scss";

class App extends Component {
  state = {
    modal: false,
    searchPage: false,
    singin: false,
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

  singInHandler = () => {
    this.setState(prevState => {
      return {
        singin: !prevState.singin
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
    let singinPage = null;
    let shopcartPage = null;

    if (this.state.modal) {
      modals = (
        <React.Fragment>
          <Modal open={this.openHandler} singin={this.singInHandler}/>
          <Backdrop open={this.openHandler} />
        </React.Fragment>
      );
    } else if (this.state.searchPage) {
      page = (
        <React.Fragment>
          <NavSearch show={this.searchBarHandler} />
        </React.Fragment>
      );
    } else if (this.state.singin) {
      singinPage = (
        <React.Fragment>
          <NavSignin />
          <Backdrop open={this.singInHandler} />
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
      <Router>
      <div>
        <Layout
          openHandler={this.openHandler}
          searchBar={this.searchBarHandler}
          singin={this.singInHandler}
          shopcart={this.shopcartHandler}
        >
          {modals}
          {page}
          {singinPage}
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
      </Router>
    );
  }
}

export default App;
