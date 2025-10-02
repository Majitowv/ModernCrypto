
import React from "react";
import styles from "./Nft.module.scss";
import Image from "next/image";
import nft1 from "../../../assets/images/nftcard1.png"
import nft2 from "../../../assets/images/nftcrad2.png"
import nft3 from "../../../assets/images/nftcard3.png"
import nft4 from "../../../assets/images/nstcard4.png"


const Info = () => {
  return (
    <section className={styles.infoSection}>
      <div className="container">
        <div className={styles.infoContent}>
          <div className={styles.infoTitle}>
            <h1>UNIQUE FILES</h1>
          </div>
          <div className={styles.infoSubtitle}>
            <h2>
              How to <i>Create & Sell</i> Your NFT Files.
            </h2>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles.infoBlockItem}>
              <Image src={nft1} alt="coin" />
              <div className={styles.infoBlocktext}>
                <h1>Set Up Your Wallet</h1>
                <p>
                  Connect your wallet to Nico by clicking the wallet icon in the
                  top right corner after you've set it up.
                </p>
              </div>
            </div>

            <div className={styles.infoBlockItem}>
              <Image src={nft2} alt="coin" />
              <div className={styles.infoBlocktext}>
                <h1>Create Unique Collection</h1>
                <p>
                  Set a secondary sales fee and add social links, a description,
                  profile and banner images, and a description.
                </p>
              </div>
            </div>

            <div className={styles.infoBlockItem}>
              <Image src={nft3} alt="coin" />
              <div className={styles.infoBlocktext}>
                <h1>Download NFTs</h1>
                <p>
                  Add a title and description to your work (picture, video,
                  audio, or 3D art), then customize your NFTs with properties.
                </p>
              </div>
            </div>

            <div className={styles.infoBlockItem}>
              <Image src={nft4  } alt="coin" />
              <div className={styles.infoBlocktext}>
                <h1>Put Them Up for Sale</h1>
                <p>
                  Auctions, fixed-price listings, and declining-price listings
                  are all options. You decide how you'd like to sell your NFTs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
