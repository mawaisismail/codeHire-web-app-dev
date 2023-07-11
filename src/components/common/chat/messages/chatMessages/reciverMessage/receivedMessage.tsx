import styles from "./reciverMessage.module.scss";
import { FC } from "react";

interface IUserChat {
  text: string;
  createdAt: string;
}

export const ReceivedMessage: FC<IUserChat> = ({ text, createdAt }) => {
  const formattedTime = createdAt
    ? new Date(createdAt).toLocaleTimeString()
    : "00:00:00";

  return (
    <div className={styles.main}>
      <div className={styles.user_profile}></div>
      <p className={styles.message}>
        {text}
        <span>{formattedTime}</span>
      </p>
    </div>
  );
};
