import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";


const NavBar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/">
        <h1>Aprille.</h1>
      </Link>
      <ul className={ click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about" target="_blank">
            About
          </Link>
        </li>
        <li>
          <Link to="/project" target="_blank">
            Project
          </Link>
        </li>
        <li>
          <Link to="/contact" target="_blank">
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#f9f9f9" }} />
        ) : (
          <FaBars size={20} style={{ color: "#f9f9f9" }} />
        )}
      </div>
    </div>
  );
}

export default NavBar