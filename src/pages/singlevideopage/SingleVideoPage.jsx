import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/SideBar'
import SingleVideoBox from '../../components/singlevideobox/SingleVideoBox'


export default function SingleVideoPage() {
  return (
      <div>
          <Navbar/>
    <div className="video-container">
    <SideBar/>
    <SingleVideoBox/>
    </div>

    </div>
  )
}
