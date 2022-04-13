import React from "react";
import { useParams } from "react-router-dom";
import { usePlaylist } from "../../contexts/playlist-context";
import "../../components/card/card.css";
import * as FaIcons from "react-icons/fa";
import { useAuth } from "../../contexts/auth-context";
import axios from "axios";
import "./playlistvideo.css";

export default function PlaylistVideo() {
  const { playlistId } = useParams();
  const { playlistArray, setPlaylistArray } = usePlaylist();
  const { user } = useAuth();
  const playlist = playlistArray.playlistData.filter(
    (element) => element._id === playlistId
  );

  const deleteParticularVideo = async (videoId, playlistId) => {
    const deleteParticularVideoResponse = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      { headers: { authorization: user.token } }
    );

    setPlaylistArray({
      playlistData: playlistArray.playlistData.map((el) => {
        if (el._id === deleteParticularVideoResponse.data.playlist._id) {
          return deleteParticularVideoResponse.data.playlist;
        }
        return el;
      }),
    });
  };

  return (
    <div>
      <div className="parent flex-display">
        {playlist[0].videos.map((item) => (
          <div className="card-container">
            <div className="card-img-container">
              <img className="card-img" src={item.cardImg} alt="cricket-ball" />
            </div>
            <div className="card-sub-container">
              <img src={item.cardImg} className="avatar-img"></img>
              <div className="card-title"> {item.cardTitle} </div>
              <FaIcons.FaTrash
                onClick={() => deleteParticularVideo(item._id, playlistId)}
                className="icons sidebar-icons"
              />
            </div>
            <div className="card-sub-container2">
              <div className="card-channel-name"> {item.cardOwner} </div>
              <FaIcons.FaCheckCircle className="icons sidebar-icons" />
            </div>
            <div className="card-sub-container3">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
