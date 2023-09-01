import styles from './Modal.module.css';

const Modal = ({ imageUrl, onClose }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={imageUrl} alt="" />
        <button className={styles.closeButton} onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Modal;
