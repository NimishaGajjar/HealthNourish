import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <p>
          Created with <span className="footer__heart">&hearts;</span> by Nimi
        </p>
      </div>
      <div className="footer__content">
        <div className="footer__section">
          <h4>Contact Us</h4>
          <p>Email: info@healthnourish.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Wellness St, Health City, USA</p>
        </div>
        <div className="footer__section">
          <h4>Follow Us</h4>
          <div className="footer__social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer__newsletter">
        <h4>Newsletter</h4>
        <form>
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} HealthNourish. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
