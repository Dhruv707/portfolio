import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h3>Dhruv.dev</h3>
      <ul>
        <li href="#home">Home</li>
        <li href="#about">About</li>
        <li href="#projects">Projects</li>
        <li href="#contact">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
