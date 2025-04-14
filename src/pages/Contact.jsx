import React from 'react'
import GetInTouch from '../components/GetInTouch'
import Parallex from '../components/Parallex'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <div>
      <div className="contact section banner" id="contact">
        <div className="content">
            <h1>Contact Us</h1>
            <h3>We would like to hear from you.</h3>
        </div>
      </div>
      <GetInTouch />
      <Parallex />
      <ContactForm />
    </div>
  )
}

export default Contact
