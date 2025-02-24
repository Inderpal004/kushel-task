import React from "react";
import "./Technologies.css";
import shopify from "../../assets/shopify.png";
import magneto from "../../assets/magneto.png";
import bigCommerce from "../../assets/big-commerce.png";
import wooCommerce from "../../assets/woo-commerce.png";

const technologies = [
  {
    id: 1,
    name: "Shopify",
    description:
      "Over 4.4 million businesses are thriving on Shopify. Let's put your business right at the top with our powerful Shopify stores and mobile Apps.",
    logo: shopify,
  },
  {
    id: 2,
    name: "Magento",
    description:
      "Big brand or thriving with Magento stores are you missing out? We can build a feature-rich Magento 2 store for you to lead and scale online!",
    logo: magneto,
  },
  {
    id: 3,
    name: "BigCommerce",
    description:
      "Sell Smarter, not harder with BigCommerce! We build easy-to-use stores that grab more attention and crush the competition.",
    logo: bigCommerce,
  },
  {
    id: 4,
    name: "WooCommerce",
    description:
      "Over 4.4 million businesses are thriving on WooCommerce. Let's put your business right at the top with our powerful WooCommerce stores and mobile Apps.",
    logo: wooCommerce,
  },
  {
    id: 5,
    name: "Custom Commerce",
    description:
      "Headless e-commerce transforms e-commerce by decoupling the front-end design from back-end functionality.",
  },
  {
    id: 6,
    name: "Headless",
    description:
      "Headless e-commerce transforms e-commerce by decoupling the front-end design from back-end functionality.",
  },
];

const Technologies = () => {
  return (
    <section className="technologies-container" id="technologies">
      <h3 className="technologies-title">Technologies We Use</h3>
      <h2 className="technologies-subtitle">Building Tech-Driven E-commerce Stores</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div key={tech.id} className="tech-card">
            {
                tech.logo ? <img src={tech.logo} alt={tech.name} className="tech-logo" /> : <h4><em>{tech.name}</em></h4>
            }
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;