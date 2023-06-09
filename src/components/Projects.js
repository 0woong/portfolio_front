import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import projectImg from "../assets/main.jpg";
import Modal from "./modal/Modal";

function Projects() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <section className="page-section projects-bg" id="projects">
        <h2>Projects</h2>
        <hr className="divider" />
        <div className="container">
          <div className="row">
            <div className="projects-box" onClick={showModal}>
              {modalOpen && <Modal setModalOpen={setModalOpen} />}
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="projects-box-desc">
                <div className="project-skill">Next js</div>
                <div className="project-name">Todo List</div>
              </div>
            </div>
            <div className="projects-box" onClick={showModal}>
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="projects-box-desc">
                <div className="project-skill"></div>
                <div className="project-name"></div>
              </div>
            </div>
            <div className="projects-box" onClick={showModal}>
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="projects-box-desc">
                <div className="project-skill"></div>
                <div className="project-name"></div>
              </div>
            </div>
            <div className="projects-box" onClick={showModal}>
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="projects-box-desc">
                <div className="project-skill"></div>
                <div className="project-name"></div>
              </div>
            </div>
            <div className="projects-box" onClick={showModal}>
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="projects-box-desc">
                <div className="project-skill"></div>
                <div className="project-name"></div>
              </div>
            </div>
            <div className="projects-box" onClick={showModal}>
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="projects-box-desc">
                <div className="project-skill"></div>
                <div className="project-name"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section projects-desc">
        <div className="">
          <h2 className="">지금 이 순간도 개발중!</h2>
          <FontAwesomeIcon icon={faRotate} size="xl" style={{ color: "#ffffff" }} spin />
        </div>
      </section>
    </>
  );
}
export default Projects;
