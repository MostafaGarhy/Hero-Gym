import React from 'react'
import './features.css'

function Features() {
  return (
    <div className='features-container'>
      <div className='features-header'>
        <h1>WHY CHOSE US?</h1>
        <p>PUSH YOUR LIMITS FORWARD</p>
      </div>
      <div className='row features-cards'>
        <div className='features-card'>
          <h2>EXPERTISE</h2>
          <p>Our team of experts is dedicated to providing the highest quality products and services.</p>
        </div>
        <div className='features-card'>
          <h2>INTEGRITY</h2>
          <p>We believe in building trust and transparency with our customers and partners.</p>
        </div>
        <div className='features-card'>
          <h2>COMMUNITY</h2>
          <p>We are a community of like-minded individuals who share a common passion for technology.</p>
        </div>
      </div>
    </div>
  )
}

export default Features
