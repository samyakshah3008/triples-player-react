import React from "react";
import { useState, useReducer } from "react";
import { useEffect } from "react";
import { useLike } from "../../contexts/like-context";
import { useVideoList } from "../../contexts/video-listing-context";
import { useWatchLater } from "../../contexts/watch-later-context";
import Card from "../card/Card";
import "./video-listing-box.css";

const filteredList = [
  "ALL",
  "HORROR",
  "COMEDY",
  "THRILL AND ACTION",
  "DOCUMENTARY",
];

export default function VideoListingBox() {
  const [filter, setFilter] = useState("ALL");
  const [filteredData, setFilteredData] = useState([]);
  const { videoList } = useVideoList();

  const { like } = useLike();

  const { watchLater } = useWatchLater();

  const watchLaterId = watchLater.watchLater.map((item) => item._id);
  const likeId = like.like.map((item) => item._id);

  useEffect(() => {
    setFilteredData(
      videoList.filter((data) =>
        filter === "ALL"
          ? true
          : data.categoryName.toLowerCase() === filter.toLowerCase()
      )
    );
  }, [filter]);
  return (
    <div>
      <div className="chips-container">
        {filteredList.map((element) => {
          return (
            <button
              key={element}
              onClick={() => setFilter(element)}
              className={` chips ${filter === element && "chip-active"}`}
            >
              {element}
            </button>
          );
        })}
      </div>
      <div className="video-listing-container">
        {filteredData.map((item) => (
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
