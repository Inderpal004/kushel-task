import React from "react";
import "./PartnerSection.css";
import { FaArrowRight } from "react-icons/fa6";
import layer from "../../assets/left-layer.png";

const PartnerSection = () => {
  return (
    <section className="partner-section" id="partner">
      <img src={layer} alt="layer" className="left-layer"/>
      <h2>
        Ready to <span className="partner-highlight">Partner</span> with You for Success
      </h2>
      <p>
        We're here to help turn your entrepreneurial dreams into reality, quickly and <br /> efficiently.
        Share your needs with us and let’s get started!
      </p>
      <img src={layer} alt="layer" className="right-layer"/>
      <button className="partner-button">LET’S GET STARTED <FaArrowRight /></button>
    </section>
  );
};

export default PartnerSection;
