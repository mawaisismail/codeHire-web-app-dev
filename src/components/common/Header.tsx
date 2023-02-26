import styles from "./header.module.scss";
import { FaBell } from "react-icons/fa";
import { useRouter } from "next/router";
import { routes } from "../../../constants/routes";
const navLinks = ["Home", "Contact", "About"];
export const Header = () => {
  const { push } = useRouter();
  return (
    <div className={styles.main}>
      <div>CODE.H</div>
      <div className={styles.links}>
        {navLinks.map((item, index) => (
          <p key={`${item}-${index}`}>{item}</p>
        ))}
      </div>
      <div className={styles.main_notification}>
        <div className={styles.bell}>
          <FaBell />
        </div>
        <div
          onClick={() => push(routes.user.profile)}
          className={styles.cover_image}
        />
        <p>Hi, Awais</p>
      </div>
      <div>
        <button onClick={() => push(routes.user.signUp)}>Sign Up</button>
        <button onClick={() => push(routes.user.login)}>Login</button>
      </div>
    </div>
  );
};
