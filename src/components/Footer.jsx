import React from "react";
import "./Footer.css"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-title"><b className="footer_b">F</b>OODI</h2>
          <p className="footer-description">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h3 className="footer-subtitle">Useful Links</h3>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3 className="footer-subtitle">Contact Us</h3>
          <ul className="footer-contact">
            <li>Email: example@gmail.com</li>
            <li>Phone: +64 582 248 968</li>
            <li>Social Media: Follow us!</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2023 Oodi | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;