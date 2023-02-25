import styles from "./header.module.scss";
import { FaBell } from "react-icons/fa";
import { useLazyQuery } from "@apollo/client";
import { GET_JOB } from "../../../constants/graphQL/job";
const navLinks = ["Home", "Contact", "About"];
export const Header = () => {
  const [getJobs, getJobData] = useLazyQuery(GET_JOB, {
    fetchPolicy: "network-only",
  });

  const getJobsFun = () => {
    getJobs({
      variables: {},
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className={styles.main}>
      <div>CODE.H</div>
      <div className={styles.links}>
        {navLinks.map((item, index) => (
          <p key={`${item}-${index}`}>{item}</p>
        ))}
      </div>
      <div className={styles.main_notification}>
        <div className={styles.bell}>
          <FaBell />
        </div>
        <div className={styles.cover_image} />
        <p>Hi, Awais</p>
      </div>
      <div>
        <button onClick={getJobsFun}>Run Query</button>
      </div>
    </div>
  );
};
