import React from "react";
import { connect } from "react-redux";

import { toggleHidden } from "../../redux/cart/cart-action";

import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.scss";

const CartIcon = ({ toggleHidden }) => (
  <div className="cart-icon" onClick={toggleHidden}>
    <BagIcon className="bag-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapToDispatchToProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleHidden()),
});

export default connect(null, mapToDispatchToProps)(CartIcon);
