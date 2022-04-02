import React from "react";
import "./card.css";
import cricketBall from "../../assets/cricket-ball.jpg";
import * as FaIcons from "react-icons/fa";

export default function Card({item}) {
  return (
    <div>
      <div className="parent">
        <div className="card-container">
          <div className="card-img-container">
            <img className="card-img" src={item.cardImg} alt="cricket-ball" />
          </div>
          <div className="card-sub-container">
            <img src={item.cardImg} className="avatar-img"></img>
            <div className="card-title"> {item.cardTitle} </div>
            <FaIcons.FaThumbsUp className="icons sidebar-icons" />
            <FaIcons.FaClock className="icons sidebar-icons" />
            <FaIcons.FaFolderPlus className="icons sidebar-icons" />
          </div>
          <div className="card-sub-container2">
            <div className="card-channel-name"> {item.cardOwner} </div>
            <FaIcons.FaCheckCircle className="icons sidebar-icons" />
          </div>
          <div className="card-sub-container3">
           {item.description}
          </div>
        </div>
      </div>
    </div>
  );
}
