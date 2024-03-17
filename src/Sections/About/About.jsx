import React from "react";
import "./About.css";

function About() {
  return (
    <div class="about">
      <div class="container">
        <div class="about-content">
          <div class="img-side">
            <img
              src="	https://www.stefantopalovic.com/static/media/working-emoji.c5325f52b5be329995a5.png"
              alt="emoji"
              class="work-emoji"
            />
            <img
              src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
              alt="mee"
              class="img-side__main-img"
            />
            <span>
              <img
                src="https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg"
                alt="text"
              />
            </span>
          </div>
          <div class="text-side">
            <h3>About me 🚀🔥</h3>
            <h4>Software Developer based in Delhi, India 📍</h4>
            <p>
              Hey there! I'm a passionate software developer with a bachelors
              degree from prestigious IIT Roorkee. I have expertise in C++
              programming, data structures, and algorithms, and I'm also
              well-versed in front-end development technologies such as React,
              JavaScript, HTML5, and CSS3. My goal is to craft captivating web
              experiences that bring designs to life.
              <br />
              Currently, I'm actively seeking opportunities in software
              development and front-end roles where I can leverage my expertise
              in C++ and data structures, while also utilizing my front-end
              skills to create remarkable digital experiences. <br />
              If you're seeking a dedicated and motivated software developer who
              loves pushing boundaries and delivering exceptional results, let's
              connect! Together, we can shape the future of web development and
              create genuinely remarkable digital experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
