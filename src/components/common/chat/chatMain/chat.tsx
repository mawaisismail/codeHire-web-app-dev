import { FC, useState } from "react";
import styles from "./userChat.module.scss";
import { ChatBox } from "../chatBox/ChatBox";
import { useRouter } from "next/router";
import { useIsMobile } from "../../../../../hooks/useIsMobile";
import { MobileChatBox } from "@/components/common/chat/mobileChatBox/MobileChatBox";
import { ChatList } from "@/components/common/chat/chatList/ChatList";
import Image from "next/image";
import setting from "static/images/dots-3-vertical-svgrepo-com.svg";
import profile from "static/images/default_profile_img.svg";
import picture from "static/images/figma_logo.png";

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
            <div className={styles.col1}>
              <div className={styles.bar_chat}>
                <Image src={profile} alt={profile} />
                <Image src={setting} alt={setting} />
              </div>
              <div className={styles.list}>
                <ChatList />
                <ChatList />
                <ChatList />
                <ChatList />
                <ChatList />
                <ChatList />
                <ChatList />
                <ChatList />
                <ChatList />
                <ChatList />
                <ChatList />
                <ChatList />
              </div>
            </div>
            <div className={styles.col2}>
              <div className={styles.bar_content}>
                <Image
                  className={styles.picture}
                  src={picture}
                  alt={"picture"}
                />
                <div>
                  <p>Design Team Management </p>
                  <p className={styles.status}>Online</p>
                </div>
                <Image className={styles.setting} src={setting} alt={setting} />
              </div>
              <div>
                <div className={styles.label_section}>
                  {favoriteList.length > 0 ? (
                    <p className={styles.label}>React.Js Developer</p>
                  ) : (
                    <p className={styles.no_company_label}></p>
                  )}

                  {/*<hr className={styles.hr_line} />*/}
                </div>
                <div className={styles.chat_user_section}>
                  <div className={styles.chat_box}>
                    <ChatBox />
                  </div>
                  {/*<div className={styles.company_details}></div>*/}
                </div>
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
