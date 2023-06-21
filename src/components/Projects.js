import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import projectImg from "../assets/main.jpg";
import Modal from "./modal/Modal";

function Projects() {
  // 모달창 노출 여부 state
  const [displayModal, setDisplayModal] = useState(false);

  // 모달창 노출
  const showModal = (modalNo) => {
    setDisplayModal(true);
    setModalNo(modalNo);
  };

  // 모달창 순서
  const [modalNo, setModalNo] = useState(0);

  return (
    <>
      <section className="page-section projects-bg" id="projects">
        <h2>Projects</h2>
        <hr className="divider" />
        <div className="container">
          <div className="row">
            <div onClick={() => showModal(0)} className="projects-box">
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="projects-box-desc">
                <div className="project-skill">React</div>
                <div className="project-name">Todo List</div>
              </div>
            </div>
            <div onClick={() => showModal(1)} className="projects-box">
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="projects-box-desc">
                <div className="project-skill">React</div>
                <div className="project-name">Tetris</div>
              </div>
            </div>
            <div onClick={() => showModal(2)} className="projects-box">
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="projects-box-desc">
                <div className="project-skill">Vanilla JS</div>
                <div className="project-name">Exchange Rate</div>
              </div>
            </div>
            <div onClick={() => showModal(3)} className="projects-box">
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="projects-box-desc">
                <div className="project-skill">Vanilla JS</div>
                <div className="project-name">오늘 뭐 먹지?</div>
              </div>
            </div>
            <div onClick={() => showModal(4)} className="projects-box">
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="projects-box-desc">
                <div className="project-skill">Vanilla JS</div>
                <div className="project-name">가위바위보</div>
              </div>
            </div>
            <div onClick={() => showModal(5)} className="projects-box">
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="projects-box-desc">
                <div className="project-skill">Vanilla JS</div>
                <div className="project-name">가계부</div>
              </div>
            </div>
          </div>
        </div>
        {displayModal && <Modal modalNo={modalNo} setModalNo={setModalNo} displayModal={displayModal} setDisplayModal={setDisplayModal}></Modal>}
      </section>
      <section className="page-section projects-desc">
        <h2 className="">지금 이 순간도 개발중!</h2>
        <FontAwesomeIcon icon={faRotate} size="xl" style={{ color: "#ffffff" }} spin />
      </section>
    </>
  );
}
export default Projects;
