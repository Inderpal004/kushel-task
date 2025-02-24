import React from 'react';
import "./Home.css";
import { FaStar } from "react-icons/fa";
import homeLaptop from "../../assets/home-laptop.png"

const Home = () => {
  return (
    <div className='home-container' id='home'>
        <div className="rating">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <span>4.8 (80+ Reviews)</span>
        </div>
        <h1>Crafting exceptional <br />ecommerce <span className='home-highlight'>experiences</span></h1>
        <p>Partner with our real people agency for <strong>shopify</strong> and <strong>bigcommerce</strong> solution</p>
        <img src={homeLaptop} alt="macbook" className='home-laptop'/>
      
    </div>
  )
}

export default Home