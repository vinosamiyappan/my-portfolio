import React from "react";
import "./App.css";
import HeroSection from "./components/herosection";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Education from "./components/education";
import Project from "./components/project";
import Contact from "./components/contact";
import ScrollToTopButton from "./components/scroll";

function App() {
  return (
    <>
      
      <Header />
      <HeroSection />
      <Home />
      <About />
      <Education />
      <Project />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default App;


// //Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
// //cd my-portfolio
// //npm run
// //npm start
