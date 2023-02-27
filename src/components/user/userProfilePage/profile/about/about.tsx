import styles from "./about.module.scss";
export const About = () => {
  return (
    <div className={styles.main}>
      <p className={styles.heading}>About</p>
      <p>
        Developer with over 5 years experience working in both the public and
        private sectors. Diplomatic, personable, and adept at managing sensitive
        situations. Highly organized, self-motivated, and proficient with
        computers. Looking to boost students’ satisfactions scores for
        International University. Bachelors degree in communications.
        <br />
        <br /> It describes the candidates relevant experience, skills, and
        achievements. The purpose of this career summary is to explain your
        qualifications for the job in 3-5 sentences and convince the manager to
        read the whole resume document.
      </p>
    </div>
  );
};
