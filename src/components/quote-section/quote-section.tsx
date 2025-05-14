import React from 'react';

function QuoteSection() {
  return (
    <section className="quote">
      <div className="container">
        <div className="images">
          <img src="img/mask.png" alt="mas" className="img_dop1" />
          <img src="img/avatar.png" alt="" className="img_dop2" />
        </div>
        <blockquote>
          <h1>
            Creating an Online Presence is Hard.<br />
            Jobly Makes it Easy for Recruiters to See you
          </h1>
          <br />
          <div className="author">
            <h4>Zhao Cui</h4>
            <p>Founder at Jobly.co</p>
          </div>
        </blockquote>
      </div>
    </section>
  );
}

export default QuoteSection;
