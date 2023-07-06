import styles from "./JobWork.module.scss";
import { JobWorkData } from "@/components/howItWork/JobWorkData";
import { Container } from "@mui/material";
import { GHeader } from "@/components/common/GHeader";

export const HowItWork = () => {
  return (
    <Container maxWidth="xl">
      <div className={styles.JobWorkMain}>
        <div className={styles.JobWorkContent}>
          <GHeader
            title="How it Work"
            subtitle=" Post a job to tell us about your project.We will quickly match you
              with the right freelancer"
          />
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
