import React, { useState, useEffect } from 'react';

function Info() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // Здесь может быть запрос к API или другая логика получения данных
    // Для примера используем статический массив
    const fetchedFeatures = [
      'Feature One',
      'Feature Two',
      'Feature Three',
    ];
    setFeatures(fetchedFeatures);
  }, []);

  return (
    <section className="info">
      <div className="container">
        <h1>Everything you want to know in one place.</h1>
        <img
          id="infoImage"
          src="img/professional-profile.png"
          alt="Info Image"
          className="info-image"
        />
        <div className="features" id="features-container">
          {features.length > 0 ? (
            features.map((feature, index) => (
              <div key={index} className="feature-item">
                {feature}
              </div>
            ))
          ) : (
            <p>No features available.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Info;
