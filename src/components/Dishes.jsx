// components/Navbar.jsx
import React from "react";
import "./Dishes.css";
import FattoushSalad from "./Images/Fattoushsalad.png";
import VegSalad from "./Images/Vegetablesalad.png";
import EggSalad from "./Images/EggSalad.png";

const Dishes = () => {
    return (
        <section class="menu-section">
            <h2 class="section-title">Standout Dishes <br /> From Our Menu</h2>
            <div class="card-container">
                <div class="card">
                    <div class="card-header">
                        <img src={FattoushSalad} alt="Fattoush Salad" />
                        <span class="like-icon">❤️</span>
                    </div>
                    <div class="card-body">
                        <h3 class="dish-title">Fattoush Salad</h3>
                        <p class="dish-description">Description of the item</p>
                        <div class="card-footer">
                            <span class="price">$24.00</span>
                            <span class="rating">⭐ 4.9</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <img src={VegSalad} alt="Vegetable Salad" />
                        <span class="like-icon">❤️</span>
                    </div>
                    <div class="card-body">
                        <h3 class="dish-title">Vegetable Salad</h3>
                        <p class="dish-description">Description of the item</p>
                        <div class="card-footer">
                            <span class="price">$26.00</span>
                            <span class="rating">⭐ 4.6</span>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <img src={EggSalad} alt="Egg Vegi Salad" />
                        <span class="like-icon">❤️</span>
                    </div>
                    <div class="card-body">
                        <h3 class="dish-title">Egg Vegi Salad</h3>
                        <p class="dish-description">Description of the item</p>
                        <div class="card-footer">
                            <span class="price">$23.00</span>
                            <span class="rating">⭐ 4.5</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dishes;