import styles from "./Card.module.scss";
import { FaAngleDoubleRight } from "react-icons/fa";
import { CardData } from "@/components/Card/CardData";

export const Card = () => {
  return (
    <div className={styles.CardMainContainer}>
      <div className={styles.CardHeader}>
        <h3>Quick Career Tips</h3>
        <p>
          Post a job to tell us about your project. We will quickly match you
          with the right freelancers.
        </p>
      </div>
      <div className={styles.CardContainer}>
        {CardData.map(({ id, heading, subheading }) => {
          return (
            <div className={styles.Card} key={id}>
              <p className={styles.CardLogo}></p>
              <div className={styles.CardLogoContent}>
                <p className={styles.CardHeading}>{heading}</p>
                <p className={styles.CardSubheading}>{subheading}</p>
                <div className={styles.CardBtn}>
                  <button>Read more</button>
                  <FaAngleDoubleRight className={styles.arrow} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
