import React, { useState, useEffect } from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import "./collection.scss";
import Loader from "react-js-loader";

const CollectionPage = (product) => {
  const [collectionData, setCollectionData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://shopzyy.onrender.com/api/items", {
        modes: "no-cors",
      });
      const alldata = await res.json();
      setCollectionData(alldata.data.products[product.product - 1]);
    };
    fetchData();
  }, []);
  return (
    <div className="collection-page">
      {collectionData ? (
        <div className="collection-items">
          <div className="title">{collectionData.title.toUpperCase()}</div>
          <div className="items">
            {collectionData.items.map((item,idx) => (
              <CollectionItem item={item} key={idx}/>
            ))}
          </div>
        </div>
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

export default CollectionPage;
