import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="nav-container">
        <Link to="/">
          <div className="nav-logo">TripleS Player</div>
        </Link>
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </nav>
    </div>
  );
}
