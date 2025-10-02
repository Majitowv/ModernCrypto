import Image from "next/image";
import scss from "./Welcome.module.scss";
import Glav from "../../../assets/images/welcomeglav.png";
import Glavto from "../../../assets/images/glav2.png";
import Zi from "../../../assets/images/rigth.png";
import Eye from "../../../assets/images/eye.png";

const Welcome = () => {
  return (
    <section className={scss.welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.content_left}>
            <h1>
              Buy, Create & <br />
              Sell <span>Unique NFTs </span> File.
            </h1>
            <p>
              NFTs are used for digital art and collectibles, GameFi <br />
              projects, metaverses, and more.
            </p>
            <a href="#products">
              <button>Explore NFTs</button>
            </a>
            <Image className={scss.zi} src={Zi} alt="img" />
            <div className={scss.Nico}>
              <div className={scss.Nico_first}>
                <Image src={Eye} alt="img" />{" "}
                <h2>Nico NFT Marketplace Overview</h2>
              </div>
              <div className={scss.Nico_content}>
                <div className={scss.Nico_card}>
                  <h4>World Arts</h4>
                  <h3>30.000 +</h3>
                </div>
                <div className={scss.Nico_card}>
                  <h4>Digital Artists</h4>
                  <h3>17.000 +</h3>
                </div>
                <div className={scss.Nico_card}>
                  <h4>Live Auctions</h4>
                  <h3>22.000 +</h3>
                </div>
                <div className={scss.Nico_card}>
                  <h4>Unique Auctions</h4>
                  <h3>50.000 +</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={scss.content_right}>
            <Image src={Glav} alt="img" className={scss.glav} />
            <Image src={Glavto} alt="img" className={scss.glavto} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
