import React from "react";

import "./checkout.scss";

import { connect } from "react-redux";

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

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
  totalAmount: cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,
    0
  ),
});

export default connect(mapStateToProps)(CheckOut);
