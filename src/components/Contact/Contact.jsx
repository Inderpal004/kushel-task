import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "+91",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h3 className="contact-title">
            Ready to Build Next-Level Custom Digital Solutions?
          </h3>
          <p className="contact-description">
            Please fill in the form and let’s chat to understand how we can help
            you better.
          </p>
          <div className="contact-info">
            <div className="contact-box">
              <p className="contact-label">Call Us</p>
              <p className="contact-number">+1-585-566-2070</p>
              <p className="contact-country">United States</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <h1 className="contact-form-title">Get Answers to your Questions</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                maxLength="32"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                maxLength="32"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Business Email*"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Services*</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="E-Commerce Solutions">
                E-Commerce Solutions
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Staff Augmentation">Staff Augmentation</option>
              <option value="Other">Other</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Message*"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="contact-submit">
              Let's Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
