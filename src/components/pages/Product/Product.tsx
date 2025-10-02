"use client";
import scss from "./Product.module.scss";
import Person from "../../../assets/images/image 10.png";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import { useState } from "react";
import active from "@/assets/images/active.png";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const products = [
  { id: 1, name: "Cyber Samurai #575", rating: 8.5, review: 3, image: Person, category: "Hape prime" },
  { id: 2, name: "Cyber Samurai #784", rating: 7.5, review: 1, image: Person, category: "Lazy Lions" },
  { id: 3, name: "Cyber Samurai #475", rating: 15.5, review: 5, image: Person, category: "Peaceful ape" },
  { id: 4, name: "Cyber Samurai #784", rating: 7.5, review: 5, image: Person, category: "Hape prime" },
  { id: 5, name: "Cyber Samurai #784", rating: 7.5, review: 4, image: Person, category: "Lazy Lions" },
  { id: 6, name: "Cyber Samurai #475", rating: 15.5, review: 3, image: Person, category: "Peaceful ape" },
  { id: 7, name: "Cyber Samurai #999", rating: 12.5, review: 4, image: Person, category: "Hape prime" },
  { id: 8, name: "Cyber Samurai #123", rating: 9.0, review: 2, image: Person, category: "Lazy Lions" },
  { id: 9, name: "Cyber Samurai #777", rating: 11.0, review: 5, image: Person, category: "Peaceful ape" },
];

const categories = ["All", "Hape prime", "Lazy Lions", "Peaceful ape"];

const Product = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selected, setSelected] = useState("All");
  const [liked, setLiked] = useState<number[]>([]);

  const toggleShow = () => {
    setVisibleCount((prev) => (prev === 6 ? products.length : 6));
  };

  const toggleLike = (id: number) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]
    );
  };

  const handleBuy = (id: number, name: string) => {
    if (!liked.includes(id)) {
      alert(`Акчан жок эгер сен лайк бассан бекер ${name} ❤️`);
    } else {
      toast.success(`Куттуктайм!${name} 🎉`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const filteredProducts =
    selected === "All"
      ? products
      : products.filter((el) => el.category === selected);

  return (
    <div className={scss.product}>
      <div className="container">
        <div className={scss.product_nav}>
          <h1><span> Most Popular </span> NFTs</h1>
          <div className={scss.product_nav_sort}>
            {categories.map((el) => (
              <div
                key={el}
                className={`${scss.item} ${selected === el ? scss.active : ""}`}
                onClick={() => setSelected(el)}
              >
                {el}
                {selected === el && (
                  <span className={scss.bgImg}>
                    <Image src={active} alt="active" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={scss.content}>
          <div className={scss.content_card}>
            {filteredProducts.slice(0, visibleCount).map((el) => (
              <div className={scss.content_cart} key={el.id}>
                <div className={scss.like} onClick={() => toggleLike(el.id)}>
                  <h3>{liked.includes(el.id) ? <FaHeart color="red" /> : <CiHeart />}</h3>
                </div>
                <Image src={el.image} alt={el.name} width={300} />
                <div className={scss.cart_text}>
                  <h1>{el.name}</h1>
                  <div className={scss.rating}>
                    <h3><span><FaEthereum /></span> {el.rating}</h3>
                  </div>
                </div>
                <div className={scss.cart_review}>
                  <div className={scss.stars}>
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i} className={i < el.review ? scss.full : scss.empty}>★</span>
                    ))}
                  </div>
                </div>
                <button onClick={() => handleBuy(el.id, el.name)}>Buy Product</button>
              </div>
            ))}
          </div>
        </div>
        {filteredProducts.length > 6 && (
          <button className={scss.explore_button} onClick={toggleShow}>
            {visibleCount === 6 ? "Explore All NFTs" : "Show Less"}
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
