import styles from "./UserJob.module.scss";
import { Container } from "@mui/material";
import { SlBag, SlLocationPin, SlBookOpen, SlFire } from "react-icons/sl";
export const UserJob = () => {
  return (
    <Container maxWidth="lg" className={styles.Container}>
      <div className={styles.row_one}>
        <div>
          <span>
            <SlBag />
          </span>
          <input placeholder="Job Company name.." className={styles.block} />
        </div>
        <div>
          <span>
            <SlLocationPin />
          </span>
          <select className={styles.block}>
            <option>Afghanistan</option>
            <option>Sales</option>
            <option>Finance</option>
            <option>Engineering</option>
          </select>
        </div>
        <div>
          <span>
            <SlBookOpen />
          </span>
          <select className={styles.block}>
            <option>Accounting</option>
            <option>Sales</option>
            <option>Finance</option>
            <option>Engineering</option>
          </select>
        </div>
        <div className={styles.btn}>
          <span>
            <SlFire />
          </span>
          <button>Filter</button>
        </div>
      </div>
      <div className={styles.row_second}>
        <span>Your Selected</span>
        <div>
          <input placeholder="Job Company name.." />
        </div>
      </div>
      <p>Show All Results</p>
      <div className={styles.row_third}>
        <div className={styles.logo}>
          <p></p>
        </div>
        <div className={styles.content}>
          <p>
            <span>Magento Developer </span>(0-2 Yrs Exp.)
            <span>
              <SlBag />
            </span>
          </p>
          <p>
            Jobcy Technology Pvt.ltd
            <span>
              <SlLocationPin />
            </span>
            California
          </p>
          <p>
            <span>
              <SlBag />
            </span>
            $250 - $800/month
          </p>
          <p>
            <button className={styles.full}>Full Time</button>
            <button className={styles.urgent}>Urgent</button>
            <button className={styles.private}>Private</button>
          </p>
        </div>
        <div className={styles.footer}>
          <p>UI, designer, developer</p>
          <p>Apply Now</p>
        </div>
      </div>
    </Container>
  );
};
