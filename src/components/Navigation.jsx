import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" >
      <div className="nav-container">
        <Link className="navbar-brand" to="/">Logo</Link>

        <button className="nav-toggle" onClick={toggleNavbar}>
          ☰
        </button>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link className="nav-link" to="/register" onClick={() => setIsOpen(false)}>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

