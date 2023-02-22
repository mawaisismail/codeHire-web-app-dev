import styles from "./RandomJob.module.scss";

export const RandomJob = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>New Random Jobs</h3>
        <p>
          Post a job to tell us about your project. We'll quickly match you with
          the right freelancers.
        </p>
      </div>
    </div>
  );
};
