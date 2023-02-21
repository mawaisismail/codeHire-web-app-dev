import styles from "./BrowserJob.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { firstData, SecondData } from "./Data";
export const BrowserJob = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.title}>
        <h3>Browser Jobs Categories </h3>
        <p>
          Post a job to tell us about your project. We will quickly match you
          with the right freelancers.
        </p>
      </div>
      <div className={styles.sub_container}>
        {firstData.map((data) => {
          return (
            <div key={data.id} className={styles.box}>
              <div className={styles.icons}>{data.icons}</div>
              <h5>{data.title}</h5>
              <p>{data.content}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.sub_container}>
        {SecondData.map((data) => {
          return (
            <div key={data.id} className={styles.box}>
              <div className={styles.icons}>{data.icons}</div>
              <h5>{data.title}</h5>
              <p>{data.content}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button>
          Browse All Categories <FaArrowRight className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};
