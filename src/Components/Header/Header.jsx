import React from "react";
import logoImg from "./../../img/icons/logo.svg";
import basketEmpty from "./../../img/icons/basket=empty.svg";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <Link to="/">
              <img src={logoImg} alt="Logo" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul>
              <Link to="/">Main Page</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/products">All products</Link>
              <Link to="/sale">All sales</Link>
            </ul>
          </nav>
          <div className="header__basket_empty">
            <Link to="">
              <img src={basketEmpty} alt="Empty basket" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
