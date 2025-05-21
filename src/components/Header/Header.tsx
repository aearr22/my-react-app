import React from "react";
import styles from "../assets/styles/Header.module.css";

interface HeaderProps {
  onSignup: () => void;
  onLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignup, onLogin }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logo}><h4>Jobly</h4></div>
      <nav className={styles.nav}>
        <a href="#" className={styles.forRecruiters}>For Recruiters</a>
        <a href="#" className={styles.buttonjoin} onClick={e => { e.preventDefault(); onSignup(); }}>Sign Up</a>
        <a href="#" className={styles.login} onClick={e => { e.preventDefault(); onLogin(); }}>Log In</a>
      </nav>
    </div>
  </header>
);

export default Header;
