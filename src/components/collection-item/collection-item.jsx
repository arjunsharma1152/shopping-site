import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action";
import "./collection-item.scss";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <img className="image" src={imageUrl} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button className="add-item" onClick={() => addItem(item)}>
        Add to Cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
