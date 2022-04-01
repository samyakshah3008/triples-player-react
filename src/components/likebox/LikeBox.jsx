import React from "react";

export default function LikeBox() {
  return (
    <div>
      <div className="video-listing-container">
        <div className="page-title">Liked video (0) </div>
        <div className="page-video-container">
          <div className="no-video-message">
            There Is No Liked Video. Please Add{" "}
          </div>
          <button className="explore-btn">Explore</button>
        </div>
      </div>
    </div>
  );
}
