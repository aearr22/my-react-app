import React, { useState } from "react";
import styles from "../../assets/styles/SliderSection.module.css";

const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
];

const SliderSection: React.FC = () => {
  const [active, setActive] = useState(0);

  function prev() {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }
  function next() {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  return (
    <section className={styles.bloktem}>
      <div className={styles.slider}>
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`Image ${idx + 1}`}
            className={`${styles.heroImage} ${active === idx ? styles.active : ""}`}
          />
        ))}
        <button className={styles.prev} onClick={prev}>&lt;</button>
        <button className={styles.next} onClick={next}>&gt;</button>
      </div>
    </section>
  );
};

export default SliderSection;
