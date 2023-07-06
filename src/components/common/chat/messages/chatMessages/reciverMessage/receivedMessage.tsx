import styles from "./reciverMessage.module.scss";
import { FC } from "react";

interface IUserChat {
  text: string;
  createdAt: string;
}

export const ReceivedMessage: FC<IUserChat> = ({ text, createdAt }) => {
  return (
    <div className={styles.main}>
      <div className={styles.user_profile}></div>
      <p className={styles.message}>
        {text}
        <span>{createdAt ? createdAt : "0000 / 00 / 00 00:00"}</span>
        <span>helooooooooooo</span>
      </p>
    </div>
  );
};
