import styles from "./Modal.module.css";

function Modal({ setModalOpen, id, title, content, writer }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={closeModal}>
        X
      </button>
      <p>모달창입니다.</p>
    </div>
  );
}
export default Modal;
