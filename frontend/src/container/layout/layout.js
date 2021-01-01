import React from "react";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";

import "./layout.scss";

const Layout = (props) => {
    return (
      <>
        <Navigation
          open={props.openHandler}
          search={props.searchBar}
          signup={props.signup}
          shopcart={props.shopcart}
        />
        <main>{props.children}</main>
        <Footer />
      </>
    );
} 

export default Layout;
