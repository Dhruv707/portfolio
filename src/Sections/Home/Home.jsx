import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="content">
          <div class="hero-main">
            <div class="hero-text">
              <h1>Software Developer</h1>
              <img
                src="https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png"
                alt="waving_hand"
              />
              <p>
                Hi, I'm Dhruv Khatri. A passionate Software Developer based in
                Delhi, India.
              </p>
              <span>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/stefan-topalovic-dev/"
                ></a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/stefvndev"
                ></a>
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
                    src="https://skillicons.dev/icons?i=js,ts"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=react,next"
                    alt="skill-icon"
                  />
                </li>
                <li>
                  <img
                    src="https://skillicons.dev/icons?i=tailwind,scss"
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
