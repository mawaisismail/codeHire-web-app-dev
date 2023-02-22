import styles from "./browser_job.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { firstData, SecondData } from "./BrowserData";

export const BrowserJob = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.title}>
        <h3 className="title">Browser Jobs Categories </h3>
        <p className="text-muted">
          Post a job to tell us about your project. We will quickly match you
          with the right freelancers.
        </p>
      </div>
      <div className={styles.sub_container}>
        {firstData.map((data) => {
          return (
            <div key={data.id} className={styles.box}>
              <div className={styles.icons}>{data.icons}</div>
              <h5 className="fs-18">{data.title}</h5>
              <p className="text-muted mb-0">{data.content}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.sub_container}>
        {SecondData.map((data) => {
          return (
            <div key={data.id} className={styles.box}>
              <div className={styles.icons}>{data.icons}</div>
              <h5 className="fs-18">{data.title}</h5>
              <p className="text-muted mb-0">{data.content}</p>
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
