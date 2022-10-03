import { createSelector } from "reselect";
import CartItem from "../../components/cart-items/cart-items";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectTotalAmount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) =>
        accumulator + cartItem.quantity * cartItem.price,
      0
    )
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
);
