import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action";
import "./collection-item.scss";
import Button from "@mui/material/Button";
import Aos from "aos";
import 'aos/dist/aos.css';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="collection-item" data-aos="fade-up" data-aos-duration="1000">
      <img className="image" src={imageUrl} />
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">₹ {price}</div>
      </div>
      <Button
        variant="contained"
        className="add-item"
        onClick={() => addItem(item)}
      >
        Add to Cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
