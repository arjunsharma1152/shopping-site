import React from "react";

import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/main-logo.svg";

import "./header-component.styles.scss";

const Header = () => (
  <div className="header">
    <NavLink className="logo-comtainer" to="/">
      <Logo className="logo" />
    </NavLink>
    <div className="options">
      <NavLink className="option" to="/shop">
        SHOP
      </NavLink>
      <NavLink className="option" to="/shop">
        CONTACT
      </NavLink>
      <NavLink className="option" to="/signin">
        SIGN IN
      </NavLink>
    </div>
  </div>
);

export default Header;
