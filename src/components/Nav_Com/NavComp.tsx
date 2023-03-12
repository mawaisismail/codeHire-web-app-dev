import styles from "./NavComp.module.scss";
import { SlBag, SlLocationPin } from "react-icons/Sl";
import { Container } from "@mui/material";

export const NavComp = () => {
  return (
    <Container maxWidth="lg">
      <div className={styles.nav}>
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
        </div>
        <div className={styles.footer}>
          <p>Experience</p>
          <p>UI, designer, developer</p>
          <p>Apply Now</p>
        </div>
      </div>
    </Container>
  );
};
