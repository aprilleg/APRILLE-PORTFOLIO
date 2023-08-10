import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
  return (
    <div className="header">
      <Link to="/" >
        Portfolio
      </Link>
    </div>
  )
}

export default NavBar