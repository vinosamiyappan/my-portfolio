import React from "react";
import Image from "../Images/download(1).png";
import "../styles/Home.css";

export default function Home() {
  return (
    <section className="home" id="home">


      {/* 🔹 Content Section */}
      <div className="home-text">
        <h2>
          Hello I'm <span>Vinothini</span> 👋🏻
        </h2>
        <h3>Web Developer</h3>
        <p>I'm a passionate Web Developer focused on building responsive,</p>
        <p style={{ marginTop: "-25px" }}>
          user-friendly, and high-performance web applications.
        </p>

        <div className="home-btn">
          <a href="#contact" className="btn" style={{ marginRight: "20px" }}>
            Contact Info
          </a>
          <a
            href="/Vinothini-CV.pdf"
            className="btn"
            download="Vinothini-CV.pdf"
          >
            Download CV <i className="fa-solid fa-download"></i>
          </a>

        </div>
      </div>

      <div className="home-img">
        <img src={Image} className="Profile" alt="Profile" />
      </div>

      <div className="socials-icon">
        <a href="#"><i className="fa-brands fa-github"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        <a
          href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
          id="email"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="#" id="telegram">
          <i className="fab fa-telegram"></i>
        </a>
      </div>
    </section>
  );
}
