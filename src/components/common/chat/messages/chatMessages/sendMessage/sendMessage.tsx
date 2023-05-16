import { FC } from "react";
import styles from "./sendMessage.module.scss";

interface IUserChat {
  text: string;
  createdAt: string;
}
export const SendMessage: FC<IUserChat> = ({ text, createdAt }) => {
  return (
    <div className={styles.main}>
      <p className={styles.message}>
        {text}
        <span>{createdAt ? createdAt : "0000 / 00 / 00 00:00"}</span>
      </p>
    </div>
  );
};
