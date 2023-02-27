import styles from "./Footer.module.scss";
export const Footer = () => {
  return (
    <div className={styles.main_container}>
      {/*  content*/}
      <div className={styles.content}>
        <div className={styles.footerBrand}>
          <p>Jobcy</p>
          <p className={styles.brandTitle}>
            It is a long established fact that a reader will be of a page reader
            will be of at its layout.
          </p>
        </div>

        <div className={styles.company}>
          <p>Company</p>
        </div>

        <div className={styles.ForJobs}>
          <p>For Jabs</p>
        </div>

        <div className={styles.ForCandidates}>
          <p>For Candidates</p>
        </div>

        <div className={styles.Support}>
          <p>Support</p>
        </div>
      </div>

      {/*  sub content*/}
      <div className={styles.sub_content}>
        <p>2023 © Jobcy - Job Listing Page Template by Themesdesign</p>
      </div>
    </div>
  );
};
