// components/Navbar.jsx
import React from "react";
import "./Testimonals.css";
import Maskgroup1 from "./Images/Maskgroup1.png";
import Maskgroup2 from "./Images/Maskgroup.png";
import Maskgroup3 from "./Images/Maskgroup2.png";
import Maskgroup4 from "./Images/Maskgroup3.png";

const Testimonals = () => {
    return (
        <div className="testimonials-section">
            <div className="testimonials-container">
                <div className="chef-image">
                    <img
                        src={Maskgroup1} className="chef-photo"/>
                    <span className="chef-tag">Our Best Chef</span>
                </div>
                <div className="testimonial-content">
                    <h4 className="testimonial-heading">TESTIMONIALS</h4>
                    <h2 className="testimonial-title">What Our Customers Say About Us</h2>
                    <p className="testimonial-text">
                        "I had the pleasure of dining at Foodi last night, and <br /> I'm still raving
                        about the experience! The attention to <br /> detail in presentation and service
                        was impeccable"
                    </p>
                    <div className="customer-feedback">
                        <div className="customer-profile">
                            <img
                                src={Maskgroup2}
                                alt="Customer 1"
                                className="customer-image"
                            />
                            <img
                                src={Maskgroup3}
                                alt="Customer 2"
                                className="customer-image"
                            />
                            <img
                                src={Maskgroup4}
                                alt="Customer 3"
                                className="customer-image"
                            />
                        </div>
                        <div className="feedback-text">
                            <p>Customer Feedback</p>
                            <span>⭐ 4.9 (18.6k Reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonals;