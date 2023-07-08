import styles from "./skillsList.module.scss";
import { FC, useContext } from "react";
import { GlobalContext } from "../../../../../../utils/context/GlobalProvider";
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
  data: string[] | null | undefined;
}
export const SkillsList: FC<ISkillsList> = ({ isGreen, data }) => {
  const [{ user }] = useContext(GlobalContext);
  return (
    <div className={styles.main}>
      <p className={styles.heading}>
        {isGreen ? "Spoken languages" : "Skills"}
      </p>
      <div className={styles.content}>
        {data?.map((value) => (
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
