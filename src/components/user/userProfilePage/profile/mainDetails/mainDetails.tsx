import styles from "./mainDetails.module.scss";
import { FaStar } from "react-icons/fa";
import { Documents } from "@/components/user/userProfilePage/profile/documents/documents";

export const MainDetails = () => {
  return (
    <div className={styles.main}>
      <div className={styles.about}>
        <div className={styles.profileImage} />
        <p className={styles.profession}>
          <span>Muhammad Awais</span>
          <span>Developer</span>
        </p>
        <p className={styles.rating}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
      </div>
      <div className={styles.documents}>
        <p className={styles.heading}>Documents</p>
        <Documents />
        <Documents />
      </div>
      <div className={styles.contact}>
        <p className={styles.heading}>Contact</p>
        <div className={styles.main_content}>
          <div className={styles.headings}>
            <p>Email</p>
            <p>Phone Number</p>
            <p>Location</p>
          </div>
          <div className={styles.heading_data}>
            <p>Awais@gmail.com</p>
            <p>0322-4911133</p>
            <p>Lahore,Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};
