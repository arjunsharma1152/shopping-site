import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl:
            "https://i.pinimg.com/originals/1b/72/95/1b72955f3f21f6932fb4a8bd5db54701.jpg",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "shoes",
          imageUrl: "https://bit.ly/3RkkTnf",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "women",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/women",
        },
        {
          title: "men",
          imageUrl: "https://bit.ly/3rauimz",
          size: "large",
          id: 5,
          linkUrl: "shop/men",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            url={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
