"use client"
import Link from "next/link";
import scss from "./Footer.module.scss";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className={scss.footerId}>
      <div className="container">
        <div className={scss.footer}>
          <p>Copyright © 2022 Nazmul Shanto. All Rights Reserved</p>
          <nav className={scss.footerNav}>
            <Link
              href="/"
              className={`${scss.navLink} ${
                pathname === "/" ? scss.active : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${scss.navLink} ${
                pathname === "/about" ? scss.active : ""
              }`}
            >
              All NFTs
            </Link>
            <Link
              href="/team"
              className={`${scss.navLink} ${
                pathname === "/team" ? scss.active : ""
              }`}
            >
              Team
            </Link>
            <Link
              href="/terms"
              className={`${scss.navLink} ${
                pathname === "/terms" ? scss.active : ""
              }`}
            >
              Terms & Co.
            </Link>
            <Link
              href="/contact"
              className={`${scss.navLink} ${
                pathname === "/contact" ? scss.active : ""
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
