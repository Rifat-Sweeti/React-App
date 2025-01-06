// components/Navbar.jsx
import React from "react";
import "./Hero.css";
import intersectImage from "./Images/Intersect.png";

const Hero = () => {
    return (
        <section class="hero-section">
            <div class="content">
                <h1 class="headline">Dive into Delights <br /> Of Delectable <span>Food</span></h1>
                <p class="subtext">
                    Where Each Plate Weaves a Story of Culinary <br /> Mastery and Passionate Craftsmanship
                </p>
                <div class="buttons">
                    <button class="order-now">Order Now</button>
                    <button class="watch-video">
                        <span>&#9658;</span> Watch Video
                    </button>
                </div>
            </div>
            <div class="image-container">
                <div className="main-image">
                    <div className="circle">
                        <img src={intersectImage} alt="Intersect" />
                    </div>
                </div>
                <div class="food-cards">
                    <div class="card">
                        <div class="food-image spicy-noodles"></div>
                        <p>Spicy noodles</p>
                        <p>$18.00</p>
                    </div>
                    <div class="card">
                        <div class="food-image vegetarian-salad"></div>
                        <p>Vegetarian salad</p>
                        <p>$23.00</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;