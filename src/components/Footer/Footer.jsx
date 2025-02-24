import React from "react";
import "./Footer.css";
import logo from "../../assets/kds-logo.png"
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-container">
                <div className="footer-section company-info">
                    <img src={logo} alt="Company Logo" className="footer-logo" />
                    <p>
                        <u>Home Address:</u> First Floor, D242, F-328, Sector 63 Rd, Noida, 201301 Uttar Pradesh
                    </p>
                    <p><u>Phone:</u> +1-585-566-2070</p>
                    <p><u>Email:</u> info@kusheldigi.com</p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#hero">About</a></li>
                        <li><a href="#services">Service</a></li>
                        <li><a href="#technologies">Portfolio</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Our Services</h4>
                    <ul>
                        <li><a href="#">Digital Transformation</a></li>
                        <li><a href="#">Store Design & Development</a></li>
                        <li><a href="#">Platform Migration</a></li>
                        <li><a href="#">Custom Tech Stack Development</a></li>
                        <li><a href="#">Third-Party Integration</a></li>
                        <li><a href="#">App Development</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">NDA Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="social-links">
                <RiInstagramFill />
                <FaPinterest />
                <FaLinkedin />
                <FaFacebook />
                <FaTwitter />
                </div>
                <a href="#navbar" className="back-to-top">Back to top ↑</a>
                <p>©2023 Kushel Digi. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
