import React from 'react'
import AboutUs from '../components/AboutUs'
import Mission from '../components/Mission'

const About = () => {
  return (
    <div>
      <div className="about section banner">
        <div className="content">
            <h1>About Us</h1>
            <h3>Apply now and take the first step in your career journey!</h3>
        </div>
      </div>
      <AboutUs />
      <Mission />
    </div>
  )
}

export default About
