// src/App.jsx
import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Popular from "./components/Popular";
import Dishes from "./components/Dishes";
import Testimonals from "./components/Testimonals";
import OurStoryServices from "./components/OurStoryServices";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Popular />
      <Dishes />
      <Testimonals />
      <OurStoryServices />
      <Footer />
    </div>
  );
};

export default App;