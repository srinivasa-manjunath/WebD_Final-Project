import React from 'react';
import { Link } from 'react-router-dom';
import IMG from '../images/logo.jpg';
import './AboutUs.css';
import Navbar from '../Navbar/navbar';

const AboutUs = () => {
  return (
    <><Navbar /><div id='maincontainer'>
      <div id='aboutus-container'>
        <div id='aboutus-image-container'>
          <img src={IMG} alt='About Us' id='aboutusimage' />
        </div>
        <div id='aboutus-text-container'>
          <p>Welcome to our gaming website! We're passionate gamers who love to share our experiences,
            insights, and recommendations with fellow gaming enthusiasts. Our mission is to provide valuable content,
            and news about the latest and greatest in the gaming world. Whether you're a casual gamer, hardcore enthusiast,
            or aspiring esports pro, you'll find something here for you. Feel free to explore our website, check out our articles,
            and guides, and join our community of gamers. We're here to help you level up your gaming experience!</p>
          <p>Please don't hesitate to provide feedback or suggestions. <br /><Link to='/contactus'>Click Here</Link> <br />Happy gaming!</p>
        </div>
      </div>
    </div></>
  );
};

export default AboutUs;
