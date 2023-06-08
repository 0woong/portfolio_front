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
            <p className="about-desc">안녕하세요, 매일 성장 중인 개발자 주영웅입니다. SeSAC에서 Python으로 코딩을 처음 배웠고 UCAMP개발자과정을 수료하여 현재는 LG CNS 협력사에서 프론트엔드를 담당하고 있습니다.</p>
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
