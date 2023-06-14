import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projectImg from "../../assets/main.jpg";

function Modal({ displayModal, children, setDisplayModal }) {
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
      setDisplayModal(false);
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
  const closeModal = () => {
    setDisplayModal(false);
  };

  // 이미지 슬라이드
  const slideRef = useRef(null);
  const [currentImgOrder, setcCurrentImgOrder] = useState(0);
  const IMG_WIDTH = 450;
  const slideRange = currentImgOrder * IMG_WIDTH;

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${slideRange}px)`;
  }, [currentImgOrder]);

  const nextButton = () => {
    if (currentImgOrder === 5) return;
    setcCurrentImgOrder(currentImgOrder + 1);
  };

  const prevButton = () => {
    if (currentImgOrder === 0) return;
    setcCurrentImgOrder(currentImgOrder - 1);
  };
  return (
    <div className={styles.container}>
      <div ref={wrapperRef} className={styles.modalBox}>
        <button className={styles.close} onClick={closeModal}>
          X
        </button>
        <div className={styles.projectsList}>
          <div className={styles.projectsImg} ref={slideRef}>
            <img className={styles.detailImg} src={projectImg} alt="..." />
            <img className={styles.detailImg} src={projectImg} alt="..." />
            <img className={styles.detailImg} src={projectImg} alt="..." />
            <img className={styles.detailImg} src={projectImg} alt="..." />
            <img className={styles.detailImg} src={projectImg} alt="..." />
            <img className={styles.detailImg} src={projectImg} alt="..." />
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
