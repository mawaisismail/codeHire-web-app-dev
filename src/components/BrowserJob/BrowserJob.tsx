import styles from "./BrowserJob.module.scss";
import { FaArrowRight } from "react-icons/fa";
import { firstData } from "./BrowserData";
import { Container } from "@mui/material";

export const BrowserJob = () => {
  return (
    <Container>
      <div className={styles.CategoriesContainer}>
        <div className={styles.CategoriesTitle}>
          <h3>Browser Jobs Categories </h3>
          <p>
            Post a job to tell us about your project. We will quickly match you
            with the right freelancers.
          </p>
        </div>
        <div className={styles.CategoriesSubContainer}>
          {firstData.map((data) => (
            <div key={data.id} className={styles.CategoriesBox}>
              <div className={styles.CategoriesIcons}>{data.icons}</div>
              <h5>{data.title}</h5>
              <p>{data.content}</p>
            </div>
          ))}
        </div>
        <div>
          <button>
            Browse All Categories <FaArrowRight className={styles.arrow} />
          </button>
        </div>
      </div>
    </Container>
  );
};
