import React from "react";
import { Link } from "react-scroll";

function About() {
  return (
    <section className="page-section about-bg" id="about">
      <div className="container">
        <div className="justify-content-center">
          <div className="text-center width-66">
            <h2 className="">About me</h2>
            <hr className="divider" />
            <p className="about-desc">
              안녕하세요, 성장형 개발자 주영웅입니다.
              <br />
              SeSAC에서 Python으로 프로그래밍을 접하였고,
              <br />
              LG CNS 협력사에서 웹 개발을 경험했습니다.
              <br />
              현재는 대한기계설비건설협회의 전산업무를 하고 있습니다.
            </p>
            <Link className="move-button2" to="services" spy={true} smooth={true}>
              Get Started!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
