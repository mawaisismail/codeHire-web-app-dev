import styles from "./JobWork.module.scss";
import { JobWorkData } from "@/components/JobWork/JobWorkData";
import { Container } from "@mui/material";
export const JobWork = () => {
  return (
    <Container maxWidth="xl">
      <div className={styles.JobWorkMain}>
        <div className={styles.JobWorkContent}>
          <div className={styles.JobWorkHeading}>
            <h2>How it Work</h2>
            <p>
              Post a job to tell us about your project.We will quickly match you
              with the right freelancer
            </p>
          </div>
          {JobWorkData.map((data) => (
            <div key={data.id} className={styles.JobWorkList}>
              <h2>
                <span>{data.id}</span>
                {data.heading}
              </h2>
              <p>{data.subheading}</p>
            </div>
          ))}
        </div>
        <div className={styles.JobWorkLogo}>
          <p className={styles.img}></p>
        </div>
      </div>
    </Container>
  );
};
