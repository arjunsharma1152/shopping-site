import React, { useEffect, useState } from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";
import Loader from "react-js-loader";

const Directory = () => {
  const [directory, setDirectory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://shopzyy.onrender.com/api/directory", {
        modes: "no-cors",
      });
      const alldata = await res.json();
      setDirectory(alldata.data.directory);
    };
    fetchData();
  }, []);

  return (
    <div className="directory-menu">
      {directory ? (
        directory.map(({ title, _id, imageUrl, size, linkUrl }) => (
          <MenuItem
            key={_id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            url={linkUrl}
          />
        ))
      ) : (
        <div className="homepage-loader">
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

export default Directory;
