import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-items/cart-items";
import "./cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(({ id, name, imageUrl, price, quantity }) => (
        <CartItem
          key={id}
          name={name}
          imageUrl={imageUrl}
          price={price}
          quantity={quantity}
        />
      ))}
    </div>
    <CustomButton>Checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
