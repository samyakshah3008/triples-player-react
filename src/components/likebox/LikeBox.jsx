import React from "react";
import { Link } from "react-router-dom";
import { useLike } from "../../contexts/like-context";
import { useWatchLater } from "../../contexts/watch-later-context";
import Card from "../card/Card";
import Card2 from "../card/Card2";

export default function LikeBox() {
  const { like } = useLike();
  const likeId = like.like.map((item) => item._id);
  const { watchLater } = useWatchLater();
  const watchLaterId = watchLater.watchLater.map((item) => item._id);

  return (
    <div>
      {like.like.length === 0 ? (
        <div className="video-listing-container">
          <div className="page-title">Liked video (0) </div>
          <div className="page-video-container">
            <div className="no-video-message">
              There Is No Liked Video. Please Add{" "}
            </div>
            <Link to="/videolisting">
              <button className="explore-btn">Explore</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="video-listing-container">
          {like.like.map((item) => (
            <Card
              isLike={likeId.includes(item._id)}
              isWatchLater={watchLaterId.includes(item._id)}
              key={item._id}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}
