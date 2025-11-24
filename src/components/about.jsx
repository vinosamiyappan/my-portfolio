import React from "react";
import Image from "../Images/download(1).png";
import '../styles/About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-info">
        <div className="img-about">
          <img src={Image} alt="Amine" />
        </div>
        <div className="info-text">
          <h5>@Vinothini</h5>
          <p>Frontend Developer</p>
        </div>
      </div>

      <h3>ABOUT ME</h3>

      <div className="about-info2">
        <div className="about-text">
          <p>
            Hi! I'm <b>Vinothini,</b> a passionate and creative Web Developer based in India.
          </p>
          <p>
            I’m focused on building modern, responsive, and user-friendly websites that combine clean design with efficient functionality.
          </p>
          <p>Right now, I’m improving my skills in:</p>
          <p><span>#</span>HTML, CSS, JavaScript, and React.js</p>
          <p><span>#</span>Bootstrap and Tailwind CSS</p>
          <p><span>#</span>Building personal projects and exploring new web technologies</p>
        </div>

        <div className="photo-container">
          <img src={Image} className="profile" />
          <span className="tape tape1"></span>
          <span className="tape tape2"></span>
        </div>
      </div>
    </section>
  );
}

