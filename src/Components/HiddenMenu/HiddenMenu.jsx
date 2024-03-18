import React from "react";
import "./HiddenMenu.css";

function HiddenMenu() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementsByClassName(sectionId)[0];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const closeHiddenMenu = () => {
    let hiddenMenu = document.querySelector(".hiddenMenu");
    hiddenMenu.classList.add("closed-menu");
    hiddenMenu.classList.remove("open-menu");
  };

  return (
    <div className="hiddenMenu closed-menu">
      <span>
        <i class="bx bx-x" onClick={() => closeHiddenMenu()}></i>
      </span>
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => {
              closeHiddenMenu();
              scrollToSection("home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => {
              closeHiddenMenu();
              scrollToSection("about");
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => {
              closeHiddenMenu();
              scrollToSection("projects");
            }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => {
              closeHiddenMenu();
              scrollToSection("contact");
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HiddenMenu;
