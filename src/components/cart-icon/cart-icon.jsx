import React from "react";

import { ReactComponent as BagIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <BagIcon className="bag-icon" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
