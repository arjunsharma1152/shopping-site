import React, { useEffect } from "react";
import "./menu-item.scss";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

const MenuItem = ({ title, imageUrl, size, url }) => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={`${size} menu-item`} data-aos="fade-up" data-aos-duration="1000">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <Link to={url}>
          <h1 className="title">{title.toUpperCase()}</h1>
        </Link>
      </div>
    </div>
  )};

  export default MenuItem;
