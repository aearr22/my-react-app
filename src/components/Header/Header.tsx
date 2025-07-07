import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../assets/styles/Header.module.css";

interface User {
  nickname: string;
}

interface HeaderProps {
  onSignup: () => void;
  onLogin: () => void;
  user: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignup, onLogin, user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" onClick={closeMenu} style={{ textDecoration: "none", color: "inherit" }}>
            <h4>Jobly</h4>
          </Link>
        </div>

        {}
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Основное меню */}
        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <a href="#" className={styles.forRecruiters} onClick={closeMenu}>For Recruiters</a>

          {user ? (
            <>
              <span className={styles.greeting}>Привет, {user.nickname}</span>
              <a
                href="#"
                className={styles.logout}
                onClick={(e) => {
                  e.preventDefault();
                  onLogout();
                  closeMenu();
                }}
              >
                Log Out
              </a>
            </>
          ) : (
            <>
              <a
                href="#"
                className={styles.buttonjoin}
                onClick={(e) => {
                  e.preventDefault();
                  onSignup();
                  closeMenu();
                }}
              >
                Sign Up
              </a>
              <a
                href="#"
                className={styles.login}
                onClick={(e) => {
                  e.preventDefault();
                  onLogin();
                  closeMenu();
                }}
              >
                Log In
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
