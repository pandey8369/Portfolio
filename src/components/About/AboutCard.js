import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi everyone, I’m <span className="purple">Rohit Pandey </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I work as a Website developer and Backend Manager at Plug N Play Biosciences Pvt Ltd.
            <br />
            I have a BSc in Computer Science from SIWS College, Wadala.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Latest Technology
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Aim to create things that leave a meaningful impact!"{" "}
          </p>
          <footer className="blockquote-footer">Rohit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
