import React from "react";
import scss from "./Social.module.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Social = () => {
  return (
    <section className={scss.socialId}>
      <div className="container">
        <div className={scss.social}>
          <div className={scss.socialBlock}>
            <div className={scss.socialCircle}></div>
            <h4>example@gmail.com</h4>
            <h4>sample@yahoo.com</h4>
          </div>
          <div className={scss.socialBlock}>
            <div className={scss.socialCircle}></div>
            <h4>We are on Telegram</h4>
            <h4>@NicoCryptoChannel</h4>
          </div>
          <div className={scss.socialBlock}>
            <div className={scss.socialCircle}></div>
            <h4>+1 800 123 456 789</h4>
            <h4>+1 800 123 456 780</h4>
          </div>
        </div>
          <div className={scss.socialCard}>
            <div className={scss.socials}>
              <FaFacebookF />
            </div>
            <div className={scss.socials}>
              <FaLinkedinIn />
            </div>
            <div className={scss.socials}>
              <FaTwitter />
            </div>
            <div className={scss.socials}>
              <FaYoutube />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Social;