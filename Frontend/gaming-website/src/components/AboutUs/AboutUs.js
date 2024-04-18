import React from 'react';
import { Link } from 'react-router-dom';
import IMG from '../images/logo.jpg'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div id='maincontainer'>
      <div id='aboutus-container'>
        <div d='aboutus-container2'>
            <img src={IMG} alt='' id='aboutusimage'/>
        </div>
        <div d='aboutus-container3'>
            <h2>Paradise Gaming</h2>
            <p>Welcome to our gaming website! We're passionate gamers who love to share our experiences, 
                insights, and recommendations with fellow gaming enthusiasts. Our mission is to provide valuable content, 
                and news about the latest and greatest in the gaming world. Whether you're a casual gamer, hardcore enthusiast, 
                or aspiring esports pro, you'll find something here for you. Feel free to explore our website, check out our articles, 
                and guides, and join our community of gamers. We're here to help you level up your gaming experience!</p>
                <p>Please don't hesitate to provide feedback or suggestions.<Link to='/contactus'>Click Here</Link> Happy gaming!</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
