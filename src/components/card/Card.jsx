import React from "react";
import "./card.css";
import * as FaIcons from "react-icons/fa";
import { useLike } from "../../contexts/like-context";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";
import { useWatchLater } from "../../contexts/watch-later-context";
import { useEffect, useState } from "react";
import { useHistory } from "../../contexts/history-context";
import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../../contexts/playlist-context";

export default function Card({ item, isLike, isWatchLater }) {
  const { like, setLike } = useLike();
  const { user } = useAuth();
  const { watchLater, setWatchLater } = useWatchLater();
  const { history, setHistory } = useHistory();
  const navigate = useNavigate();

  useEffect(() => {
    user.token
      ? (async () => {
          try {
            const responseFromServer = await axios.get("/api/user/watchlater", {
              headers: { authorization: user.token },
            });

            if (responseFromServer.status === 200) {
              setWatchLater({ watchLater: responseFromServer.data.watchlater });
            }
          } catch (err) {
            console.error("error", err);
          }
        })()
      : setWatchLater({ watchLater: [] });
  }, []);

  const likeHandler = async () => {
    try {
      const likeResponse = await axios({
        method: "post",
        url: "/api/user/likes",
        headers: { authorization: user.token },
        data: { video: item },
      });
      setLike({ like: likeResponse.data.likes });
    } catch (error) {
      console.log(error);
    }
  };

  const removeLikeHandler = async () => {
    try {
      const removeLikeResponse = await axios({
        method: "delete",
        url: `/api/user/likes/${item._id}`,
        headers: { authorization: user.token },
        data: { video: item },
      });

      setLike({ like: removeLikeResponse.data.likes });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    user.token
      ? (async () => {
          try {
            const responseFromServerLike = await axios.get("/api/user/likes", {
              headers: { authorization: user.token },
            });

            if (responseFromServerLike.status === 200) {
              setLike({ like: responseFromServerLike.data.likes });
            }
          } catch (err) {
            console.error("error", err);
          }
        })()
      : setLike({ like: [] });
  }, []);

  useEffect(() => {
    user.token
      ? (async () => {
          try {
            const responseFromServerHistory = await axios.get(
              "/api/user/history",
              {
                headers: { authorization: user.token },
              }
            );

            if (responseFromServerHistory.status === 200) {
              setHistory({ history: responseFromServerHistory.data.history });
            }
          } catch (err) {
            console.error("error", err);
          }
        })()
      : setHistory({ history: [] });
  }, []);

  const moveToWatchLaterHandler = async () => {
    try {
      const watchLaterData = await axios({
        method: "post",
        url: "/api/user/watchlater",
        headers: { authorization: user.token },
        data: { video: item },
      });
      setWatchLater({ watchLater: watchLaterData.data.watchlater });
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWatchLaterHandler = async () => {
    try {
      const removeWatchLaterResponse = await axios({
        method: "delete",
        url: `/api/user/watchlater/${item._id}`,
        headers: { authorization: user.token },
        data: { video: item },
      });

      setWatchLater({ watchLater: removeWatchLaterResponse.data.watchlater });
    } catch (error) {
      console.log(error);
    }
  };

  const moveToHistoryHandler = async () => {
    try {
      const moveToHistoryResponse = await axios({
        method: "post",
        url: "/api/user/history",
        headers: { authorization: user.token },
        data: { video: item },
      });
      setHistory({ history: moveToHistoryResponse.data.history });
    } catch (error) {
      console.log(error);
    }
    navigate(`/videolisting/${item._id}`);
  };

  const { createPlaylistModal, setCreatePlaylistModal } = usePlaylist();

  const playlistHandler = () => {
    setCreatePlaylistModal(item);
  };

  return (
    <div>
      <div className="parent">
        <div className="card-container">
          <div className="card-img-container">
            <img
              onClick={moveToHistoryHandler}
              className="card-img"
              src={item.cardImg}
              alt="cricket-ball"
            />
          </div>

          <div className="card-sub-container">
            <img src={item.cardImg} className="avatar-img"></img>
            <div className="card-title"> {item.cardTitle} </div>
            {isLike ? (
              <FaIcons.FaThumbsUp
                onClick={removeLikeHandler}
                className="icons sidebar-icons"
              />
            ) : (
              <FaIcons.FaRegThumbsUp
                onClick={likeHandler}
                className="icon-outline-blue"
              />
            )}

            {isWatchLater ? (
              <FaIcons.FaClock
                onClick={removeFromWatchLaterHandler}
                className="icons sidebar-icons"
              />
            ) : (
              <FaIcons.FaRegClock
                onClick={moveToWatchLaterHandler}
                className="icon-outline-blue"
              />
            )}

            <FaIcons.FaFolderPlus
              onClick={playlistHandler}
              className="icons sidebar-icons"
            />
          </div>
          <div className="card-sub-container2">
            <div className="card-channel-name"> {item.cardOwner} </div>
            <FaIcons.FaCheckCircle className="icons sidebar-icons" />
          </div>
          <div className="card-sub-container3">{item.description}</div>
        </div>
      </div>
    </div>
  );
}
