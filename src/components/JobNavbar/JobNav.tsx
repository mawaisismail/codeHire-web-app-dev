import styles from "./JobNav.module.scss";
import { Container } from "@mui/material";

export const JobNav = () => {
  return (
    <Container className={styles.container}>
      <nav>
        <p>Recent Job</p>
        <p>Featured Job</p>
        <p>Freelancer</p>
        <p>Part Time</p>
        <p>Full Time</p>
      </nav>
    </Container>
  );
};
