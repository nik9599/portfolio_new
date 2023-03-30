import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1> NIKHIL.</h1>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item" onClick={closeMobileMenu}>
            Home
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            About
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            Service
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
