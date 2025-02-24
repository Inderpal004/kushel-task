import React from "react";
import "./Services.css";
import sectionArrow from "../../assets/service-right-arrow.png";
import digitalTransformation from "../../assets/digital-transformation.png";
import webDevelopment from "../../assets/web-development.png";
import appDevelopment from "../../assets/app-development.png";
import dataMigration from "../../assets/data-migration.png";
import stack from "../../assets/stack.png";
import connection from "../../assets/connection.png";
import halfCircle from "../../assets/half-circle.png";

const services = [
  {
    id: 1,
    title: "Digital Transformation",
    img:digitalTransformation,
    features: [
      "Ecommerce Audit & Strategy",
      "Scalability Roadmap",
      "Ecommerce Platform Selection",
      "Streamlined Tech Stack",
    ],
  },
  {
    id: 2,
    title: "Store Design & Development",
    img:webDevelopment,
    features: [
      "Ecommerce Store UI/UX",
      "Theme-Based Development",
      "Custom Shopify Development",
      "Custom BigCommerce Development",
    ],
  },
  {
    id: 3,
    title: "Platform Migration",
    img: dataMigration,
    features: [
      "Magento to Shopify",
      "Shopify to BigCommerce",
      "BigCommerce to Shopify",
      "Shopify to Magento",
    ],
  },
  {
    id: 4,
    title: "Custom Tech Stack Development",
    img: stack,
    features: [
      "Checkout Customisation",
      "Custom Tech Stack",
      "Operations Automation",
      "Cloud Migration",
    ],
  },
  {
    id: 5,
    title: "Third Party Integration",
    img: connection,
    features: [
      "Payment Gateways",
      "Shipping Solutions",
      "Customer Support Tools",
    ],
  },
  {
    id: 6,
    title: "App Development",
    img: appDevelopment,
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross Platform App Development",
    ],
  },
];

const Services = () => {
  return (
    <section className="services-container" id="services">
      <img src={halfCircle} alt="half-circle" className="half-circle"/>
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          We build exceptional <strong>ecommerce</strong> stores for ambitious mid-market brands and <br /> enterprises that
          <strong> accelerate conversions.</strong> We are widely regarded as the best <br /> commerce transformation company.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-img-div">
                <div className="service-img-box">
                  <img src={service.img} alt="service-img" />
                </div>

                <span>0{service.id}</span>
            </div>
            <h3>{service.title}</h3>
            <ul>
              {service.features.map((feature, index) => (
                <li key={index}><img src={sectionArrow} className="section-arrow" alt="arrow" /> {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button className="section-btn">Start Your Project  →</button>
    </section>
  );
};

export default Services;
