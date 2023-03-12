import styles from "./Footer.module.scss";
import { Container } from "@mui/material";
export const Footer = () => {
  return (
    <Container maxWidth="xl" className={styles.Footer}>
      <div className={styles.upper}>
        <div>
          <p>Jobcy</p>
          <p>
            It is a long established fact that a reader will be of a page reader
            will be of at its layout.
          </p>
        </div>
        <div>
          <p>Company</p>
        </div>
        <div>
          <p>Jobs</p>
        </div>
        <div>
          <p>Candidates</p>
        </div>
        <div>
          <p>Supports</p>
        </div>
      </div>
      <hr />
      <div className={styles.lower}>
        <p>2023 © Jobcy - Job Listing Page Template by Themesdesign</p>
      </div>
    </Container>
  );
};
