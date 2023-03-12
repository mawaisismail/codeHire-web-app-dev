import styles from "./BrowserJob.module.scss";
import { SlArrowRight } from "react-icons/sl";
import { firstData, SecondData } from "./BrowserData";

export const BrowserJob = () => {
  return (
    <div className={styles.CategoriesContainer}>
      <div className={styles.CategoriesTitle}>
        <h3>Browser Jobs Categories </h3>
        <p>
          Post a job to tell us about your project. We will quickly match
          youBrow with the right freelancers.
        </p>
      </div>
      <div className={styles.CategoriesSubContainer}>
        {firstData.map((data) => {
          return (
            <div key={data.id} className={styles.CategoriesBox}>
              <div className={styles.CategoriesIcons}>{data.icons}</div>
              <h5>{data.title}</h5>
              <p>{data.content}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.CategoriesSubContainer}>
        {SecondData.map((data) => {
          return (
            <div key={data.id} className={styles.CategoriesBox}>
              <div className={styles.CategoriesIcons}>{data.icons}</div>
              <h5>{data.title}</h5>
              <p>{data.content}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button>
          Browse All Categories <SlArrowRight className={styles.arrow} />
        </button>
      </div>
    </div>
  );
};
