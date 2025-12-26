import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sandib Jena</span>{" "}
            from <span className="purple">India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Full Stack Developer</span>.
            <br />I am pursuing <span className="purple">B.Tech (2nd year, CSE)</span>.
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Blogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Leadership
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is Enjoyable"
          </p>
          <footer className="blockquote-footer">BG</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
