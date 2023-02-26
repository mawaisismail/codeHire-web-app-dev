import styles from "./Subscribe.module.scss";
export const Subscribe = () => {
  return (
    <div className={styles.SubscribeContainer}>
      <div className={styles.SubscribeLogo}>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>

      <div className={styles.Subscribe}>
        <div className={styles.SubscribeContent}>
          <p>Get New Jobs Notification!</p>
          <p>Subscribe & get all related jobs notification.</p>
        </div>
        <div className={styles.SubscribeSearch}>
          <input
            placeholder="Enter your Email"
            className={styles.SubscribeInput}
          />
          <button className={styles.SubscribeButton}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};
