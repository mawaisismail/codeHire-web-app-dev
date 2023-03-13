import styles from "./client.module.scss";
import { FC } from "react";
export const Client: FC = () => {
  return (
    <div className={styles.main}>
      <p className={styles.heading}>
        Browse Our <span>5,000+</span> Latest Jobs
      </p>
      <p className={styles.content}>
        Post a job to tell us about you project. well quickly match you with the
        right freelancers.
      </p>
      <button>Started Now</button>
    </div>
  );
};
