import { Link } from "react-router-dom";
import "./Hero.css";
import BackgroundImg from "../img/background.png";

import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="background">
        <img className="background-img" src={BackgroundImg} alt="Aprille's Background Image" />
      </div>
      <div className="content">
        <p className="intro">Hi, I'm Aprille.</p>
        <h2 className="front-end">A <span className="highlight"> front-end developer.</span> </h2>
        <div className="buttons">
          <Link to="/project" className="btn">
            My Projects
          </Link>
          <Link to="/contact" className="btn-contact">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
