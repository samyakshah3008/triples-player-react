import React from 'react'
import Historybox from '../../components/historybox/Historybox'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/SideBar'

export default function HistoryPage() {
  return (
    <div>
       <Navbar/>
    <div className="video-container">
    <SideBar/>
    <Historybox/>
    </div>
    </div>
  )
}
