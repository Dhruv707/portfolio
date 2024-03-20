import React from "react";
import "./Contact.css";
import arrow from "../../Components/Assets/arrow_icon.png";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "230da9a4-d5b3-4026-ae1f-bb0ac51a3afb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="container">
        <div class="contact__content">
          <h2>Contact</h2>
          <h3>Don't be shy! Hit me up! 👇</h3>
          <div class="contact__icons">
            <div class="contact__icon-box">
              <span>
                <i class="fa-solid fa-map-location-dot"></i>
              </span>
              <div class="contact__info">
                <h5>Location</h5>
                <h6>Delhi, India</h6>
              </div>
            </div>
            <div class="contact__icon-box">
              <span>
                <i class="fa-solid fa-envelope-open-text"></i>
              </span>
              <div class="contact__info">
                <h5>Mail</h5>
                <a href="mailto:khatri.dhruv07@gmail.com">
                  khatri.dhruv07@gmail.com
                </a>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} className="contact-left">
            <h2>
              Get in Touch
              <hr />
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your E-mail"
              className="contact-input"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-input"
              rows="20"
              required
            ></textarea>

            <button type="submit">
              Submit <img src={arrow} alt="arrow_icon" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
