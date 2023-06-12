import { useEffect, useRef } from "react";
import styles from "./Modal.module.css";

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
  const closeModal = () => {
    setDisplayModal(false);
  };
  return (
    <div style={{ display: displayModal ? "block" : "none" }} className={styles.container}>
      <div ref={wrapperRef} className={styles.modalBox}>
        <button className={styles.close} onClick={closeModal}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
export default Modal;
