import React from "react";
import pimg from "../Images/project-img.png";
import pimg1 from "../Images/project-img1.jpg";
import internimg from "../Images/internship.jpg";
import clogo from "../Images/company logo.jpg";
import "../styles/Project.css";
const project = () => {
  return (
    <>


      <section className="project" id="project">
        <div className="title-project">
          <h1 className="heading">PROJECTS</h1>

        </div>


        <div className="projects-container">
          <div className="project-card">
            <div className="project-content">
              <img src={pimg1} alt="E-commerce Web" className="project-image" />
              <div className="project-info">
                <h3>Enhanced Software Defect Prediction using Hybrid Deep Learning Models and Feature Engineering Techniques </h3>
                <p>
                  <b>Abstract:</b> Developed a hybrid deep learning model with feature engineering to predict software defects accurately, improving code quality and reliability in early development stages.
                </p>
                {/* <div className="tech-buttons">
                  <a href="#">HTML</a>
                  <a href="#">CSS</a>
                  <a href="#">JS</a>
                </div> */}
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <img src={pimg} alt="E-commerce Web" className="project-image" />
              <div className="project-info">
                <h3>Online flat Promoting System</h3>
                <p>
                  <b>Abstract:</b> Designed a web-based platform for promoting flats and apartments online, allowing users to list, search, and manage properties easily with a responsive and user-friendly interface.

                </p>
                {/* <div className="tech-buttons">
                  <a href="#">HTML</a>
                  <a href="#">CSS</a>
                  <a href="#">JS</a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* <div className="project-card">
            <img src={pimg1} alt="Social Dashboard" />
            <h3>Social Dashboard</h3>
            <p>A dashboard showing social media stats and analytics in real-time.</p>
            <div className="tech-buttons">
              <a href="#">React</a>
              <a href="#">CSS</a>
              <a href="#">API</a>
            </div>
          </div> */}
      {/* Certificate */}
      <section className="certificate" id="certificate">
        <h1 className="heading">CERTIFICATES</h1>
        <div className="certificate-container">
          <div className="certificate-card">
            <h3>Certified in<span> IOT security using machine learning Techniques : Existing approaches and upcoming issues.</span></h3>
            <p>Published in : Second International Conference on Recent Trends in Computer Science and Data Analytics-2024(ICRTCSDA'24) held on February 02,2024</p>
          </div>
          <div className="certificate-card">
            <h3>Certified in <span>Artificial Intelligence Enabled Distributed Edge Computing For Internet Of Things Applications.</span></h3>
            <p>Published in : National Conference on Recent Trends in Artificial intelligence and Soft Computing(NCRTAS-2024) held on 24th January 2024</p>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section className="experience" id="experience">
        <div className="title-exp">
          <h1 className="heading">EXPERIENCE</h1>
        </div>
        <div className="exp-container">
          <div className="exp-card">
            <div className="exp-content">

              <div className="exp-info">
                <div className="infos">
                  <img src={clogo} className="logo-image" />
                  <h3>Atozerv India Pvt Ltd</h3>
                </div>
                <p>
                  Currently working as a Front-End Web Development Intern at Atozerv India Pvt Ltd, contributing to the design and development of responsive user interfaces for live client projects using HTML, CSS, and JavaScript.
                </p>
                <p>Collaborating with the development team to implement clean, interactive, and cross-browser-compatible UI components, ensuring a smooth user experience across devices.</p>
              </div>
              <img src={internimg} className="exp-image" />
            </div>
          </div>
        </div>
      </section>



      {/* skill */}
      <section className="skills">
        <h1 className="heading">SKILLS</h1>
        <div className="tools">
          <ul className="list-tools">
            <li><a href="#"><i className="fa-brands fa-html5"></i> Html</a></li>
            <li><a href="#"><i className="fa-brands fa-css3-alt"></i> Css</a></li>
            <li><a href="#"><i className="fa-brands fa-js"></i>Javascript</a></li>
            <li><a href="#"><i className="fa-brands fa-bootstrap"></i>Bootstrap</a></li>
            {/* <li><a href="#"><i className="fa-brands fa-php"></i> Php</a></li> */}
            <li><a href="#"><i className=""></i> MySql</a></li>
            <li><a href="#"><i className="fa-brands fa-python"></i> Python</a></li>
            <li><a href="#"><i className="fa-brands fa-github"></i> Github</a></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default project;
