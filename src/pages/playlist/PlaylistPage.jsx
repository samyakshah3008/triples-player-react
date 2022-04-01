import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/SideBar'
import Playlistbox from '../../components/playlist/Playlistbox'


export default function PlaylistPage() {
  return (
    <div>
       <Navbar/>
    <div className="video-container">
    <SideBar/>
    <Playlistbox/>
    </div>

    </div>
  )
}
