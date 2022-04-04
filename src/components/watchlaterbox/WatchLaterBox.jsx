import React from "react";
import { Link } from "react-router-dom";
import { useLike } from "../../contexts/like-context";
import { useWatchLater } from "../../contexts/watch-later-context";
import Card from "../card/Card";

export default function WatchLaterBox() {
  const { watchLater } = useWatchLater();
  const { like } = useLike();
  const likeId = like.like.map((item) => item._id);

  const watchLaterId = watchLater.watchLater.map((item) => item._id);

  return (
    <div>
      {watchLater.watchLater.length === 0 ? (
        <div className="video-listing-container">
          <div className="page-title">Watch later video (0) </div>
          <div className="page-video-container">
            <div className="no-video-message">
              There Is No watch later Video. Please Add{" "}
            </div>
            <Link to="/videolisting">
              <button className="explore-btn">Explore</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="video-listing-container">
          {watchLater.watchLater.map((item) => (
            <Card
              isWatchLater={watchLaterId.includes(item._id)}
              isLike={likeId.includes(item._id)}
              key={item._id}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}
