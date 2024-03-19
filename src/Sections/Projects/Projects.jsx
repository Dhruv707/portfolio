import React from "react";
import "./Projects.css";
import ecommerce from "../../Components/Assets/ecommerce_shop.png";
import university from "../../Components/Assets/university_home.png";
import textutils from "../../Components/Assets/textutils_dark.png";

function Projects() {
  return (
    <div className="projects">
      <div class="container">
        <div className="projects-container">
          <h3 class="new-projects">Projects🤠</h3>
          <h4>Each project is a unique piece of development</h4>
          <div className="ecommerce">
            <img src={ecommerce} alt="ecommerce_project" />
            <div className="ecommerce-text">
              <h4>E-COMMERCE 👗</h4>
              <p>
                Developed an eCommerce single page application with add to cart
                functionality, prioritizing a clean and intuitive design to
                highlight product offerings and simplify the shopping experience
                for users.
              </p>
              <span class="platforms">
                <h5>React</h5>
                <h5>SCSS</h5>
                <h5>Hooks</h5>
              </span>
              <span class="more_info">
                <a
                  href="https://github.com/Dhruv707/ecommerce2"
                  rel="noreferrer"
                  target="_blank"
                >
                  Code <i class="bx bxl-github"></i>
                </a>
                <a
                  href="https://dhruv707.github.io/ecommerce2/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo <i class="bx bx-link-external"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="ecommerce">
            <div className="ecommerce-text">
              <h4>Largest University 🏛️</h4>
              <p>
                The website provides various landing pages and a user-friendly
                navigation system with a collapsible menu for easy access to
                various sections such as home, about, courses, blog, and
                contact.
              </p>
              <span class="platforms">
                <h5>HTML</h5>
                <h5>CSS</h5>
                <h5>Javascript</h5>
              </span>
              <span class="more_info">
                <a
                  href="https://github.com/Dhruv707/university"
                  rel="noreferrer"
                  target="_blank"
                >
                  Code <i class="bx bxl-github"></i>
                </a>
                <a
                  href="https://dhruv707.github.io/university/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo <i class="bx bx-link-external"></i>
                </a>
              </span>
            </div>
            <img src={university} alt="ecommerce_project" />
          </div>
          <div className="ecommerce">
            <img src={textutils} alt="ecommerce_project" />
            <div className="ecommerce-text">
              <h4>TEXT EDITOR 📋</h4>
              <p>
                Text Utils app provides various functionalities like Word
                Counter, Character Counter, Remove extra spaces, convert to
                Uppercase, copy to clipboard, etc. It also has a dark mode
                functionality.
              </p>
              <span class="platforms">
                <h5>React</h5>
                <h5>Bootstrap</h5>
                <h5>Hooks</h5>
              </span>
              <span class="more_info">
                <a
                  href="https://github.com/Dhruv707/ReactCourse.TextUtils1"
                  rel="noreferrer"
                  target="_blank"
                >
                  Code <i class="bx bxl-github"></i>
                </a>
                <a
                  href="https://dhruv707.github.io/ReactCourse.TextUtils1/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo <i class="bx bx-link-external"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
