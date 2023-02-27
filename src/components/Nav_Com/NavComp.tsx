import styles from "./NavComp.module.scss";
import { NavData } from "./NavData";
import {
  FaLocationArrow,
  FaDollarSign,
  FaAngleDoubleRight,
} from "react-icons/fa";
export const NavComp = () => {
  return (
    <div className={styles.main_container}>
      {NavData.map(
        ({
          heading,
          subHeading,
          Location,
          dollar,
          parTime,
          Private,
          UrgentTime,
          Experience,
          Notes,
        }) => {
          return (
            <>
              <div className={styles.upper}>
                <div className={styles.logo}>
                  <div className={styles.img}></div>
                </div>
                <div className={styles.business}>
                  <p>{heading}</p>
                  <p>{subHeading}</p>
                </div>
                <div>
                  <p>
                    <FaLocationArrow className={styles.arrow} /> {Location}
                  </p>
                </div>
                <div>
                  <p>
                    <FaDollarSign className={styles.arrow} /> {dollar}
                  </p>
                </div>
                <div className={styles.btn}>
                  <button>{parTime}</button>
                  <button>{Private}</button>
                  <button>{UrgentTime}</button>
                </div>
              </div>
              <div className={styles.down}>
                <p>
                  Experience: <span>{Experience}</span>
                </p>
                <p>
                  Notes: <span>{Notes}</span>
                </p>
                <p>
                  Apply Now <FaAngleDoubleRight className={styles.arrow} />
                </p>
              </div>
            </>
          );
        }
      )}
    </div>
  );
};
