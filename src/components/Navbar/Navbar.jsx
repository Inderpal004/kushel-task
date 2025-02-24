import React from 'react';
import "./Navbar.css";
import logo from "../../assets/kds-logo.png";

const Navbar = () => {
  return (
    <nav className='navbar' id='navbar'>
        <div className="left-nav">
            <img src={logo} alt="logo" className='logo'/>
        </div>
        <div className="right-nav">
            <ul className='nav-list'>
                <li><a href="#home" className='nav-item nav-active'>Home</a></li>
                <li><a href="#hero" className='nav-item'>About Us</a></li>
                <li><a href="#services" className='nav-item'>Service</a></li>
                <li><a href="#technologies" className='nav-item'>Portfolio</a></li>
            </ul>
            <a href="#contact" className='contact-btn'>Contact Us</a>
        </div>
    </nav>
  )
}

export default Navbar