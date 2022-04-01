import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SideBar from "../../components/sidebar/SideBar";
import VideoListingBox from "../../components/videolistingbox/VideoListingBox";

export default function VideoListingPage() {
  return (
    <div>
      <Navbar />
      <div className="video-container">
        <SideBar />
        <VideoListingBox />
      </div>
    </div>
  );
}
