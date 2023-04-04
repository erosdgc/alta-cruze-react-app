import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          AtlasCruzer
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/products" className="nav-links">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-links">
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
