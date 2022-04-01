import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/SideBar'
import LikeBox from '../../components/likebox/LikeBox'


export default function LikePage() {
  return (
      <div>
    <Navbar/>
    <div className="video-container">
    <SideBar/>
    <LikeBox/>
    </div>

    </div>
  )
}
