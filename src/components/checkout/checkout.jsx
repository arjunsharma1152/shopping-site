import React from "react";

import "./checkout.scss";

import { connect } from "react-redux";

import {
  selectCartItems,
  selectTotalAmount,
} from "../../redux/cart/cart-selector";

import { removeItemfromCart } from "../../redux/cart/cart-action";

import { createStructuredSelector } from "reselect";

const CheckOut = ({ cartItems, totalAmount, removeItem }) => (
  <div className="checkout-collection">
    {cartItems.length !== 0 ? (
      <div className="collection-table">
        <table>
          <tr className="table-header">
            <td>ITEM</td>
            <td>NAME</td>
            <td>PRICE</td>
            <td>QTY</td>
            <td>REMOVE</td>
          </tr>
          {cartItems.map((cartItem) => (
            <tr>
              <td>
                <img src={cartItem.imageUrl} alt="product" />
              </td>
              <td className="">{cartItem.name}</td>
              <td>{cartItem.price}</td>
              <td>{cartItem.quantity}</td>
              <td className="remove" onClick={() => removeItem(cartItem)}>
                X
              </td>
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

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemfromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
