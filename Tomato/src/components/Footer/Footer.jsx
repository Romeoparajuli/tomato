import React from 'react'
import './Foter.css'
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt='logo' />
                    <p>
                        At Tomato.com, we are committed to delivering fresh, delicious meals straight to your doorstep while promoting health, sustainability, and community support. Join us in making healthy eating easy and accessible for everyone.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.twitter_icon} alt="Twitter" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </div>
                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>055-526232</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>

            <hr />

            <p className='footer-copy-right'>
                © 2025 Tomato.com — All rights reserved.
            </p>
        </div>
    )
}

export default Footer
