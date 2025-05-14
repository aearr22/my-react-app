import React, { useState } from 'react';

const images = [
  { src: 'img/1.jpg', alt: 'Image 1' },
  { src: 'img/2.jpg', alt: 'Image 2' },
  { src: 'img/3.jpg', alt: 'Image 3' },
];

function Slider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="bloktem">
      <div className="slider">
        <button onClick={prevSlide} aria-label="Previous Slide">
          &#10094;
        </button>

        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ display: index === current ? 'block' : 'none' }}
            className={index === current ? 'hero-image active' : 'hero-image'}
          />
        ))}

        <button onClick={nextSlide} aria-label="Next Slide">
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default Slider;
