import { FC } from "react";
import styles from "./education.module.scss";
import { Container } from "@mui/material";

export const EducationForm: FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <div className={styles.main}>
          <form>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Current Occupation</p>
                <input type="text" placeholder="Javascript Developer" />
              </div>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Institute</p>
                <input type="text" placeholder="University of Lahore" />
              </div>
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Start Date</p>
                <input type="date" />
              </div>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>End Date</p>
                <input type="date" />
              </div>
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>About Education</p>
                <textarea
                  rows={10}
                  placeholder="Developer with over 5 years' experience working ...."
                />
              </div>
            </div>
            <div className={styles.button_wrapper}>
              <button>Next</button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};
