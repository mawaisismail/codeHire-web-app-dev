import styles from "./mobileChatBox.module.scss";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faList } from "@fortawesome/free-solid-svg-icons";
import { ChatBox } from "@/components/common/chat/chatBox/ChatBox";

export const MobileChatBox: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <p>React.Js Developer</p>
        <div>
          <FontAwesomeIcon icon={faList} />
        </div>
      </div>
      <ChatBox />
    </div>
  );
};
