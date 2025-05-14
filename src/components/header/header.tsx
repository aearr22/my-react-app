//import React from 'react';
import '../../../assets/styles/header.css'

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo"><h4>Jobly</h4></div>
        <nav>
          <a href="#" className="for-recruiters">For Recruiters</a>
          <a href="#" className="buttonjoin" id="signUpBtn">Sign Up</a>
          <a href="#" className="log-in">Log In</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
