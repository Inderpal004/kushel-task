import React from "react";
import "./Clients.css";
import auxible from "../../assets/auxible.png";
import madfish from "../../assets/madfish.png";
import slide365 from "../../assets/slides365.png";
import codepxl from "../../assets/codepxl.png";
import hindware from "../../assets/hindware.png";
import deloitte from "../../assets/deloitte.png";
import usha from "../../assets/usha.png";
import cronus from "../../assets/cronus.png";
import havells from "../../assets/havells.png";
import insta from "../../assets/insta.png";

const clients = [
  { id: 1, name: "Auxible India", logo: auxible },
  { id: 2, name: "Madfish", logo: madfish },
  { id: 3, name: "Slides 365", logo: slide365 },
  { id: 4, name: "Codepxl", logo: codepxl },
  { id: 5, name: "Hindware", logo: hindware },
  { id: 6, name: "Deloitte", logo: deloitte},
  { id: 7, name: "Usha Fasteners", logo: usha },
  { id: 8, name: "Cronus", logo: cronus},
  { id: 9, name: "Havells", logo: havells },
  { id: 10, name: "Insta Certify", logo: insta },
];

const Clients = () => {
  return (
    <section className="clients" id="clients">
      <h2>Featured Clients</h2>
      <p>We have Worked With Amazing Business</p>
      <div className="clients-grid">
        {clients.map((client) => (
          <div key={client.id} className="client-card">
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
