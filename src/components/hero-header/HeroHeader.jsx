import React from 'react'
import { Link } from 'react-router-dom'
import "./heroheader.css"


export default function HeroHeader() {

    const watchNowHandler = () => {
        console.log("clicked")

    }

  return (
    <div>
        <div className="hero-container">
            
                <h2 className='hero-header-title'>Learn New trends with</h2>
                <h1 className="logo-name">TripleS Player</h1>
                <p className="header-description">TripleS is a learning platform for students.</p>
          <Link to = "/videolisting">  <button onClick={watchNowHandler} className='watch-now-btn'>Watch now</button></Link>
                
            
        </div>
    </div>
  )
}
