//import React from 'react';
import '../../../assets/styles/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="foot_all">
        <div className="footer__right">
          <p className="footer__text">Jobly.co</p>
          <p className="footer__text">
            We support a pool of diverse young creatives and engineers.
          </p>
          <p className="footer__text">
            © 2023 Jobly.co Copyright and All rights reserved.
          </p>
        </div>
        <div className="foot_left">
          <a className="footer__link" href="#terms">
            Terms and Conditions
          </a>{' '}
          ·{' '}
          <a className="footer__link" href="#privacy">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
