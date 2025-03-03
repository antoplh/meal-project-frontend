import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import logo from "../../assets/images/LOGO.svg";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      {/* Logo */}
      <div className="nav__logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="Logo" className="nav__logo-img" />{" "}
        </Link>
      </div>

      {/* Menú hamburguesa para móviles */}
      <div className="nav__burger" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </div>

      {/* Links de navegación */}
      <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
