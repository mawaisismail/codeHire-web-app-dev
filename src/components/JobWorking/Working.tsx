import styles from "./working.module.scss";
export const Working = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.content}>
          <p>How it Works</p>
          <p>
            Post a job to tell us about your project. We will quickly match you
            with the right freelancers.
          </p>
          <p className={styles.op1}>
            <span>1.</span> Register an account
          </p>
          <p>
            Due to its widespread use as filler text for layouts, non-
            readability is of great importance.
          </p>
          <p className={styles.op2}>
            <span>2.</span> Find your job
          </p>
          <p>
            There are many variations of passages of available bookmark-label,
            but the majority alteration in some form.
          </p>
          <p className={styles.op3}>
            <span>3.</span> Apply for job
          </p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </div>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};
