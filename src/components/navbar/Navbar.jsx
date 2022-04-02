import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import "./navbar.css";

export default function Navbar() {

  const {user, setUser} = useAuth()
 const navigate = useNavigate()

  const logoutHandler = () => {
    setUser({token: null})
    navigate("/")
  }

  return (
    <div>
      <nav className="nav-container">
        <Link to="/">
          <div className="nav-logo">TripleS Player</div>
        </Link>
        {user.token === null ? (<Link to="/login">
          <button className="login-btn">Login</button>
        </Link>) : (<button onClick={logoutHandler} className="login-btn">Logout</button>) }
        
      </nav>
    </div>
  );
}
