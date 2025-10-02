import React from "react";
import Slide from "../../../assets/images/Frame 1000001293.png"
import Image from "next/image";
import scss from './slide.module.scss'
const slide = () => {
  return (
    <div>
      <div className="container">
        <div className={scss.slide}>
            <Image src={Slide} alt="img" className={scss.img}/>
        </div>
      </div>
    </div>
  );
};

export default slide;
