import React from "react";
import logo_image from "../assets/images/DHC.jpg";
import linkedin_logo from "../assets/images/linkedin.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer section">
        <div className="top">
          <div className="content">
            <h2>Looking for a career change? Browse our job listings now</h2>
            <button className="btn">APPLY NOW</button>
          </div>
        </div>
        <div className="bottom">
          <div className="content">
            <div className="box">
              <div className="logo">
                <img src={logo_image} alt="" className="logo_image" />
              </div>
              <p>
                Delta Human Capital was established in 2024 in order to offer specialized recruitment in the stockbroking, asset management, hedge fund and related industries.
              </p>
            </div>
            <div className="box">
                <h3>Quick Links</h3>
                <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#positions">Available Positions</a></li>
                <li><a href="#candidates">Available Candidates</a></li>
                <li><a href="#submit">Submit Your CV</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
            </div>
            <div className="box">
                <ul>
                    <li>B-Bee - 50%</li>
                    <li>Member of APOS (registration pending)</li>
                    <li>Registered with the Department of Labour</li>
                    <li ><img src={linkedin_logo} alt="" /> LinkedIn Profile</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
            <p>Copyright © 2023 Delta Human Capital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
