import React from "react";
import "../styles/Contact.css";

export default function contact() {
  return (
    <>
     
      {/* Contact Section */}
      <section className="contact" id="contact">
        <h3>
          Get in Touch <i className="fa-regular fa-message"></i>
        </h3>

        <div className="container">
          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>vinosamiyappan@gmail.com</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>+91 8072303474</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <p>Oddanchatram, Dindigul</p>
              </div>
             

              {/* Social Icons */}
              <div className="social-links-contact">
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
