import React from "react";
import Header from "./header";
import Home from "./home";
import "../styles/Herosection.css";
import BgVideo from "../Images/bg-video.mp4";

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      {/* 🎬 Background video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={BgVideo} type="video/mp4" />
      </video>

      {/* ✅ Add Header and Home here */}
      <Header />
      <Home />
    </section>
  );
}
