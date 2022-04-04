import React from "react";
import { useState, useReducer } from "react";
import { useLike } from "../../contexts/like-context";
import { useVideoList } from "../../contexts/video-listing-context";
import { useWatchLater } from "../../contexts/watch-later-context";
import Card from "../card/Card";
import "./video-listing-box.css";

export default function VideoListingBox() {
  const [active, setActive] = useState("ALL");

  const { videoList } = useVideoList();

  const { like } = useLike();

  const { watchLater } = useWatchLater();

  const watchLaterId = watchLater.watchLater.map((item) => item._id);
  // console.log(watchLaterId)
  const likeId = like.like.map((item) => item._id);
  // console.log(likeId)

  const AllClickHandler = () => {
    setActive("ALL");
  };

  const comedyClickHandler = () => {
    setActive("COMEDY");
  };
  const horrorClickHandler = () => {
    setActive("HORROR");
  };
  const thrillClickHandler = () => {
    setActive("THRILL");
  };

  const documentaryClickHandler = () => {
    setActive("DOCUMENTARY");
  };

  // console.log(videoList)

  return (
    <div>
      <div className="chips-container">
        <button
          onClick={AllClickHandler}
          style={{ backgroundColor: active }}
          className={`${active === "ALL" && "chip-active"} chips`}
        >
          All
        </button>
        <button
          onClick={comedyClickHandler}
          className={`${active === "COMEDY" && "chip-active"} chips`}
        >
          Comedy
        </button>
        <button
          onClick={horrorClickHandler}
          className={`${active === "HORROR" && "chip-active"} chips`}
        >
          Horror
        </button>
        <button
          onClick={thrillClickHandler}
          className={`${active === "THRILL" && "chip-active"} chips`}
        >
          Thrill and action
        </button>
        <button
          onClick={documentaryClickHandler}
          className={`${active === "DOCUMENTARY" && "chip-active"} chips`}
        >
          Documentary
        </button>
      </div>
      <div className="video-listing-container">
        {videoList.map((item) => (
          <Card
            item={item}
            isLike={likeId.includes(item._id)}
            isWatchLater={watchLaterId.includes(item._id)}
            key={item._id}
          />
        ))}
      </div>
    </div>
  );
}
