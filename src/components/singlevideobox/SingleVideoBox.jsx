import React from "react";
import "./singlevideobox.css";
import { useParams } from "react-router-dom";
import { useSingleVideo } from "../../contexts/video-listing-context";
import "./singlevideobox.css";

export default function SingleVideoBox() {
  const { videoId } = useParams();
  const videoObj = useSingleVideo(videoId);

  return (
    <div>
      <div className="video-listing-container flex-row">
        <iFrame
          className="iFrame-class"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iFrame>
        <div className="single-video-title"> {videoObj?.cardTitle} </div>

        <div className="single-video-description">
          {" "}
          {videoObj?.description}{" "}
        </div>
      </div>
    </div>
  );
}
