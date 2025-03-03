import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">© 2025 Foodies. All rights reserved.</p>
      <p className="footer__text">
        Powered by{" "}
        <a
          className="footer__text footer__text_link"
          href="https://www.themealdb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TheMealDB API
        </a>
      </p>
    </footer>
  );
};

export default Footer;
