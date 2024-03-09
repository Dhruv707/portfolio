import React from "react";
import "./Home.css";
import coding from "../../Components/Assets/coding.png";

function Home() {
  return (
    <div class="home">
      <div class="container">
        <div class="content">
          <div class="hero-main">
            <div class="hero-text">
              <h1>Software Frontend Developer</h1>
              <img src={coding} alt="waving_hand" />
              <p>
                Hi, I'm Dhruv Khatri. A passionate Software Frontend Developer
                based in Delhi, India.📍
              </p>
              <span>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/stefan-topalovic-dev/"
                >
                  <i class="bx bxl-linkedin"></i>
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/stefvndev"
                >
                  <i class="bx bxl-github"></i>
                </a>
              </span>
            </div>
            <div class="hero-img"></div>
          </div>
          <div class="skills">
            <p>Tech Stack</p>
            <div class="logos">
              <ul>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=html,css"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=js,cpp"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=bootstrap,scss"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=react,"
                    alt="skill-icon"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
