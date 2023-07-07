import styles from "./jobCard.module.scss";
import { useRouter } from "next/router";
import { routes } from "../../../../../constants/routes";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../../utils/context/GlobalProvider";
import { GConfirm } from "@/components/common/g-confirm";

export const JobCard = () => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [{ baseUser }] = useContext(GlobalContext);
  const { push } = useRouter();
  const applyJob = () => {
    if (baseUser?.uid) {
      push(`${routes.user.applyJob}/${1}`);
    } else {
      setIsConfirmOpen(true);
    }
  };
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
        <GConfirm
          title="Apple for this job"
          description="You’re not logged in. Please login to apply for this job."
          open={isConfirmOpen}
          setOpen={() => setIsConfirmOpen(!isConfirmOpen)}
          onConfirm={() => push(routes.user.login)}
        >
          <button onClick={applyJob}>Apply Now</button>
        </GConfirm>
        <button onClick={() => push(routes.user.jobs + "/1")}>View Job</button>
      </div>
    </div>
  );
};
