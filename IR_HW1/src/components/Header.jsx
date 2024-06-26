import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container pt-4">
        <h1>Taj Mahal</h1>

        <nav className="pt-4">
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Overview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/history" className="nav-link">
                History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/architecture" className="nav-link">
                Architecture
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
