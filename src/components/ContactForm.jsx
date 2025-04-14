import React from 'react'

const ContactForm = () => {
  return (
    <div>
      <div className="contactForm section">
        <div className="container">
            <div className="title">
                <h2>Send Us a message</h2>
                <p>We looking forward to hearing from you.</p>
            </div>
            <div className="contentBox">
                <form action="" className="form">
                    <div className="inputBox">
                        <label htmlFor="">Name
                            <input type="text" placeholder='Enter your name' className='textInput' />
                        </label>
                        <label htmlFor="">Company
                            <input type="text" placeholder='Company name' className='textInput'/>
                        </label>
                    </div>
                    <div className="inputBox">
                    <label htmlFor="">Phone
                            <input type="text" placeholder='Enter your phone number'className='textInput' />
                        </label>
                        <label htmlFor="">Email
                            <input type="text" placeholder='Enter email' className='textInput'/>
                        </label>
                    </div>
                    <div className="inputBox">
                    <label htmlFor="">Division
                            <select className='textInput'>
                                <option value="operational">Operational</option>
                                <option value="humanResource">Human Resource</option>
                                <option value="marketing">Marketing</option>
                                <option value="technicalSupport">Technical Support</option>
                            </select>
                        </label>
                        <label htmlFor="">Subject
                            <input type="text" placeholder='Enter subject' className='textInput'/>
                        </label>
                    </div>
                    <label htmlFor="">Message
                        <textarea name="" id="" cols="30" rows="10" placeholder='Enter your message' className='textInput'></textarea>
                    </label>   
                    <button className='btn'>Send Message</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
