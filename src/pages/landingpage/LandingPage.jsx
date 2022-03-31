import React from 'react'
import HeroHeader from '../../components/navbar/hero-header/HeroHeader'
import Navbar from '../../components/navbar/Navbar'
import "./landingpage.css"

export default function LandingPage() {
  return (
    <div>
         <div className="home-container">
            <img
                src="https://res.cloudinary.com/dhqxln7zi/image/upload/v1648118531/new_vohp8t.jpg"
                alt="landing"
                className="responsive-images landing-image"
            />
            <div className="landing-container">
            <Navbar/>
        <HeroHeader/>
            </div>
        </div>
        
    </div>
  )
}
