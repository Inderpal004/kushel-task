import React from "react";
import "./WhyChooseUs.css";
import { FaMobile } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoTrophySharp } from "react-icons/io5";

const features = [
  {
    id: 1,
    icon: <FaMobile />,
    title: "Responsive Web Design",
    description: "All of our sites are built with a mobile-first approach. We make sure your site will be viewable by all."
  },
  {
    id: 2,
    icon: <FaRegHandshake />,
    title: "Consultive Approach",
    description: "We work with our clients to truly understand their business and their sales goals to build a solution perfect for them."
  },
  {
    id: 3,
    icon: <FaGraduationCap />,
    title: "Expert Advice",
    description: "With more than 20 years in web development and e-commerce consulting, there is nothing we have not seen."
  },
  {
    id: 4,
    icon: <FaFilterCircleDollar />,
    title: "Built For Conversion",
    description: "Our focus is driving more sales and leads. We build your site to optimize these conversions."
  },
  {
    id: 5,
    icon: <BsGraphUpArrow />,
    title: "Marketing Strategies",
    description: "We will help you develop the perfect strategy to get more clients, and will set up all the tools you need."
  },
  {
    id: 6,
    icon: <IoTrophySharp />,
    title: "Competitive Analysis",
    description: "We look at what the leaders in your industry are doing so that you are sure to compete with the best."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id="whyChooseUs">
      <h2>Discover why <span className="highlight">Kushel Digi Solutions</span> Stands Out</h2>
      <p className="sub-text">Discover why <strong>Kushel Digi Solutions</strong> stands out with innovative strategies and personalized service.</p>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <span className="icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
