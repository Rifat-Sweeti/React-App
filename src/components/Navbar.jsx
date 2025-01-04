// components/Navbar.jsx
import React from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><b className="navbar_b">F</b>OODI</h1>
      <ul className="navbar-links">
        <li><a href="#home" className="navbar-a">Home</a></li>
        <li><a href="#about" className="navbar-a">Menu</a></li>
        <li><a href="#contact" className="navbar-a">Services</a></li>
        <li><a href="#contact" className="navbar-a">Offer</a></li>
        <div className="navbar_div">
        <li><a href="#contact" className="navbar-a"><FaSearch /></a></li>
        <li><a href="#contact" className="navbar-a"><IoBagCheckOutline /></a></li>
        <a class="fancy" href="#">
          <span class="top-key"></span>
          <span class="text">Contact</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
