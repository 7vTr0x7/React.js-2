import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container pt-4">
        <h1>iPhone 15</h1>
        <nav className="pt-4">
          <ul className="nav">
            <li className="link-item">
              <NavLink to="/" className="nav-link">
                Overview
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/features" className="nav-link">
                Features
              </NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/specifications" className="nav-link">
                Specifications
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
