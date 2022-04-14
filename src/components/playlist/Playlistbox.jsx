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
        {playlistArray.playlistData?.map((playlist) => (
          <PlaylistCard playlistInfo={playlist} />
        ))}
      </div>
    </div>
  );
}
