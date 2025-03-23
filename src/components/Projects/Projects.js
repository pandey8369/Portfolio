import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Camia from "../../Assets/Projects/Camia.png";
import Management from "../../Assets/Projects/Management.png";
import Phonebook from "../../Assets/Projects/Phonebook.png";
import Vastra from "../../Assets/Projects/Vastra.png";
import Tic_Tac_Toe from "../../Assets/Projects/Tic_Tac_Tao.png";
import Sign_language from "../../Assets/Projects/Sign_language.png";
import Plant_disease from "../../Assets/Projects/plant_disease.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Camia}
              isBlog={false}
              title="CAMIA"
              description="​CAMIA is an online retailer specializing in premium organic and natural personal care products."
              demoLink="https://mycamia.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Management}
              isBlog={false}
              title="Student_Management_System"
              description="​The Student-Management-system is a Python-based project designed to facilitate the entry and organization of student details."
              ghLink="https://github.com/pandey8369/Student-Management-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Phonebook}
              isBlog={false}
              title="Phonebook"
              description="A simple Phonebook application built using Java and MySQL, designed to store, manage, and modify contact details efficiently."
              ghLink="https://github.com/pandey8369/Phonebook"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Vastra}
              isBlog={false}
              title="VASTRA"
              description="​Vastra is an online fashion brand that empowers individuals to express their personal narratives through clothing."
              demoLink="https://meravastra.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tic_Tac_Toe}
              isBlog={false}
              title="Tic_Tac_Toe Game"
              description="This is a mini project of a Tic Tac Toe game in Python, designed for beginners and learners who are new to Python."
              ghLink="https://github.com/pandey8369/Tic-Tac-Toe-Game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sign_language}
              isBlog={false}
              title="AI-Sign-Language-Detection"
              description="Its a Normal static Mini Project which does not contains any pre-define backend database, user has to train it first and then it executing according to its ability."
              ghLink="https://github.com/pandey8369/AI-Sign-Language-Detector"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Plant_disease}
              isBlog={false}
              title="Plant_Disease_Classification"
              description="This project was designed with farmers in mind. Potato and tomato are among the most common crops found in India and are highly susceptible to diseases such as early blight and late blight."
              ghLink="https://github.com/pandey8369/Plant_disease_classification"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
