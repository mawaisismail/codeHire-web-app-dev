import styles from "./companyMainDetails.module.scss";
import { FaStar } from "react-icons/fa";

export const CompanyMainDetails = () => {
  return (
    <div className={styles.main}>
      <div className={styles.about}>
        <div className={styles.profileImage} />
        <p className={styles.profession}>
          <span>Jobcy Technology Pvt.Ltd</span>
          <span>Since July 2017</span>
        </p>
        <p className={styles.rating}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
      </div>
      <div className={styles.contact}>
        <p className={styles.heading}>Profile Overview</p>
        <div className={styles.main_content}>
          <div className={styles.headings}>
            <p>Owner Name</p>
            <p>Employees</p>
            <p>Location</p>
            <p>Website</p>
            <p>Established</p>
          </div>
          <div className={styles.heading_data}>
            <p>Muhammad Awais</p>
            <p>1500 - 1850</p>
            <p>New York</p>
            <p>www.google.com</p>
            <p>July 10 2017</p>
          </div>
        </div>
        <button className={styles.button_contact}>Contact</button>
      </div>
      <div className={styles.office_time}>
        <p className={styles.heading}>Working Days</p>
        <div className={styles.main_content}>
          <div className={styles.headings}>
            <p>Monday</p>
            <p>Tuesday</p>
            <p>Wednesday</p>
            <p>Thursday</p>
            <p>Friday</p>
            <p>Saturday</p>
            <p>Sunday</p>
          </div>
          <div className={styles.heading_data}>
            <p>9AM - 5PM</p>
            <p>9AM - 5PM</p>
            <p>9AM - 5PM</p>
            <p>9AM - 5PM</p>
            <p>9AM - 5PM</p>
            <p>9AM - 5PM</p>
            <p>9AM - 5PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};
