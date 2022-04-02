import React from "react";
import { useVideoList } from "../../contexts/video-listing-context";
import Card from "../card/Card";
import "./video-listing-box.css";

export default function VideoListingBox() { 

  const {videoList, setVideoList} = useVideoList()
console.log(videoList)
  return (
    <div>
      <div className="video-listing-container">
        {videoList.map((item) => (
        <Card item = {item} />
        ))}
      </div>
    

    </div>
  );
}
