import React from "react";
import { useState, useReducer } from "react";
import { useEffect } from "react";
import { useLike } from "../../contexts/like-context";
import { usePlaylist } from "../../contexts/playlist-context";
import { useVideoList } from "../../contexts/video-listing-context";
import { useWatchLater } from "../../contexts/watch-later-context";
import Card from "../card/Card";
import "./video-listing-box.css";
import * as FaIcons from "react-icons/fa";
import { useAuth } from "../../contexts/auth-context";
import axios from "axios";

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
  const {
    createPlaylistModal,
    setCreatePlaylistModal,
    playlistArray,
    setPlaylistArray,
    addVideo,
    setAddVideo,
  } = usePlaylist();

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

  const [playlistName, setPlaylistName] = useState({ playlistName: "" });

  const { user } = useAuth();

  const createPlaylistHandler = async () => {
    const createPlaylistResponse = await axios.post(
      "/api/user/playlists",
      { playlist: { title: playlistName.playlistName } },
      { headers: { authorization: user.token } }
    );

    setPlaylistArray({ playlistData: createPlaylistResponse.data.playlists });
  };

  useEffect(() => {
    user.token
      ? (async () => {
          try {
            const responseFromPlaylist = await axios.get(
              "/api/user/playlists",
              {
                headers: { authorization: user.token },
              }
            );

            if (responseFromPlaylist.status === 200) {
              setPlaylistArray({
                playlistData: responseFromPlaylist.data.playlists,
              });
            }
          } catch (err) {
            console.error("error", err);
          }
        })()
      : setPlaylistArray({ playlistData: [] });
  }, []);

  const eachVideoToPlaylistHandler = async (id) => {
    const addVideoToParticularPlaylist = await axios.post(
      `/api/user/playlists/${id}`,
      { video: createPlaylistModal },

      { headers: { authorization: user.token } }
    );
    setPlaylistArray({
      playlistData: playlistArray.playlistData.map((el) => {
        if (el._id === addVideoToParticularPlaylist.data.playlist._id) {
          return addVideoToParticularPlaylist.data.playlist;
        }
        return el;
      }),
    });
  };

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
      <div
        className="create-playlist-modal-wrapper"
        style={!createPlaylistModal ? { display: "none" } : { display: "flex" }}
      >
        <div className="create-playlist-modal">
          <div className="space-between modal-close-button">
            {" "}
            <h4 className="text-sm">PlayList</h4>{" "}
            <FaIcons.FaTimesCircle
              className="icons tools-icon "
              onClick={() => setCreatePlaylistModal(null)}
            />
          </div>
          <ul>
            {playlistArray.playlistData?.map((any) => {
              return (
                <li key={any._id}>
                  {" "}
                  <label style={{ color: "black" }}>
                    {" "}
                    <input
                      checked={any.videos.some(
                        (video) => video._id === createPlaylistModal?._id
                      )}
                      onChange={() => eachVideoToPlaylistHandler(any._id)}
                      type="checkbox"
                    />{" "}
                    {any.title}{" "}
                  </label>{" "}
                </li>
              );
            })}
          </ul>

          <input
            type="text"
            className="input"
            placeholder="Enter playlist Name"
            onChange={(event) =>
              setPlaylistName((prev) => ({
                ...prev,
                playlistName: event.target.value,
              }))
            }
          />
          <button
            className="btn-playlist-create center"
            onClick={createPlaylistHandler}
          >
            {" "}
            <FaIcons.FaPlusCircle className="icons tools-icon icon-circle-plus" />
            Create New Playlist
          </button>
        </div>
      </div>

      <div className="video-listing-container">
        {filteredData?.map((item) => (
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
