import React from "react";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { usePlaylist } from "../../contexts/playlist-context";
import PlaylistCard from "../card/PlaylistCard";
import "./playlistbox.css";

export default function Playlistbox() {
  const [createPlaylistModal, setCreatePlaylistModal] = useState(false);
  const [playlistName, setPlaylistName] = useState({ playlistName: "" });

  const playlistHandler = () => {
    setCreatePlaylistModal(false);
  };

  const { playlistArray } = usePlaylist();
  return (
    <div>
      <div className="video-listing-container">
        <div className="main-container playlist-container"></div>

        <div
          className="create-playlist-modal-wrapper"
          style={
            createPlaylistModal === false
              ? { display: "none" }
              : { display: "flex" }
          }
        >
          <div className="create-playlist-modal">
            <div className="space-between modal-close-button">
              {" "}
              <h4 className="text-sm">PlayList</h4>{" "}
              <FaIcons.FaTimesCircle
                className="icons tools-icon "
                onClick={() => setCreatePlaylistModal(false)}
              />
            </div>
            <div className="input-playlist-wrapper">
              <input
                type="text"
                className="input"
                placeholder="Enter playlist Name"
                onChange={(event) =>
                  setPlaylistName((prev) => ({
                    ...prev,
                    playlist: event.target.value,
                  }))
                }
              />
            </div>
            <button
              className="btn-playlist-create center"
              onClick={() => playlistHandler()}
            >
              {" "}
              <FaIcons.FaPlusCircle className="icons tools-icon icon-circle-plus" />
              Create New Playlist
            </button>
          </div>
        </div>

        {playlistArray.playlistData?.map((playlist) => (
          <PlaylistCard playlistInfo={playlist} />
        ))}
      </div>
    </div>
  );
}
