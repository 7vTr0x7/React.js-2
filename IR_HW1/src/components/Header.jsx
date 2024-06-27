import React from "react";

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container pt-4">
        <h1>Taj Mahal</h1>

        <nav className="pt-4">
          <ul className="nav">
            <li className="nav-item">Overview</li>
            <li className="nav-item">History</li>
            <li className="nav-item">Architecture</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
