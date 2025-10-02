import Welcome from "./homeSections/Welcome";
import Nft from "./nft/Nft";
import Product from "./Product/Product";
import Browse from "./browse/browse";
import Slide from "./slide/slide";
import Trending from "./trending/Trending";
import Touch from "./touch/Touch";
import Social from "./social/Social";

const HomePage = () => {
  return (
    <>
      <div id="home">
        <Welcome />
      </div>
      <div id="products">
        <Product />
      </div>
      <div id="nfts">
        <Nft />
      </div>
      <div id="browse">
        <Browse />
      </div>
      <div id="slide">
        <Slide />
      </div>
      <div id="trending">
        <Trending />
      </div>
      <div id="contact">
        <Touch />
      </div>
      <div id="social">
        <Social />
      </div>
    </>
  );
};

export default HomePage;
