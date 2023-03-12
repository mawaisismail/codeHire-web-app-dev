import styles from "./documensts.module.scss";
import { SlDoc } from "react-icons/Sl";
import { TfiImport } from "react-icons/tfi";

export const Documents = () => {
  return (
    <div className={styles.content}>
      <div className={styles.main_content}>
        <div className={styles.file_icon}>
          <SlDoc />
        </div>
        <p className={styles.file_details}>
          <span>Resume.pdf</span>
          <span>1.25 MB</span>
        </p>
      </div>
      <div className={styles.download_icon}>
        <TfiImport />
      </div>
    </div>
  );
};
