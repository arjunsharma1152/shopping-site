import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
    <div className="cart-dropdown-button">
      <Link to="/checkout">
        <CustomButton>Checkout</CustomButton>
      </Link>
    </div>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
