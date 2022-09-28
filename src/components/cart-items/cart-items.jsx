import React from "react";
import "./cart-items.scss";

const CartItem = ({name, imageUrl, price}) => (
    <div>
        <div className="item-image" style={{backgroundImage: `url(${imageUrl})`}} />
        {name}  {price}
    </div>
);

export default CartItem;