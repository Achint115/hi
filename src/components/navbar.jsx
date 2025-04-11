import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Home</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/category/men's%20clothing">Men's Clothing</Link>
        <Link to="/category/women's%20clothing">Women's Clothing</Link>
        <Link to="/register">Register</Link> {/* 👈 Correct route */}
        <Link to="/login">Login</Link>       {/* 👈 Correct route */}
      </div>
    </nav>
  );
};

export default Navbar;
