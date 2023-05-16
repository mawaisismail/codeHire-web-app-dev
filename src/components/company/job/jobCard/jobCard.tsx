import styles from "./jobCard.module.scss";
import { useRouter } from "next/router";
import { routes } from "../../../../../constants/routes";

export const JobCard = () => {
  const { push } = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.sec1}>
        <div className={styles.coverImages} />
        <div>
          <p className={styles.profile}>Magento Developer</p>
          <p className={styles.amount}>Jobcy Technology Pvt.Ltd</p>
        </div>
      </div>
      <div className={styles.occupation}>
        <p className={styles.salary}>$500/ Month</p>
        <p className={styles.other}>Min. 1 Year</p>
        <p className={styles.other}>Developer</p>
      </div>
      <p>
        As a Product Designer, you will work within a Product Delivery Team
        fused with UX, engineering, product and data talent.
      </p>
      <p className={styles.time}>2 min ago</p>
      <div className={styles.button_wrapper}>
        <button onClick={() => push(`${routes.user.applyJob}/${1}`)}>
          Apply Now
        </button>
        <button>View Profile</button>
      </div>
    </div>
  );
};
