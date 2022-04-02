import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });

  const { setUser } = useAuth();

  const changeHandler = (e) => {
    setUserDetail((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const loginHandler = async (isUser) => {
    try {
      const loginData = await axios.post(
        "/api/auth/login",
        isUser
          ? { email: "adarshbalika@gmail.com", password: "adarshBalika123" }
          : userDetail
      );
      setUser({
        user: loginData.data.foundUser,
        token: loginData.data.encodedToken,
      });
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-box">
          <div className="login-title">Login</div>
          <div className="input-container">
            <div className="input-title">Email:</div>
            <input
              name="email"
              onChange={(e) => changeHandler(e)}
              value={userDetail.email}
              type="email"
              placeholder="Enter email"
              className="input-field"
            />
          </div>
          <div className="input-container">
            <div className="input-title">Password:</div>
            <input
              name="password"
              onChange={(e) => changeHandler(e)}
              value={userDetail.password}
              type="password"
              placeholder="Enter password"
              className="input-field"
            />
          </div>
          <button
            onClick={() => loginHandler(false)}
            className="input-login-btn"
          >
            Login
          </button>
          <div
            onClick={() => loginHandler(true)}
            className="test-credential-login-link"
          >
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
