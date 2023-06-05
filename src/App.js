import "./App.css";
import { Link } from "react-scroll";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar" id="mainNav">
          <div className="container">
            <p className="navbar-logo" onClick={scrollToTop}>
              Eroe's Portfolio
            </p>
            <div className="navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="about" spy={true} smooth={true}>
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="services" spy={true} smooth={true}>
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="portfolio" spy={true} smooth={true}>
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact" spy={true} smooth={true}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="App-header">
          <div className="container h-100">
            <div className="align-items-center justify-content-center text-center">
              <div className="">
                <h1 className="">Developer Eroe</h1>
                <hr className="divider" />
              </div>
              <div className="">
                <p className="">안녕하세요, 저의 포트폴리오를 방문해주셔서 감사합니다.</p>
                <Link className="" to="about" spy={true} smooth={true}>
                  find out more
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="page-div" id="about">
          <div className="">
            <div className="">
              <div className="">
                <h2 className="">About me</h2>
                <hr className="divider" />
                <p className="about-desc">안녕하세요, 매일 성장 중인 개발자 주영웅입니다. SeSAC에서 Python으로 코딩을 처음 배웠고 UCAMP개발자과정을 수료하여 현재는 LG CNS 협력사에서 프론트엔드를 담당하고 있습니다.</p>
                <Link className="nav-link" to="services" spy={true} smooth={true}>
                  Get Started!
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* services */}
        <div className="page-div" id="services">
          <div className="">
            <h2 className="">Skills</h2>
            <hr className="divider" />
            <div className="">
              <div className="">
                <div className="">
                  <div className="">
                    <i className=""></i>
                    <i className=""></i>
                    <i className=""></i>
                    <i className=""></i>
                    <i className=""></i>
                  </div>
                  <h3 className="">HTML/CSS/JS</h3>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <i className=""></i>
                  </div>
                  <h3 className="">Java</h3>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <i className=""></i>
                  </div>
                  <h3 className="">Python</h3>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <i className=""></i>
                  </div>
                  <h3 className="">Git</h3>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="">
                  <div className="">
                    <i className=""></i>
                  </div>
                  <h3 className="">React</h3>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <i className=""></i>
                  </div>
                  <h3 className="">node.js</h3>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <i className=""></i>
                  </div>
                  <h3 className="">Amazon Web Service</h3>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="">
                    <i className=""></i>
                  </div>
                  <h3 className="">My SQL/MongoDB</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio */}
        <div id="portfolio">
          <div className="">
            <div className="">
              <div className="">
                <a className="" href="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
                  <img className="" src="assets/img/portfolio/thumbnails/1.jpg" alt="..." />
                  <div className="">
                    <div className="">Category</div>
                    <div className="">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="">
                <a className="" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
                  <img className="" src="assets/img/portfolio/thumbnails/2.jpg" alt="..." />
                  <div className="">
                    <div className="">Category</div>
                    <div className="">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="">
                <a className="" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
                  <img className="" src="assets/img/portfolio/thumbnails/3.jpg" alt="..." />
                  <div className="">
                    <div className="">Category</div>
                    <div className="">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="">
                <a className="" href="assets/img/portfolio/fullsize/4.jpg" title="Project Name">
                  <img className="" src="assets/img/portfolio/thumbnails/4.jpg" alt="..." />
                  <div className="">
                    <div className="">Category</div>
                    <div className="">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="">
                <a className="" href="assets/img/portfolio/fullsize/5.jpg" title="Project Name">
                  <img className="" src="assets/img/portfolio/thumbnails/5.jpg" alt="..." />
                  <div className="">
                    <div className="">Category</div>
                    <div className="">Project Name</div>
                  </div>
                </a>
              </div>
              <div className="">
                <a className="" href="assets/img/portfolio/fullsize/6.jpg" title="Project Name">
                  <img className="" src="assets/img/portfolio/thumbnails/6.jpg" alt="..." />
                  <div className="">
                    <div className="">Category</div>
                    <div className="">Project Name</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* call to action */}
        <div className="">
          <div className="">
            <h2 className="">지금 이 순간도 개발중!</h2>
            <i className=""></i>
          </div>
        </div>
        {/* contact */}
        <div id="contact">
          <div className="">
            <div className="">
              <div className="">
                <h2 className="">Contact</h2>
                <hr className="divider" />
              </div>
            </div>
            <div className="">
              {/* kakaotalk */}
              <div className="">
                <a target="_blank" rel="noopener noreferrer" href="http://qr.kakao.com/talk/Oj228OAk1a70FwHToovXlwpw.W0-" style={{ textDecoration: "none" }}>
                  <i className=""></i>
                  <div className="">kakao talk</div>
                </a>
              </div>
              {/* email */}
              <div className="">
                <a target="_blank" rel="noopener noreferrer" href="mailto:jooyy1219@naver.com" style={{ textDecoration: "none" }}>
                  <i className=""></i>
                  <div className="">e-mail</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Link */}
        <div id="contact2">
          <div className="">
            <div className="">
              <div className="">
                <h2 className="">Link</h2>
                <hr className="divider" />
              </div>
            </div>
            <div className="">
              <div className="">
                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/yexngwxxng" style={{ textDecoration: "none" }}>
                  <i className=""></i>
                  <div className="">instagram</div>
                </a>
              </div>
              <div className="">
                <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/jooyy1219" style={{ textDecoration: "none" }}>
                  <i className=""></i>
                  <div className="">facebook</div>
                </a>
              </div>
              <div className="">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/0woong" style={{ textDecoration: "none" }}>
                  <i className=""></i>
                  <div className="">github</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-light">
          <div className="">
            <div className="">Copyright &copy; 2022 - Eroe's portfolio</div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
