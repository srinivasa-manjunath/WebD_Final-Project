import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>This gaming website is dedicated to providing gamers with the latest news, reviews, and updates from the gaming world.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com<br />Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Follow us on social media for more updates:<br />
            <a>Facebook</a><br />
            <a>Twitter</a><br />
            <a>Instagram</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Terms of Service | Privacy Policy | Copyright © {new Date().getFullYear()} Gaming World</p>
      </div>
    </footer>
  );
};

export default Footer;
