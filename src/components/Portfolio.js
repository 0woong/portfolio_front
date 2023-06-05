import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="">
        <div className="">
          <div className="">
            <img className="thumbnails" src={process.env.PUBLIC_URL + "/assets/main.jpg"} alt="..." />
            <div className="">
              <div className="">Category</div>
              <div className="">Project Name</div>
            </div>
          </div>
          <div className="">
            <img className="thumbnails" src={process.env.PUBLIC_URL + "/assets/main.jpg"} alt="..." />
            <div className="">
              <div className="">Category</div>
              <div className="">Project Name</div>
            </div>
          </div>
          <div className="">
            <img className="thumbnails" src={process.env.PUBLIC_URL + "/assets/main.jpg"} alt="..." />
            <div className="">
              <div className="">Category</div>
              <div className="">Project Name</div>
            </div>
          </div>
          <div className="">
            <img className="thumbnails" src={process.env.PUBLIC_URL + "/assets/main.jpg"} alt="..." />
            <div className="">
              <div className="">Category</div>
              <div className="">Project Name</div>
            </div>
          </div>
          <div className="">
            <img className="thumbnails" src={process.env.PUBLIC_URL + "/assets/main.jpg"} alt="..." />
            <div className="">
              <div className="">Category</div>
              <div className="">Project Name</div>
            </div>
          </div>
          <div className="">
            <img className="thumbnails" src={process.env.PUBLIC_URL + "/assets/main.jpg"} alt="..." />
            <div className="">
              <div className="">Category</div>
              <div className="">Project Name</div>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-desc">
        <div className="">
          <h2 className="">지금 이 순간도 개발중!</h2>
          <FontAwesomeIcon icon={faRotate} size="xl" style={{ color: "#ffffff" }} spin />
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
