import styles from "./client.module.scss";
export const Client = () => {
  return (
    <div className={styles.main}>
      <p className={styles.p1}>
        Browse Our <span>5,000+</span> Latest Jobs
      </p>
      <p className={styles.p2}>
        Post a job to tell us about you project. we'll quickly match you with
        the right freelancers.
      </p>
      <button className={styles.button1}>Started Now</button>
    </div>
  );
};
