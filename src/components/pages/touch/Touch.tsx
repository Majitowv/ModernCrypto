import React from "react";
import scss from "./Touch.module.scss";

const Touch = () => {
  return (
    <div id={scss.touch}>
      <div className="container">
        <div className={scss.touch}>
          <h1>Get in Touch</h1>
          <p>
            Set a secondary sales fee and add social links, a description,
            profile <br />
            and banner images, and a description.
          </p>
          <input type="text" placeholder="Enter your email address"/>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Touch;
