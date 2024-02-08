import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/DeepakBhangale.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am Dedicated Senior Architect & Full-Stack Developer with a
              focus on pioneering solutions in React, Angular, Node.js, and
              MongoDB. Proven expertise in crafting robust and scalable web
              applications. Passionate about pushing the boundaries of
              technology to create impactful solutions. Let's connect and
              explore the endless possibilities at the intersection of
              innovation and code! 🤷‍♂️
              <br />
              <br />
              With a robust foundation in Full Stack development, I specialise
              in the MERN (MongoDB, Express.js, React, Node.js) stack,
              leveraging its powerful components to create seamless and scalable
              software solutions. As a seasoned Solution Architect, I
              orchestrate the design and implementation of complex systems,
              ensuring they align with business goals and industry best
              practices. My track record includes successfully architecting and
              delivering multiple projects, showcasing my ability to translate
              business requirements into high-performance, maintainable
              applications. I thrive on the challenge of optimising software
              architecture for efficiency, scalability, and user experience,
              making me a reliable partner in driving innovation and excellence
              in the software development landscape.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, Architectural design </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">Web based applications.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, Angular</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br/> <br/><br/>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/db9714"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/DeepakBhangale7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/deepak-bhangale-1b18a412a"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
