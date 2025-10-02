import Link from "next/link";
import scss from "./Header.module.scss";
import Logo from "../../../assets/images/headerlogo-page-1.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <h1>KNFT.</h1>
          <div className={scss.content_nav}>
            <a href="#home">Home</a>
            <a href="#products">All NFTs</a>
            <a href="#nfts">Team</a>
            <a href="#trending">Terms & Co.</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact">
          <button>Get in Touch</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
