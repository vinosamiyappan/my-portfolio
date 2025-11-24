// import React, { useState } from "react";
// import "../styles/Header.css";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//  const handleScroll = (e, targetId) => {
//   e.preventDefault();
//   const target = document.getElementById(targetId);
//   if (target) {
//     const yOffset = -70;
//     const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
//     window.scrollTo({ top: y, behavior: "smooth" });
//   }

//   if (window.location.hash === `#${targetId}`) {
//     window.history.replaceState(null, null, " ");
//   }

//   setMenuOpen(false);
// };


//   return (
//     <header>
//       <div className="logo">
//         <h3>
//           <span>S</span>V
//         </h3>
//       </div>

//       {/* Hamburger icon */}
//       <div
//         className="menu-toggle"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <i className="fa-solid fa-bars"></i>
//       </div>

//       {/* Navigation Links */}
//       <ul className={`header-list ${menuOpen ? "active" : ""}`}>
//         <li><a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
//         <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
//         <li><a href="#education" onClick={(e) => handleScroll(e, "education")}>Education</a></li>
//         <li><a href="#project" onClick={(e) => handleScroll(e, "project")}>Projects</a></li>
//         <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
//       </ul>

//       {/* Social Icons */}
//       <ul className={`header-list-icon ${menuOpen ? "active" : ""}`}>
//         <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
//         <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
//         <li><a href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-solid fa-envelope"></i></a></li>
//         <li><a href="#"><i className="fab fa-telegram"></i></a></li>
//       </ul>
//     </header>
//   );
// }
import React, { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const yOffset = -80; // offset for fixed header
      const y =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <h3>
          <span>S</span>V
        </h3>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <ul className={`header-list ${menuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
        <li><a href="#education" onClick={(e) => handleScroll(e, "education")}>Education</a></li>
        <li><a href="#project" onClick={(e) => handleScroll(e, "project")}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
      </ul>

      <ul className={`header-list-icon ${menuOpen ? "active" : ""}`}>
        <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
        <li><a href="https://mail.google.com/mail/u/0/#inbox"><i className="fa-solid fa-envelope"></i></a></li>
        <li><a href="#"><i className="fab fa-telegram"></i></a></li>
      </ul>
    </header>
  );
}
