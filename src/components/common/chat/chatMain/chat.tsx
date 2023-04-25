import { FC, useState } from "react";
import styles from "./userChat.module.scss";
import { ChatBox } from "../chatBox/ChatBox";
import { useRouter } from "next/router";
import { useIsMobile } from "../../../../../hooks/useIsMobile";
import { MobileChatBox } from "@/components/common/chat/mobileChatBox/MobileChatBox";

const Chat: FC = () => {
  const isMobile = useIsMobile();
  const { asPath } = useRouter();
  const [openChat, setOpenChat] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  return (
    <>
      <div className={styles.main}>
        {!isMobile ? (
          <>
            <div className={styles.list}>List</div>
            <div>
              <div className={styles.label_section}>
                {favoriteList.length > 0 ? (
                  <p className={styles.label}>React.Js Developer</p>
                ) : (
                  <p className={styles.no_company_label}>No Company</p>
                )}

                <hr className={styles.hr_line} />
              </div>
              <div className={styles.chat_user_section}>
                <div className={styles.chat_box}>
                  <ChatBox />
                </div>
                <div className={styles.company_details}></div>
              </div>
            </div>
          </>
        ) : (
          <MobileChatBox />
        )}
      </div>
    </>
  );
};
export default Chat;
