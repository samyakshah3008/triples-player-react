import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <div className="login-title">Login</div>
          <div className="input-container">
            <div className="input-title">Email:</div>
            <input
              type="email"
              placeholder="Enter email"
              className="input-field"
            />
          </div>
          <div className="input-container">
            <div className="input-title">Password:</div>
            <input
              type="password"
              placeholder="Enter password"
              className="input-field"
            />
          </div>
          <button className="input-login-btn">Login</button>
          <div className="test-credential-login-link">
            Login with test credential
          </div>
          <Link to="/signup">
            <div className="create-account-link">Create new account</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
