import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import "./heroheader.css";

export default function HeroHeader() {
  const { user } = useAuth();

  return (
    <div>
      <div className="hero-container">
        <h2 className="hero-header-title">Triple chill with</h2>
        <h1 className="logo-name">TripleS Player</h1>
        <p className="header-description">
          TripleS is platform for free movie watching
        </p>
        {user.token ? (
          <Link to="/videolisting">
            {" "}
            <button className="watch-now-btn">Watch now</button>
          </Link>
        ) : (
          <Link to="/login">
            {" "}
            <button className="watch-now-btn">Watch now</button>
          </Link>
        )}
      </div>
    </div>
  );
}
