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
            <p className="about-desc">안녕하세요, 끊임없이 발전하는 성장형 개발자 주영웅입니다. 국비교육기관 SeSAC에서 Python으로 프로그래밍을 접하였고, 현재는 LG CNS의 UCAMP 교육과정을 수료 후 협력사에서 프론트엔드 개발을 담당하고 있습니다.</p>
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
