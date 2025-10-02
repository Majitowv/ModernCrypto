import React from "react";
import scss from "./browse.module.scss";
import Image from "next/image";
import Browse1 from "../../../assets/images/browse1.png";
import Browse2 from "../../../assets/images/browse2.png";
import Browse3 from "../../../assets/images/browse3.png";
import Browse4 from "../../../assets/images/browse4.png";

const browse = () => {
  return (
    <div className={scss.browse}>
      <div className="container">
        <h1>
          <span>Browse by</span> Category
        </h1>
        <p>
          Set a secondary sales fee and add social links, a <br />
          description, profile and banner images, and a description.
        </p>
        <div className={scss.content}>
          <div className={scss.content_up}>
            <Image src={Browse1} alt="img" />
            <Image src={Browse2} alt="img" />
          </div>
          <div className={scss.content_down}>
            <Image src={Browse3} alt="img" />
            <Image src={Browse4} alt="img" />
          </div>
          <button>Explore NFTs Category</button>
        </div>
      </div>
    </div>
  );
};

export default browse;
