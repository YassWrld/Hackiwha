import "./Services.css";
import { MdMedicalServices } from "react-icons/md";

export default function Services() {
  return (
    <div className="services-container">
      <h1>Services</h1>
      <div className="services-cards">
        <div className="service-card">
          <span className="health-icon">
            <MdMedicalServices />
          </span>
          <h2>Track your medical health</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse culpa
            qui corporis est provident, hic ducimus nam accusantium pariatur
            perferendis expedita, odit repellat. Sed, est nisi! Illum, rem cum.
            Repellat!
          </p>
          <button>Learn more</button>
        </div>
        <div className="service-card">
          <span className="health-icon">
            <MdMedicalServices />
          </span>
          <h2>Track your medical health</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse culpa
            qui corporis est provident, hic ducimus nam accusantium pariatur
            perferendis expedita, odit repellat. Sed, est nisi! Illum, rem cum.
            Repellat!
          </p>
          <button>Learn more</button>
        </div>
        <div className="service-card">
          <span className="health-icon">
            <MdMedicalServices />
          </span>
          <h2>Track your medical health</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse culpa
            qui corporis est provident, hic ducimus nam accusantium pariatur
            perferendis expedita, odit repellat. Sed, est nisi! Illum, rem cum.
            Repellat!
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}
