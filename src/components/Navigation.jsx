import React, {useState} from 'react'
import logo_image from '../assets/images/DHC.jpg'
import menu_image from '../assets/images/menu.png'
import close_icon from '../assets/images/close.png'
import { NavLink } from 'react-router-dom'



const Navigation = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleNavBar = () => {
    setIsActive(!isActive)
  }
  const closeNavBar = () => {
    setIsActive(false)
  }
  return (
    <div>
      <header className='header'>
        <div className="logo">
            <img src={logo_image} alt="" className="logo_image" />
        </div>
        <div className={isActive ? "navbar active" : "navbar"}>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#positions">Available Positions</a></li>
                <li><a href="#candidates">Available Candidates</a></li>
                <li><a href="#submit">Submit Your CV</a></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
            <button className="btn">Login</button>
        </div>
        <div className="menu" onClick={toggleNavBar}>
          {isActive ? (
            <img src={close_icon} alt="" className="close_icon" />
          ) : (
            <img src={menu_image} alt="" className="menu_image" />
          )}
        </div>
       
      </header>

    </div>
  )
}

export default Navigation
