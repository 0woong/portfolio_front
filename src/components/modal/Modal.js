import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Modal({ displayModal, children, setDisplayModal }) {
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

  const prevButton = () => {};
  const nextButton = () => {};
  return (
    <div className={styles.container}>
      <div ref={wrapperRef} className={styles.modalBox}>
        <button className={styles.close} onClick={closeModal}>
          X
        </button>
        <div>{children}</div>
        <div className={styles.controller}>
          <div className={styles.prevButton} onClick={prevButton}>
            <FontAwesomeIcon icon={faCaretLeft} size="5x" />
          </div>
          <div className={styles.nextButton} onClick={nextButton}>
            <FontAwesomeIcon icon={faCaretRight} size="5x" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
