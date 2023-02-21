import styles from "./header.module.scss";
import { FaBell } from "react-icons/fa";
const navLinks = ["Home", "Contact", "About"];
export const Header = () => {
  return (
    <div className={styles.main}>
      <div>CODE'll.H'</div>
      <div className={styles.links}>
        {navLinks.map((item, index) => (
          <p key={`${item}-${index}`}>{item}</p>
        ))}
      </div>
      <div className={styles.main_notification}>
        <div className={styles.bell}>
          <FaBell />
        </div>
        <div className={styles.cover_image} />
        <p>Hi, Awais</p>
      </div>
    </div>
  );
};
