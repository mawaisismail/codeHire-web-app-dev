import styles from "./UserCard.module.scss";
import { FaStar } from "react-icons/fa";
export const UserCard = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sec1}>
        <div className={styles.coverImages} />
        <div>
          <p className={styles.profile}> Muhammad Awais</p>
          <p className={styles.amount}>$800/month</p>
        </div>
      </div>
      <p className={styles.rating}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </p>
      <div className={styles.occupation}>
        <p>Exp : 3 Years</p>
        <p>Freelancers</p>
      </div>
      <p>
        Some quick example text to build on the card title and bulk the card's
        content Moltin gives you platform.
      </p>
      <div className={styles.button_wrapper}>
        <button>Hire Now</button>
        <button>View Profile</button>
      </div>
    </div>
  );
};
