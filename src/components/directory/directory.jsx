import React from "react";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "watches",
          imageUrl:
            "https://i.insider.com/5cbf5a3efa99af28517a2af2?width=1000&format=jpeg&auto=webp",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://www.jeanswholesaler.in/2382-large_default/royal-spider-men-s-full-sleeves-denim-jacket-rs-0003.jpg",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "shoes",
          imageUrl:
            "https://5.imimg.com/data5/FP/WV/MY-62197866/jordan-red-black-shoes-500x500.jpg",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
