import React from 'react'
import imageLocation from '../assets/images/location.png'
import imagePhone from '../assets/images/phone.png'
import imageEmail from '../assets/images/mail.png'

const GetInTouch = () => {
  return (
    <div>
      <div className="getInTouch section">
        <div className="container">
            <div className="title">
                <h2>GET IN TOUCH</h2>
                <h3>Don't hesitate to contact us <br/>for more information.</h3>
            </div>
            <div className="info">
                <div className="box">
                    <img src={imageLocation} alt="" />
                    <div className="text">
                        <h3>Head Office</h3>
                        <p>43 5th Avenue, Parkhurst, Randburg, 2193 Gauteng</p>
                    </div>
                </div>
                <div className="box">
                    <img src={imageEmail} alt="" />
                    <div className="text">
                        <h3>Email us</h3>
                        <p>info@dhcap.co.za</p>
                    </div>
                </div><div className="box">
                    <img src={imagePhone} alt="" />
                    <div className="text">
                        <h3>Call us</h3>
                        <p>Eugene - 083 307 4980 or Ashvin - 083 250 5885</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
