import styles from "./HeroSection.module.scss";
import { FaUser, FaSearch, FaLocationArrow } from "react-icons/fa";
import { Container } from "@mui/material";
export const HeroSection = () => {
  return (
    <Container
      maxWidth="xl"
      style={{ backgroundColor: "rgba(118, 109, 244, 0.1)" }}
    >
      <div className={styles.HeroContainer}>
        <div className={styles.HeroContent}>
          <p>WE HAVE 150,000+ LIVE JOBS</p>
          <p>
            Find your dream jobs with <span>Jobcy</span>
          </p>
          <p>
            Find jobs, create trackable resumes and enrich your
            applications.Carefully crafted after analyzing the needs of
            different industries.
          </p>
          <div className={styles.HeroSearch}>
            <div className={styles.HeroName}>
              <FaUser className={styles.HeroFa} />
              <input
                placeholder="Jobs,Company Name"
                className={styles.HeroInput}
              />
            </div>
            <div className={styles.HeroLocation}>
              <FaLocationArrow className={styles.HeroFa} />
              Afghanistan
            </div>
            <div className={styles.HeroFindJob}>
              <FaSearch className={styles.HeroFa} />
              Find Job
            </div>
          </div>
        </div>
        <div className={styles.HeroLogo}>
          <p className={styles.img}></p>
        </div>
      </div>
    </Container>
  );
};
