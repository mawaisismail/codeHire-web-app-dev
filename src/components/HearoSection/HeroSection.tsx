import styles from "./HeroSection.module.scss";
import { FaUser, FaSearch, FaLocationArrow } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <div className={styles.HeroContainer}>
      <div className={styles.HeroContent}>
        <p>WE HAVE 150,000+ LIVE JOBS</p>
        <p>
          Find your dream jobs with <span>Jobcy</span>
        </p>
        <p>
          Find jobs, create trackable resumes and enrich your
          applications.Carefully crafted after analyzing the needs of different
          industries.
        </p>
        <div className={styles.HeroSearch}>
          <div className={styles.HeroName}>
            <FaUser className={styles.HeroNameFa} />
            <input
              placeholder="Jobs,Company Name"
              className={styles.HeroNameInput}
            />
          </div>
          <div className={styles.HeroLocation}>
            <FaLocationArrow className={styles.HeroLocationFa} />
            Afghanistan
          </div>
          <div className={styles.HeroFindJob}>
            <FaSearch className={styles.HeroFindJobFa} />
            Find Job
          </div>
        </div>
      </div>
      <div className={styles.HeroLogo}></div>
    </div>
  );
};
