import React, { useState } from "react";
import styles from "../../assets/styles/InfoSection.module.css";

const features = [
  {
    title: "Profile Builder",
    text: "Create a professional profile to showcase your skills.",
    img: "/assets/img/professional-profile.png"
  },
  {
    title: "Job Matching",
    text: "Get matched with jobs that fit your background.",
    img: "/assets/img/professional-profile.png"
  },
  {
    title: "Instant Feedback",
    text: "Receive instant feedback from recruiters.",
    img: "/assets/img/professional-profile.png"
  }
];

const InfoSection: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(features[0].img);

  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <h1>Everything you want to know in one place.</h1>
        <img id="infoImage" src={imgSrc} alt="Info" className={styles.infoImage} />
        <div className={styles.features} id="features-container">
          {features.map((f, i) => (
            <div className={styles.feature} key={i} onMouseEnter={() => setImgSrc(f.img)}>
              <h3>{f.title}</h3>
              <hr className={styles.thickLine} />
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
