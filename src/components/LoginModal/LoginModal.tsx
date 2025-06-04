import React from "react";
import styles from "../../assets/styles/LoginModal.module.css"; 

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2>Вход</h2>
        <form>
          <label htmlFor="loginUsername">Имя пользователя:</label>
          <input type="text" id="loginUsername" name="loginUsername" required />

          <label htmlFor="loginPassword">Пароль:</label>
          <input type="password" id="loginPassword" name="loginPassword" required />

          <button className={styles.buttonokno} type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
