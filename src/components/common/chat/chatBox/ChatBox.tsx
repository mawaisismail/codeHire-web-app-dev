import styles from "./chatBox.module.scss";
import exportImg from "../../../../../static/images/chat_export_icon.svg";
import sendImg from "../../../../../static/images/send_message_icon.svg";
import { FC } from "react";
import Image from "next/image";
import { useIsMobile } from "../../../../../hooks/useIsMobile";

export const ChatBox: FC = () => {
  const isMobile = useIsMobile();
  return (
    <div className={styles.main}>
      <div className={styles.chat_main}>
        <div>{/*<ChatMessages />*/}</div>
      </div>
      <div className={styles.footer}>
        <p className={styles.export}>
          <label htmlFor="file-input">
            <Image src={exportImg} height={25} width={25} alt="exportIcon" />
          </label>
          <input id="file-input" className={styles.export_input} type="file" />
        </p>
        <textarea rows={isMobile ? 1 : 4} placeholder="Enter Message" />
        {isMobile ? (
          <p className={styles.send}>
            <Image src={sendImg} height={25} width={25} alt="sendIcon" />
          </p>
        ) : (
          <button className={styles.send_message}>Send</button>
        )}
      </div>
    </div>
  );
};
