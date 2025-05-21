import React from "react";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Вход</h2>
        <form>
          <label htmlFor="loginUsername">Имя пользователя:</label>
          <input type="text" id="loginUsername" name="loginUsername" required />

          <label htmlFor="loginPassword">Пароль:</label>
          <input type="password" id="loginPassword" name="loginPassword" required />

          <button className="buttonokno" type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
