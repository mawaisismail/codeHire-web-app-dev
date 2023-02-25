import styles from "./NavComp.module.scss";
import {
  FaLocationArrow,
  FaDollarSign,
  FaAngleDoubleRight,
} from "react-icons/fa";
export const NavComp = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.upper}>
        <div className={styles.logo}>
          <div className={styles.img}></div>
        </div>
        <div className={styles.business}>
          <p>Business Associate</p>
          <p>Pixel Technology ptv.ltd</p>
        </div>
        <div>
          <p>
            <FaLocationArrow className={styles.arrow} /> Dodge City, Lahore
          </p>
        </div>
        <div>
          <p>
            <FaDollarSign className={styles.arrow} /> 800-1800/m
          </p>
        </div>
        <div className={styles.btn}>
          <button>Part Time</button>
          <button>Private</button>
          <button>Urgent</button>
        </div>
      </div>
      <div className={styles.down}>
        <p>
          Experience: <span>0-1 years</span>
        </p>
        <p>
          Notes: <span>Language only differ in the grammar</span>
        </p>
        <p>
          Apply Now <FaAngleDoubleRight className={styles.arrow} />
        </p>
      </div>
    </div>
  );
};
