import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fedex from "../../Assets/Projects/fedex-cover.jpg";
import madhavbaug from "../../Assets/Projects/madhavbaug-cover.jpg";
import hawkamah from "../../Assets/Projects/hawkamah.png";
import Mom from "../../Assets/Projects/Mother-O-malvan-cover.jpg";
import Tbs from "../../Assets/Projects/tbshome.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fedex}
              isBlog={false}
              title="FEDEX"
              description="I worked on the FedEx KYC module using AngularJS, managing form validations, data binding, and API integration, ensuring accurate customer verification, improved UI responsiveness, bug fixes, and smooth coordination with backend teams for compliance and security.
"
              ghLink={false}
              demoLink="https://kyc.fedex.com/#/kyc-microsite"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tbs}
              isBlog={false}
              title="One Fine Day"
              description="I worked on the TBS Home project using React.js, developing interactive UI components with animations, managing state, and ensuring smooth transitions, responsive design, and an engaging, high-performance user experience across devices.
"
              ghLink={false}
              demoLink="https://onefineday.co.in/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hawkamah}
              isBlog={false}
              title="Hawkamah"
              description="I worked on the Hawkamah project using WordPress and Grunt, handling theme customization, task automation, asset optimization, and frontend enhancements to ensure improved performance, maintainable code, and a responsive, user-friendly website experience.

"
              ghLink={false}
              demoLink="https://www.hawkamah.org/en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mom}
              isBlog={false}
              title="Mother-O-malvan"
              description="I worked on the Mother-O-Malvan website using Shopify, customizing themes, managing product listings, optimizing the storefront UI, and ensuring smooth checkout, responsive design, and a user-friendly shopping experience aligned with the brand.
"
              ghLink={false}
              demoLink="https://motheromalvan.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tbs}
              isBlog={false}
              title="TBS Home"
              description="I worked on the TBS Home project using React.js, developing interactive UI components with animations, managing state, and ensuring smooth transitions, responsive design, and an engaging, high-performance user experience across devices.
"
              ghLink={false}
              demoLink="https://www.tbshome.in/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
