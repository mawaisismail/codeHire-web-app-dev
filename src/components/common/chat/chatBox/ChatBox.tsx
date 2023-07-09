import styles from "./chatBox.module.scss";
import exportImg from "../../../../../static/images/chat_export_icon_dark.svg";
import sendImg from "../../../../../static/images/send_message_icon.svg";
import {FC, useContext, useEffect, useRef, useState} from "react";
import Image from "next/image";
import { useIsMobile } from "../../../../../hooks/useIsMobile";
import {gql, useMutation} from "@apollo/client";
import {GlobalContext} from "../../../../../utils/context/GlobalProvider";
interface Message {
    jobId: string;
    content: string;
    senderId: string;
    createdAt: string;
}

const POST_MESSAGE = gql`
    mutation($jobId:String!, $senderId:String!,$content:String!){
        messageSend(jobId:$jobId, senderId:$senderId,content:$content)
        {
            jobId
            content
            senderId
            createdAt
        }
    }
`;
export const  ChatBox: FC<{ messages: Message[]; }> =
    ({messages}) => {
        const [{ baseUser }] = useContext(GlobalContext);
    const isMobile = useIsMobile();
        const [newMessage, setNewMessage] = useState("");
    const chatRef = useRef<HTMLDivElement>(null); // Ref for scrolling to the latest message

        const [postMessage] = useMutation(POST_MESSAGE);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

        const renderMessages = () => {
            console.log(messages)
            if (!messages || messages.length === 0) {
                return null; // Return null or a placeholder if there are no messages
            }

            const sortedMessages = messages.slice().sort(
                (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );

            return sortedMessages.map((message, index) => {
                const isSender = message.senderId === baseUser.uid; // Replace 'senderId' with the actual sender ID

                return (
                    <div
                        key={index}
                        className={isSender ? styles.senderMessage : styles.receiverMessage}
                    >
                        <div className={styles.messageContent}>{message.content}</div>
                    </div>
                );
            });
        };

        const handleSendMessage = async () => {
            if (newMessage.trim() !== "") {
                const jobId = "862fdb99-f52a-4beb-8e6a-79553143eef0"; // Replace with the actual job ID
                const senderId = baseUser.uid; // Replace with the actual sender ID

                try {
                    await postMessage({
                        variables: {
                            jobId,
                            senderId,
                            content: newMessage,
                        },
                    });

                    setNewMessage(""); // Clear the input field after sending the message
                } catch (error) {
                    console.log("Error posting message:", error);
                }

            }
        };
        return (
            <div className={styles.main}>
                <div className={styles.chat_main} ref={chatRef}>
                    {renderMessages()}
                </div>
                <div className={styles.footer}>
                    <p className={styles.export}>
                        <label htmlFor="file-input">
                            <Image src={exportImg} height={25} width={25} alt="exportIcon" />
                        </label>
                        <input id="file-input" className={styles.export_input} type="file" />
                    </p>
                    <textarea
                        rows={isMobile ? 1 : 4}
                        placeholder="Enter Message"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    {isMobile ? (
                        <p className={styles.send}>
                            <Image src={sendImg} height={25} width={25} alt="sendIcon" />
                        </p>
                    ) : (
                        <button className={styles.send_message} onClick={handleSendMessage}>
                            Send
                        </button>
                    )}
                </div>
            </div>
        );
};
