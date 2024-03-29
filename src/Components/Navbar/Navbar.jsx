import React from "react";
import "./Navbar.css";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementsByClassName(sectionId)[0];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const openHiddenMenu = () => {
    let hiddenMenu = document.querySelector(".hiddenMenu");
    hiddenMenu.classList.remove("closed-menu");
    hiddenMenu.classList.add("open-menu");
  };

  return (
    <div className="navbar">
      <h3 onClick={() => scrollToSection("home")}>Dhruv.dev</h3>
      <ul>
        <li>
          <a href="#home" onClick={() => scrollToSection("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => scrollToSection("about")}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => scrollToSection("projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection("contact")}>
            Contact
          </a>
        </li>
        <li>
          <i
            class="fa-solid fa-bars mobile-menu"
            onClick={() => openHiddenMenu()}
          ></i>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
