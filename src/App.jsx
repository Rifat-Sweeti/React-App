// src/App.jsx
import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Popular from "./components/Popular";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Popular />
    </div>
  );
};

export default App;