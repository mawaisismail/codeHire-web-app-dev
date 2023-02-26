import styles from "./skillsList.module.scss";
import { FC } from "react";
const tools = [
  "Cloud Management",
  "Data Analyst",
  "Developer",
  "software testing",
];
const languages = ["English", "Japanese", "Spanish"];
const lists = [tools, languages];

interface ISkillsList {
  isGreen?: boolean;
}
export const SkillsList: FC<ISkillsList> = ({ isGreen }) => {
  return (
    <div className={styles.main}>
      <p className={styles.heading}>
        {isGreen ? "Spoken languages" : "Skills"}
      </p>
      <div className={styles.content}>
        {lists[isGreen ? 1 : 0].map((value) => (
          <span
            className={`${isGreen ? styles.green_label : styles.blue_label}`}
            key={value}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};
