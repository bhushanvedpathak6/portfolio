import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Bhushan Vedpathak</span>{" "}
            from <span className="purple">Mumbai, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Frontend developer</span> at{" "}
            <span className="purple">InfoBeans</span>.
            <br />I hold an Integrated B.Sc. (IT) from{" "}
            <span className="purple">Mumbai University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to the gym 💪
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Bhushan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
