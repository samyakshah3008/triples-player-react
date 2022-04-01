import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/SideBar'
import WatchLaterBox from '../../components/watchlaterbox/WatchLaterBox'


export default function Watchlaterpage() {
  return (
    <div>
       <Navbar/>
    <div className="video-container">
    <SideBar/>
    <WatchLaterBox/>
    </div>

    </div>
  )
}
