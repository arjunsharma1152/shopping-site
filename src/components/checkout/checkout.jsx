import React from "react";

import "./checkout.scss";

import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart-selector";

import { selectTotalAmount } from "../../redux/cart/cart-selector";

import { createStructuredSelector } from "reselect";

const CheckOut = ({ cartItems, totalAmount }) => (
  <div className="checkout-collection">
    {cartItems.length !== 0 ? (
      <div className="collection-table">
        <table>
          <tr className="table-header">
            <td>ITEM</td>
            <td>NAME</td>
            <td>PRICE</td>
            <td>QTY</td>
          </tr>
          {cartItems.map(({ id, name, imageUrl, price, quantity }) => (
            <tr>
              <td>
                <img src={imageUrl} alt="product" />
              </td>
              <td className="">{name}</td>
              <td>{price}</td>
              <td>{quantity}</td>
            </tr>
          ))}
        </table>
        <h2>Total Amount : {totalAmount}</h2>
      </div>
    ) : (
      <h1>Cart is Empty</h1>
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalAmount: selectTotalAmount,
});

export default connect(mapStateToProps)(CheckOut);
