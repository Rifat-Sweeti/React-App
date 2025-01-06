// components/Navbar.jsx
import React from "react";
import "./OurStoryServices.css";
import Salad from "./Images/salad.png"
import Time from "./Images/time.png"
import Cart from "./Images/cart.png"
import Gift from "./Images/gift.png"

const OurStoryServices = () => {
  return (
    <div className="our-story-section">
      <div className="story-header">
        <p className="story-subheading">OUR STORY & SERVICES</p>
        <h2 className="story-heading">Our Culinary Journey And Services</h2>
        <p className="story-description">
          Rooted in passion, we curate unforgettable dining experiences and offer
          exceptional services, blending culinary artistry with warm hospitality.
        </p>
        <button className="explore-button">Explore</button>
      </div>
      <div className="services-cards">
        <div className="service-card">
          <img src={Salad} alt="Catering" className="service-icon" />
          <h3>Catering</h3>
          <p>Delight your guests with exquisite catering services.</p>
        </div>
        <div className="service-card">
          <img
            src={Time}
            alt="Fast Delivery"
            className="service-icon"
          />
          <h3>Fast Delivery</h3>
          <p>Fresh and delicious meals delivered promptly to your door.</p>
        </div>
        <div className="service-card">
          <img
            src={Cart}
            alt="Online Ordering"
            className="service-icon"
          />
          <h3>Online Ordering</h3>
          <p>Conveniently order your favorite dishes online.</p>
        </div>
        <div className="service-card">
          <img
            src={Gift}
            alt="Gift Cards"
            className="service-icon"
          />
          <h3>Gift Cards</h3>
          <p>Give the gift of great food with Foodi Gift Cards.</p>
        </div>
      </div>
    </div>
  );
};

export default OurStoryServices;