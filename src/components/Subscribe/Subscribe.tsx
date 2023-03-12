import styles from "./Subscribe.module.scss";
import { Container } from "@mui/material";

export const Subscribe = () => {
  return (
    <Container maxWidth="xl" className={styles.container}>
      <div className={styles.logo}>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <div className={styles.content}>
        <div>
          <p>Get New Jobs Notification!</p>
          <p>Subscribe & get all related jobs notification.</p>
        </div>
        <div>
          <input type="text" placeholder="Search Here...." />
        </div>
      </div>
    </Container>
  );
};
