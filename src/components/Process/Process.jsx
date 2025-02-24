import React, { useState } from "react";
import "./Process.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const phases = [
  "Discovery Phase",
  "Strategy Phase",
  "Design Phase",
  "Development Phase",
  "Quality Assurance Phase",
  "Launch & Post-Launch Support Phase"
];

const Process = () => {
  const [selectedPhase, setSelectedPhase] = useState(phases[0]);

  return (
    <section className="process-section" id="process">
      <h2>Our Process</h2>
      <div className="process-container">
        <div className="process-menu">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`menu-item ${selectedPhase === phase ? "active" : ""}`}
              onClick={() => setSelectedPhase(phase)}
            >
              {phase}
            </div>
          ))}
        </div>
        <div className="process-content">
          <h2><FaMagnifyingGlass /></h2>
          <h3>{selectedPhase}</h3>
          <p>
            A discovery phase is necessary to align business goals with an engineering team, 
            avoid costly mistakes, and plan a smooth start of actual product development.
          </p>
          <p>
          Our experienced business analysts and software architects map user journeys, conduct technical analyses, and define requirements and project scope for precise cost estimation. After the discovery phase, you’ll receive a team composition plan, vision and scope document, technical and cost proposal with estimates, UX/UI prototype, and project plan based on your business objectives.
          </p>
        </div>
      </div>

      <button className="cta-button">LET’S CONNECT <FaArrowRight /></button>
    </section>
  );
};

export default Process;
