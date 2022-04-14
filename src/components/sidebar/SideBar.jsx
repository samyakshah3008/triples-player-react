import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import * as FaIcons from "react-icons/fa";
export default function SideBar() {
  return (
    <div className="sidebar-container">
      <Link to="/">
        {" "}
        <div className="sidebar-chips">
          <FaIcons.FaHome className="icons sidebar-icons" /> Home
        </div>
      </Link>
      <Link to="/videolisting">
        {" "}
        <div className="sidebar-chips">
          <FaIcons.FaCompass className="icons sidebar-icons" />
          Explore
        </div>
      </Link>
      <Link to="/playlist">
        {" "}
        <div className="sidebar-chips">
          <FaIcons.FaFolderPlus className="icons sidebar-icons" />
          Playlist
        </div>
      </Link>
      <Link to="/like">
        {" "}
        <div className="sidebar-chips">
          <FaIcons.FaThumbsUp className="icons sidebar-icons" />
          Likes
        </div>
      </Link>
      <Link to="/watchlater">
        {" "}
        <div className="sidebar-chips">
          <FaIcons.FaClock className="icons sidebar-icons" />
          Watch later
        </div>
      </Link>
      <Link to="/history">
        {" "}
        <div className="sidebar-chips">
          <FaIcons.FaHistory className="icons sidebar-icons" />
          History
        </div>
      </Link>
    </div>
  );
}
