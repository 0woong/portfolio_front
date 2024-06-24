import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Modal(props) {
  // 모달 바깥 클릭시 종료
  const wrapperRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      props.setDisplayModal(false);
    }
  };
  // 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  // 모달창 닫기
  const closeModal = () => {
    props.setDisplayModal(false);
  };

  // 이미지 슬라이드
  const slideRef = useRef(null);
  const [currentImgOrder, setCurrentImgOrder] = useState(props.modalNo);
  const IMG_WIDTH = 450;
  const slideRange = currentImgOrder * IMG_WIDTH;

  useEffect(() => {
    slideRef.current.style.transition = "0.3s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
  }, [currentImgOrder, slideRange]);

  const nextButton = () => {
    if (currentImgOrder === 5) return setCurrentImgOrder(0);
    setCurrentImgOrder(currentImgOrder + 1);
  };

  const prevButton = () => {
    if (currentImgOrder === 0) return setCurrentImgOrder(5);
    setCurrentImgOrder(currentImgOrder - 1);
  };

  // 파라미터 가져오기
  const modalProjectsList = props.projects.map((v) => (
    <div>
      <img className={styles.detailImg} src={v.detailSrc} alt="..." />
      <p className={styles.detailDesc}>{v.name}</p>
    </div>
  ));

  return (
    <div className={styles.container}>
      <div ref={wrapperRef} className={styles.modalBox}>
        <button className={styles.close} onClick={closeModal}>
          X
        </button>
        <div className={styles.projectsList}>
          <div className={styles.projectsImg} ref={slideRef}>
            {modalProjectsList}
          </div>
        </div>
        <div className={styles.prevButton} onClick={prevButton}>
          <FontAwesomeIcon icon={faCaretLeft} size="5x" />
        </div>
        <div className={styles.nextButton} onClick={nextButton}>
          <FontAwesomeIcon icon={faCaretRight} size="5x" />
        </div>
      </div>
    </div>
  );
}
export default Modal;
