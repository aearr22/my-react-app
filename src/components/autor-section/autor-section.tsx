import React, { useState } from 'react';
import '../../../assets/styles/autor-section.css'

function AuthModals() {
  const [isSignupOpen, setSignupOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  // Обработчики открытия/закрытия модалок
  const openSignup = () => setSignupOpen(true);
  const closeSignup = () => setSignupOpen(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);

  // Обработка сабмита форм
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику регистрации
    alert('Регистрация прошла успешно!');
    closeSignup();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику входа
    alert('Вход выполнен!');
    closeLogin();
  };

  return (
    <>
      {/* Кнопки для открытия модалок (можно убрать, если управление из другого компонента) */}
      <button onClick={openSignup}>Открыть регистрацию</button>
      <button onClick={openLogin}>Открыть вход</button>

      {/* Модальное окно регистрации */}
      {isSignupOpen && (
        <div className="modal" onClick={closeSignup} style={modalStyles.overlay}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={modalStyles.content}>
            <span className="close" onClick={closeSignup} style={modalStyles.close}>&times;</span>
            <h2>Регистрация</h2>
            <form id="signupForm" onSubmit={handleSignupSubmit}>
              <label htmlFor="username">Имя пользователя:</label>
              <input type="text" id="username" name="username" required />

              <label htmlFor="email">Электронная почта:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="password">Пароль:</label>
              <input type="password" id="password" name="password" required />

              <button className="buttonokno" type="submit">Зарегистрироваться</button>
            </form>
          </div>
        </div>
      )}

      {/* Модальное окно входа */}
      {isLoginOpen && (
        <div className="modal" onClick={closeLogin} style={modalStyles.overlay}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={modalStyles.content}>
            <span className="close" onClick={closeLogin} style={modalStyles.close}>&times;</span>
            <h2>Вход</h2>
            <form id="loginForm" onSubmit={handleLoginSubmit}>
              <label htmlFor="loginUsername">Имя пользователя:</label>
              <input type="text" id="loginUsername" name="loginUsername" required />

              <label htmlFor="loginPassword">Пароль:</label>
              <input type="password" id="loginPassword" name="loginPassword" required />

              <button className="buttonokno" type="submit">Войти</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}