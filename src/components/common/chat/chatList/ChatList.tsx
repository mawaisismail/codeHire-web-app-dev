import styles from "./chatList.module.scss";
import { useIsMobile } from "../../../../../hooks/useIsMobile";
export const ChatList = () => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.main}>
      <div className={styles.coverImg} />
      {isMobile ? (
        ""
      ) : (
        <div className={styles.chat_content}>
          <div className={styles.chat_content_row1}>
            <p>Design Team Management</p>
            <div className={styles.chat_content_date}>
              <p>
                <time>19:36</time>
              </p>
            </div>
          </div>
          <div className={styles.chat_content_row2}>
            <p>Asiaap maszeehh!</p>
          </div>
        </div>
      )}
    </div>
  );
};
