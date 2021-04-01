import React from "react";
import { Link } from "gatsby";
import "../styles/Header.styles.scss";

function Header() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        An.G
      </Link>
      <div className="options">
        <Link className="option" to="/about">
          ABOUT
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  )
}

export default Header;