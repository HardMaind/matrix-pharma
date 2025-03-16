'use client';
import styles from '../styles/Hero.module.css';

const Hero = ({ title, imgPath }) => {
  return (
    <section 
      className={styles.hero} 
      style={{ backgroundImage: `url(${imgPath})` }}
    >
      <h1 className={styles.heroTitle}>{title}</h1>
    </section>
  );
};

export default Hero;
