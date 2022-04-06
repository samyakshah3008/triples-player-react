import React from 'react'
import "./singlevideobox.css"
import * as FaIcons from "react-icons/fa";


export default function SingleVideoBox() {
  return (
    <div>
        <div className="video-listing-container flex-row">
            <img className="single-video-image" src= "https://img.youtube.com/vi/iGfT6rdTS34/hqdefault.jpg" />
            <div className='single-video-title'>Launching Neog.Camp</div>
            <div className="card-sub-container2">
            <div className="card-channel-name"> Tanay Pratap </div>
            <FaIcons.FaCheckCircle className="icons sidebar-icons" />
          </div>
          <div className='single-video-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minus enim sint, accusamus aut consequuntur earum labore harum non magnam?</div>
        </div>

    </div>
  )
}
