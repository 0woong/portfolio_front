import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import projectImg from "../assets/main.jpg";

function Portfolio() {
  return (
    <>
      <section className="page-section" id="portfolio">
        <div className="">
          <div className="">
            <div className="">
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="">
                <div className="">Category</div>
                <div className="">Project Name</div>
              </div>
            </div>
            <div className="">
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="">
                <div className="">Category</div>
                <div className="">Project Name</div>
              </div>
            </div>
            <div className="">
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="">
                <div className="">Category</div>
                <div className="">Project Name</div>
              </div>
            </div>
            <div className="">
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="">
                <div className="">Category</div>
                <div className="">Project Name</div>
              </div>
            </div>
            <div className="">
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="">
                <div className="">Category</div>
                <div className="">Project Name</div>
              </div>
            </div>
            <div className="">
              <img className="thumbnails" src={projectImg} alt="..." />
              <div className="">
                <div className="">Category</div>
                <div className="">Project Name</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section portfolio-desc">
        <div className="">
          <h2 className="">지금 이 순간도 개발중!</h2>
          <FontAwesomeIcon icon={faRotate} size="xl" style={{ color: "#ffffff" }} spin />
        </div>
      </section>
    </>
  );
}
export default Portfolio;
