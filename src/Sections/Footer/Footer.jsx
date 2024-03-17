import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="footerc">
          <h3>Copyright © 2024. All rights are reserved</h3>
          <div class="footerc__socials">
            <a
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/dhruvkhatri007/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Dhruv707"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
