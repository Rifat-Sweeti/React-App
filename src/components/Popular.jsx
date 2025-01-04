import React from "react";
import "./Popular.css";
import pngwing4 from "./Images/pngwing4.png";
import pngwing3 from "./Images/pngwing3.png";
import pngwing6 from "./Images/pngwing6.png";
import pngwing7 from "./Images/pngwing7.png";

const Popular = () => {
    return (
        <section class="popular-categories">
            <h2 class="section-title">Customer Favorites</h2>
            <h3 class="section-subtitle">Popular Categories</h3>
            <div class="categories">
                <div class="category-card">
                    <div class="category-image">
                        <img src={pngwing4} alt="Main Dish" />
                    </div>
                    <h4>Main Dish</h4>
                    <p>(86 dishes)</p>
                </div>
                <div class="category-card">
                    <div class="category-image">
                        <img src={pngwing6} alt="Breakfast" />
                    </div>
                    <h4>Break Fast</h4>
                    <p>(12 break fast)</p>
                </div>
                <div class="category-card">
                    <div class="category-image">
                        <img src={pngwing3} alt="Dessert" />
                    </div>
                    <h4>Dessert</h4>
                    <p>(48 desserts)</p>
                </div>
                <div class="category-card">
                    <div class="category-image">
                        <img src={pngwing7} alt="Browse All" />
                    </div>
                    <h4>Browse All</h4>
                    <p>(255 items)</p>
                </div>
            </div>
        </section>
    );
};

export default Popular;