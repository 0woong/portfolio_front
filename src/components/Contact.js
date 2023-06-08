import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Kakaotalk } from "../assets/kakaotalk.svg";
import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div>
        <div className="row justify-content-center">
          <div>
            <h2 className="link-title">Contact</h2>
            <hr className="divider" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="link">
            <a target="_blank" rel="noopener noreferrer" href="http://qr.kakao.com/talk/Oj228OAk1a70FwHToovXlwpw.W0-">
              <Kakaotalk width="2rem" fill="white" />
              <div className="link-desc">kakao talk</div>
            </a>
          </div>
          <div className="link">
            <a target="_blank" rel="noopener noreferrer" href="mailto:jooyy1219@naver.com">
              <FontAwesomeIcon icon={faEnvelope} size="2xl" />
              <div className="link-desc">e-mail</div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="row justify-content-center">
          <div>
            <h2 className="link-title">Link</h2>
            <hr className="divider" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="link">
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/yexngwxxng">
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
              <div className="link-desc">instagram</div>
            </a>
          </div>
          <div className="link">
            <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/jooyy1219">
              <FontAwesomeIcon icon={faFacebook} size="2xl" />
              <div className="link-desc">facebook</div>
            </a>
          </div>
          <div className="link">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/0woong">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
              <div className="link-desc">github</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
