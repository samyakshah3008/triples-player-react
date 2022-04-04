import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { useLike } from "../../contexts/like-context";
import { useWatchLater } from "../../contexts/watch-later-context";
import "./navbar.css";

export default function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const { like, setLike } = useLike();
  const { watchLater, setWatchLater } = useWatchLater();

  const logoutHandler = () => {
    setUser({ token: null });
    setLike({ like: [] });
    setWatchLater({ watchLater: [] });

    navigate("/");
  };

  return (
    <div>
      <nav className="nav-container">
        <Link to="/">
          <div className="nav-logo">TripleS Player</div>
        </Link>
        {user.token === null ? (
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        ) : (
          <button onClick={logoutHandler} className="login-btn">
            Logout
          </button>
        )}
      </nav>
    </div>
  );
}
