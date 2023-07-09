import styles from "./companyMainDetails.module.scss";
import { FaStar } from "react-icons/fa";
import { FC } from "react";
import { ICompany } from "../../../../../constants/interfaces/company";

export const CompanyMainDetails: FC<ICompany> = ({
  about,
  profileImageURL,
  coverImage,
  email,
  name,
  owner,
  phone,
  userName,
  token,
  location,
  total_employee,
  established,
  website,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.about}>
        <div className={styles.profileImage} />
        <p className={styles.profession}>
          <span>{name ?? ""}</span>
          <span>Since {established ?? ""}</span>
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
            <p>{owner ?? ""}</p>
            <p>{total_employee ?? ""}</p>
            <p>{location ?? ""}</p>
            <p>{website ?? ""}</p>
            <p>{established ?? ""}</p>
          </div>
        </div>
        <div>
          <a
            href="tel:555-555-5555"
            className="w-full flex justify-center items-center"
          >
            <button className={styles.button_contact}>Contact</button>
          </a>
        </div>
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
