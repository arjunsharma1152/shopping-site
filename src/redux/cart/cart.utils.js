export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.name === cartItemToAdd.name
  );

  console.log(cartItemToAdd)

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.name === cartItemToAdd.name
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.name === cartItemToRemove.name
  );

  if (existingItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.name === cartItemToRemove.name
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return cartItems.filter((cartItem) => cartItem.name !== cartItemToRemove.name);
};
