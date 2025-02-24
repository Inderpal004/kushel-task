import React from "react";
import "./Testimonials.css";
import slide365 from "../../assets/slides365.png";
import codepixl from "../../assets/codepxl.png";
import madfish from "../../assets/madfish.png";

const testimonials = [
  {
    logo: slide365,
    text: "Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.",
    name: "Anu Koteshwara",
    company: "Slide 365",
  },
  {
    logo: codepixl, 
    text: "Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.",
    name: "Ronnie Chatterjee",
    company: "Codepixl",
  },
  {
    logo: madfish, 
    text: "Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.",
    name: "Matt Reeder",
    company: "Madfish",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>
        Hear from our <span className="testimonials-highlight">Satisfied</span> Clients
      </h2>
      <p className="sub-text">We have Worked With Amazing Business</p>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-logo">
              <img src={testimonial.logo} alt={testimonial.company} />
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <hr />
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-company">{testimonial.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
