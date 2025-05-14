//import React from 'react';
import '../../../assets/styles/cta-section.css'

function CTASection() {
  return (
    <section className="cta">
      <div className="container">
        <div className="text-container">
          <h1>
            Set up your profile.<br />
            Let jobs find you.
          </h1>
          <button className="cta-button">Join Now</button>
        </div>
        <img
          src="img/job-image.png"
          alt="Job Image"
          className="cta-image"
        />
      </div>
    </section>
  );
}

export default CTASection;
