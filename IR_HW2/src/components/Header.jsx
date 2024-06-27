import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container pt-4">
        <h1>Virat Kolhi</h1>
        <nav>
          <ul className="nav pt-4">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Overview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/biography" className="nav-link">
                Biography
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/record" className="nav-link">
                Records
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
