import React from "react";
import "./HeroSection.css";
import { GiPlainCircle } from "react-icons/gi";
import { MdArrowOutward } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="badge"><GiPlainCircle /> Plan it. Design it. Build it. Get found. Make them buy.</div>
      <h1>
        Revolutionize Your E-Commerce With Expert Consulting And Redesigned Websites That Will{" "}
        <span className="hero-highlight">Grow Your Business</span>
      </h1>
      <p>
        Is your website working hard for you? A good website or e-commerce site is only as good as its
        conversion rate. No matter what your business is, your website should be selling for you. Whether
        driving customers through a checkout process or getting them to fill out a lead form, it's all about
        converting browsers into buyers.
      </p>
      <p>
        The days of simple brochure sites are gone. It’s time to increase conversion rates and generate more
        leads. Kushel Digi Solutions will work with you to ensure that your site is doing the work it should
        be doing. We provide website design and programming, search engine optimization, and conversion
        optimization services to companies of any size and any type.
      </p>
      <div className="hero-buttons">
        <button className="primary-btn">Contact Us <MdArrowOutward /></button>
        <button className="secondary-btn">Our Portfolio <MdArrowOutward /></button>
      </div>
    </section>
  );
};

export default HeroSection;
