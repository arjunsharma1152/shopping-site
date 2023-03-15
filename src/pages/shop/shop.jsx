import React, { useState, useEffect } from "react";
import "./shop.scss";
import CollectionPreview from "../../components/preview-collection/preview-collection";
import Loader from "react-js-loader";

const ShopPage = () => {
  const [shopData, setShopData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://shopzyy.onrender.com/api/items", {
        modes: "no-cors",
      });
      const alldata = await res.json();
      setShopData(alldata.data.products);
    };
    fetchData();
  }, []);
  return (
    <div className="shop-page">
      {shopData ? (
        shopData.map(({ _id, ...otherCollectionProps }) => (
          <CollectionPreview key={_id} {...otherCollectionProps} />
        ))
      ) : (
        <div className="loader">
          <Loader
            type="box-rotate-x"
            bgColor={"#04d6d6"}
            title={"LOADING...."}
            color={"#04d6d6"}
            size={100}
          />
        </div>
      )}
    </div>
  );
};

export default ShopPage;
