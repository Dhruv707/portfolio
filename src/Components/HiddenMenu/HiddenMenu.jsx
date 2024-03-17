import React from "react";
import "./HiddenMenu.css";

function HiddenMenu() {
  return (
    <div className="hiddenMenu">
      <span>
        <i class="bx bx-x"></i>
      </span>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default HiddenMenu;