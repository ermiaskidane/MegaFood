// import React, {useState, useEffect } from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
// import {useDispatch, useSelector } from "react-redux";
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import MegaFood from "./container/megafood/megafood";

import Modal from "./components/modal/modal";
import Backdrop from "./components/backdrop/backdrop";
import Shop from "./container/shop/shop";
import Feature from "./container/feature/feature";
import Form from "./container/feature/form";
import Contact from "./container/contact/contact";
import Shipping from "./container/shipping/shipping";
import Payment from "./container/payment/payment";
import PlaceOrder from "./container/placeOrder/placeOrder";
import OrderScreen from "./container/orderScreen/orderScreen";
import NavSearch from "./components/navigation/navigationIconPages/navSearch/navSearch";
import NavSignin from "./components/navigation/navigationIconPages/navSignin/navSignin";
import NavSignup from "./components/navigation/navigationIconPages/navSignup/navSignup";

import NavShopcart from "./components/navigation/navigationIconPages/navShopcart/navShopcart";

import Layout from "./container/layout/layout";

import "./App.scss"; 

class App extends Component {
  state = {
    modal: false,
    searchPage: false,
    signin: false,
    signup: false,
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

  signInHandler = () => {
    this.setState(prevState => {
      console.log(this.state.signin, "handler")
      return {
        signin: !prevState.signin,
        signup: !prevState.signup,
      };
    });
  };

  // those close function are to close the backdrop
  signinClose = () => {
    this.setState(prevState => {
      return {
        signin: !prevState.signin
      };
    });
  };

  signupClose = () => {
    this.setState(prevState => {
      return {
        signup: !prevState.signup,
      };
    });
  };

  // function of navigation icon to pop up the signup form
  signupOpen  = () => {
    this.setState(prevState => {
      return {
        signup: false
      };
    });
  };

  signupHandler = () => {
    this.setState(prevState => {
      return {
        signup: !prevState.signup,
        signin: !prevState.signin
      }
    })
  }

  shopcartHandler = () => {
    this.setState(prevState => {
      return {
        shopcart: !prevState.shopcart
      };
    });
  };

  render() {
    console.log(this.state.shopcart, "App")
    console.log(this.props.menuDetail)
    let modals = null;
    let page = null;
    let signinPage = null;
    let signupPage =null;
    let shopcartPage = null;

    if (this.state.modal) {
      modals = (
        <>
          <Modal open={this.openHandler} signin={this.signInHandler} />
          <Backdrop open={this.openHandler} />
        </>
      ); 
    } else if (this.state.searchPage) {
      page = (
        <>
          <NavSearch show={this.searchBarHandler} /> 
        </>
      );
    } else if (this.state.signin) {
      signinPage = (
        <>
          <NavSignin signup={this.signupHandler}/>
          <Backdrop open={this.signinClose} />
        </>
      );
    }else if (!this.state.signup){ 
      signupPage = (
        <>
        <NavSignup signin={this.signInHandler}/>
        <Backdrop open={this.signupClose} />
        </>
      ); 
    } else if (this.state.shopcart ) {
      shopcartPage = (
        <>
          <NavShopcart show={this.shopcartHandler} signup={this.signupOpen} />
          <Backdrop open={this.shopcartHandler} />
        </>
      );
    }
    
 
    return (
      <Router>
      <div>
        <Layout
          openHandler={this.openHandler}
          searchBar={this.searchBarHandler}
          signup={this.signupOpen}
          shopcart={this.shopcartHandler}
        >
          {modals} 
          {page}
          {signinPage}
          {signupPage}
          {shopcartPage}
          <Switch>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/placeorder" component={PlaceOrder} />
            <Route path="/payment" component={Payment} />
            <Route path="/shipping" component={Shipping} />
            <Route path="/shop" component={Shop} />
            <Route path="/feature" component={Feature} />
            <Route path="/addBlog" component={Form} />
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

const mapStateToProps = state => {
  return {
    menuDetail: state.menusDetail
  }
}

export default connect(mapStateToProps)(App);
