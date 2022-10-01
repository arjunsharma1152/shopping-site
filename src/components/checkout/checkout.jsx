import React from "react";

import "./checkout.scss";

import { connect } from "react-redux";

import CartItem from "../cart-items/cart-items";

const CheckOut = ({ cartItems }) => (
  <div className="checkout-collection">
    {cartItems.map(({ id, name, imageUrl, price, quantity }) => (
      <div className="checkout-item">
        <img src={imageUrl} />
        <p>{name}</p>
        <p>{price}</p>
        <p>{quantity}</p>
      </div>
    ))}
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CheckOut);
