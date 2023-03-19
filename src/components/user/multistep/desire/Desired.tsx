import { FC } from "react";
import styles from "./desired.module.scss";
import { Container } from "@mui/material";
import {
  jobWorkingStyles,
  jsFrameworks,
} from "../../../../../constants/utils/signUp";

export const Desired: FC = () => {
  return (
    <>
      <Container maxWidth="md">
        <div className={styles.main}>
          <form>
            <p>Desired Occupation</p>
            <div className={styles.checkbox_main}>
              {jsFrameworks.map((name) => (
                <div
                  key={`profile-checkbox-${name}`}
                  className={styles.checkbox_content}
                >
                  <input type="checkbox" name="otherOccupation" value={name} />
                  <label htmlFor={`check-${name}`}>{name}</label>
                </div>
              ))}
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>First Choice of Location </p>
                <select name="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>{" "}
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Second Choice of Location </p>
                <select name="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <p>Working Style</p>
            <div className={styles.checkbox_main}>
              {jobWorkingStyles.map((name) => (
                <div
                  key={`profile-checkbox-${name}`}
                  className={styles.checkbox_content}
                >
                  <input type="checkbox" name="otherOccupation" value={name} />
                  <label htmlFor={`check-${name}`}>{name}</label>
                </div>
              ))}
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Desire Salary</p>
                <input type="text" placeholder="10,000,00/-" />
              </div>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Previous Salary</p>
                <input type="text" placeholder="10,000,00/-" />
              </div>
            </div>
            <div className={styles.button_wrapper}>
              <button>Finish</button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};
