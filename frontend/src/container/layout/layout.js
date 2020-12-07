import React, { Component } from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";

import "./layout.scss";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation
          open={this.props.openHandler}
          search={this.props.searchBar}
          singin={this.props.singin}
          shopcart={this.props.shopcart}
        />
        <main>{this.props.children}</main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
