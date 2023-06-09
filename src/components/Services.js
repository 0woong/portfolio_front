import { faAws, faCss3Alt, faGitAlt, faHtml5, faJava, faJsSquare, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Services() {
  return (
    <section className="page-section skill-bg" id="services">
      <div>
        <h2>Skills</h2>
        <hr className="divider" />
        <div className="row">
          <div className="text-center">
            <FontAwesomeIcon icon={faHtml5} size="2xl" />
            <FontAwesomeIcon icon={faCss3Alt} size="2xl" />
            <FontAwesomeIcon icon={faJsSquare} size="2xl" />
            <h3 className="">HTML/CSS/JS</h3>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faJava} size="2xl" />
            <h3 className="">Java</h3>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faPython} size="2xl" />
            <h3 className="">Python</h3>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faGitAlt} size="2xl" />
            <h3 className="">Git</h3>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <FontAwesomeIcon icon={faReact} size="2xl" />
            <h3 className="">React</h3>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faNodeJs} size="2xl" />
            <h3 className="">node.js</h3>
          </div>
          <div className="text-center">
            <div className="">
              <div className="">
                <FontAwesomeIcon icon={faAws} size="2xl" />
              </div>
              <h3 className="">Amazon Web Service</h3>
            </div>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faDatabase} size="2xl" />
            <h3 className="">My SQL/MongoDB</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
