import styles from "./g-search.module.scss";
import { useRouter } from "next/router";
export const GSearch = () => {
  const { asPath } = useRouter();
  return (
    <div className={styles.main}>
      <input
        type="text"
        placeholder={
          asPath.includes("company")
            ? "User , Occupation ...."
            : "Job , Company Name ..."
        }
      />
      <input type="text" placeholder="Location e.g Lahore" />
      <input type="text" placeholder="Occupation" />
      <button>Filter</button>
    </div>
  );
};
