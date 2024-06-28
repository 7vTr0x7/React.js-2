import React from "react";

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container pt-4">
        <h1>iPhone 15</h1>
        <nav className="pt-4">
          <ul className="nav">
            <li className="link-item">Overview</li>
            <li className="link-item">Features</li>
            <li className="link-item">Specifications</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
