import styles from "./Footer.module.scss";
import { Container } from "@mui/material";
export const Footer = () => {
  return (
    <div className={styles.main}>
      <Container maxWidth="xl">
        <p>All Copy rights Reserved</p>
      </Container>
    </div>
  );
};
