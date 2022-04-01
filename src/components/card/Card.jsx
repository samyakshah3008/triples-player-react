import React from "react";
import "./card.css";
import cricketBall from "../../assets/cricket-ball.jpg";
import * as FaIcons from "react-icons/fa";

export default function Card() {
  return (
    <div>
      <div className="parent">
        <div className="card-container">
          <div className="card-img-container">
            <img className="card-img" src={cricketBall} alt="cricket-ball" />
          </div>
          <div className="card-sub-container">
            <img src={cricketBall} className="avatar-img"></img>
            <div className="card-title">This is cricket ball</div>
            <FaIcons.FaThumbsUp className="icons sidebar-icons" />
            <FaIcons.FaClock className="icons sidebar-icons" />
            <FaIcons.FaFolderPlus className="icons sidebar-icons" />
          </div>
          <div className="card-sub-container2">
            <div className="card-channel-name">Samyak Shah</div>
            <FaIcons.FaCheckCircle className="icons sidebar-icons" />
          </div>
          <div className="card-sub-container3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ducimus
            eius possimus odit eos minima sequi earum alias aspernatur natus.
          </div>
        </div>
      </div>
    </div>
  );
}
