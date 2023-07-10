import { FC, useContext, useEffect, useState } from "react";
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
import { gql, useQuery, useSubscription } from "@apollo/client";
import { GlobalContext } from "../../../../../utils/context/GlobalProvider";
import jobId from "@/pages/user/jobs/[jobId]";
import { IJob } from "../../../../../constants/interfaces/jobs";
import axios from "axios";
import { BASE_URL } from "../../../../../constants/constants";

const GET_MESSAGES = gql`
  subscription {
    messageSent {
      jobId
      content
      senderId
      createdAt
    }
  }
`;
const GET_ALL_MESSAGES = gql`
  query {
    messages {
      jobId
      content
      senderId
      createdAt
    }
  }
`;

interface Message {
  jobId: string;
  content: string;
  senderId: string;
  createdAt: string;
}

const Chat: FC = () => {
  const { asPath } = useRouter();
  const [{ baseUser }] = useContext(GlobalContext);
  const [jobId, setJobId] = useState<string>("");
  const [jobs, setJobs] = useState<Array<IJob>>([]);

  const [chatList, setChatList] = useState<Array<any>>([]);

  const getUserChat = async () => {
    const res = await axios.get(`${BASE_URL}/jobs/user/chat/${baseUser.uid}`);
    setChatList(res.data);
  };
  const getCompanyChat = async () => {
    const res = await axios.get(
      `${BASE_URL}/jobs/company/chat/${baseUser.uid}`
    );
    setChatList(res.data);
  };

  useEffect(() => {
    if (chatList) {
      setJobId(chatList[0]?.jobId);
    }
  }, []);

  useEffect(() => {
    if (baseUser?.uid && asPath.includes("company")) {
      getCompanyChat();
    }
    if (baseUser?.uid && asPath.includes("user")) {
      getUserChat();
    }
  }, []);

  const [openChat, setOpenChat] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  const [messages, setMessages] = useState<Message[]>([]);
  // const [receiverMessages, setReceiverMessages] = useState<Message[]>([]);

  const { data: subscriptionData } = useSubscription(GET_MESSAGES);
  const { loading, error, data: allMessagesData } = useQuery(GET_ALL_MESSAGES);

  console.log(subscriptionData, "data", baseUser, allMessagesData);

  useEffect(() => {
    if (subscriptionData?.messageSent) {
      const { senderId, ...message } = subscriptionData.messageSent;
      if (message.jobId === "862fdb99-f52a-4beb-8e6a-79553143eef0") {
        setMessages((prevMessages) => [
          ...prevMessages,
          subscriptionData.messageSent,
        ]);
      }
    }
  }, [subscriptionData]);

  useEffect(() => {
    if (allMessagesData?.messages) {
      const filteredMessages = allMessagesData.messages.filter(
        (message: any) =>
          message.jobId === "862fdb99-f52a-4beb-8e6a-79553143eef0"
      );
      setMessages(filteredMessages);
    }
  }, [allMessagesData]);

  console.log(messages, "messages");

  return (
    <>
      <div className={styles.main}>
        <>
          <div className={styles.col1}>
            <div className={styles.bar_chat}>
              <Image src={profile} alt={profile} />
            </div>
            <div className={styles.list}>
              <ChatList />
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.bar_content}>
              <Image className={styles.picture} src={picture} alt={"picture"} />
              <div>
                <p>Design Team Management </p>
                <p className={styles.status}>Online</p>
              </div>
              {/*<Image className={styles.setting} src={setting} alt={setting} />*/}
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
                  <ChatBox messages={messages} />
                </div>
                {/*<div className={styles.company_details}></div>*/}
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};
export default Chat;
