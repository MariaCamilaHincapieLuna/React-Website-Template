import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className='hero-container'>
      {/* Video section */}
        <video src={`${process.env.PUBLIC_URL}/videos/video-1.mp4`} autoPlay loop muted></video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div> 
  )
}
