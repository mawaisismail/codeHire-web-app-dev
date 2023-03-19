import { FC } from "react";
import styles from "./profile.module.scss";
import { Container } from "@mui/material";
import { jsFrameworks } from "../../../../constants/utils/signUp";

export const ProfileForm: FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <div className={styles.main}>
          <form>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>First Name</p>
                <input type="text" placeholder="Joe" />
              </div>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Last Name</p>
                <input type="text" placeholder="Doe" />
              </div>
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Email</p>
                <input type="text" placeholder="abcs@gmail.com  " />
              </div>
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Introduce Yourself</p>
                <textarea
                  rows={10}
                  placeholder="Developer with over 5 years' experience working ...."
                />
              </div>
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Languages</p>
                <input type="text" placeholder="English" />
              </div>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Country</p>
                <input type="text" placeholder="Lahore" />
              </div>
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Postal Code</p>
                <input type="text" placeholder="54000" />
              </div>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Building number</p>
                <input type="text" placeholder="001/C1" />
              </div>
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Phone</p>
                <input type="text" placeholder="03xx-xxxxxxxx" />
              </div>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Other</p>
                <input type="text" placeholder="042-xxxxxxx" />
              </div>
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Date of Birth</p>
                <input type="date" />
              </div>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Gender</p>
                <select name="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className={styles.input_main}>
              <div className={styles.input_wrapper}>
                <p className={styles.label}>Profession</p>
                <input type="text" placeholder="Javascript Developer" />
              </div>
            </div>
            <p className={styles.label}>Other Experience</p>
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
            <div className={styles.button_wrapper}>
              <button>Next</button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};
