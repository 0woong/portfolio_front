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

  // 프로젝트 리스트
  const projects = [
    { id: 0, src: projectImg, detailSrc: projectImg, skill: "React", name: "Todo List" },
    { id: 1, src: projectImg, detailSrc: projectImg, skill: "React", name: "Tetris" },
    { id: 2, src: projectImg, detailSrc: projectImg, skill: "Vanilla JS", name: "Exchange Rate" },
    { id: 3, src: projectImg, detailSrc: projectImg, skill: "Vanilla JS", name: "오늘 뭐 먹지?" },
    { id: 4, src: projectImg, detailSrc: projectImg, skill: "Vanilla JS", name: "가위바위보" },
    { id: 5, src: projectImg, detailSrc: projectImg, skill: "Vanilla JS", name: "가계부" },
  ];
  const projectsList = projects.map((v) => (
    <div onClick={() => showModal(v.id)} className="projects-box">
      <img className="thumbnails" src={v.src} alt="..." />
      <div className="projects-box-desc">
        <div className="project-skill">{v.skill}</div>
        <div className="project-name">{v.name}</div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="page-section projects-bg" id="projects">
        <h2>Projects</h2>
        <hr className="divider" />
        <div className="container">
          <div className="row">{projectsList}</div>
        </div>
        {displayModal && <Modal projects={projects} modalNo={modalNo} setModalNo={setModalNo} displayModal={displayModal} setDisplayModal={setDisplayModal}></Modal>}
      </section>
      <section className="page-section projects-desc">
        <h2 className="">지금 이 순간도 개발중!</h2>
        <FontAwesomeIcon icon={faRotate} size="xl" style={{ color: "#ffffff" }} spin />
      </section>
    </>
  );
}
export default Projects;
