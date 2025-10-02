import React from "react";
import scss from "./Trending.module.scss";
import trend1 from "@/assets/images/trendingleft1.png";
import Image from "next/image";
import trend2 from "@/assets/images/trendingright1.png";
import trend3 from "@/assets/images/trendingright2.png";

const Trending = () => {
  return (
    <div className={scss.trending}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.content_left}>
            <Image src={trend1} alt="img" />
            <h1>
              <span>Trending</span> Crypto <br /> Market News
            </h1>
            <p>
              Set a secondary sales fee and add social links, a <br />
              description, profile and banner images, and a <br />
              description.
            </p>
            <a href="#products">
              <button>Explore NFTs</button>
            </a>
          </div>
          <div className={scss.content_right}>
            <div className={scss.content_right_card}>
              <Image src={trend2} alt="img" />
              <p>April 18, 2022</p>
              <h2>
                Few Reasons to Sell NFTs on <br /> Nico
              </h2>
            </div>
            <div className={scss.content_right_card}>
              <Image src={trend3} alt="img" className={scss.img} />
              <p>April 18, 2022</p>
              <h2>
                Few Reasons to Sell NFTs on <br /> Nico
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
