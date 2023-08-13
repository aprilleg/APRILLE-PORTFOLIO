import "./Footer.css";
import { GrMail, GrLinkedin, GrInstagram, GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <h4>Let's work together!</h4>
            <p>
              If you come across any opportunities that align with my skills,
              feel free to reach out! Let's team up and create something
              amazing!
            </p>
          </div>
          <div className="right">
            <h4>Contact Information</h4>
            <div className="contact-container">
              <div className="contacts">
                <GrMail
                  size={20}
                  style={{ color: "#010101", marginRight: "20px" }}
                />
                aprilleguevarra1@gmail.com
              </div>
              <div className="contacts">
                <GrLinkedin
                  size={20}
                  style={{ color: "#010101", marginRight: "20px" }}
                />
                Aprille Guevarra
              </div>
              <div className="contacts">
                <GrInstagram
                  size={20}
                  style={{ color: "#010101", marginRight: "20px" }}
                />
                apriloo
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
