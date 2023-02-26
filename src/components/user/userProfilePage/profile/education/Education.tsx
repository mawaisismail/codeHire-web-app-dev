import styles from "./education.module.scss";
import { FC } from "react";

export const EducationList = () => {
  return (
    <div>
      <p className={styles.heading}>BCA - Bachelor of Computer Applications</p>
      <p>International University - (2004 - 2010)</p>
      <p>
        There are many variations of passages of available, but the majority
        alteration in some form. As a highly skilled and successfull product
        development and design specialist with more than 4 Years of My
        experience.
      </p>
    </div>
  );
};

interface IEducation {
  isEducation?: boolean;
}

export const Education: FC<IEducation> = ({ isEducation = false }) => {
  return (
    <div className={styles.main}>
      <p className={styles.heading}>
        {isEducation ? "Education" : "Experience"}
      </p>
      <EducationList />
      <EducationList />
    </div>
  );
};
