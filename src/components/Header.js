import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="App-header">
      <div className="container h-100">
        <div className="align-items-center justify-content-center text-center">
          <div className="header-title">
            <h1 className="">Developer Eroe</h1>
            <hr className="divider" />
          </div>
          <div className="header-desc">
            <p className="">안녕하세요, 저의 포트폴리오를 방문해주셔서 감사합니다.</p>
            <Link className="move-button" to="about" spy={true} smooth={true}>
              find out more
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
