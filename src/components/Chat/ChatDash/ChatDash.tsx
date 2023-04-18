import React, { useState, useEffect } from "react";
import { ChatEngine, MessageFormSocial } from "react-chat-engine";
import styles from "./ChatDash.module.scss";
import { Container } from "@mui/material";

export default function ChatDash(): JSX.Element {
  const [showChat, setShowChat] = useState<boolean>(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setShowChat(true);
    }
  }, []);

  if (!showChat) return <div></div>;
  return (
    <Container maxWidth="xl">
      <div className={styles.background}>
        <div className={styles.shadow}>
          <ChatEngine
            height="calc(100vh - 200px)"
            projectID="d1983724-52ee-4a82-9429-f3d056db46c9"
            renderNewMessageForm={() => <MessageFormSocial />}
          />
        </div>
      </div>
    </Container>
  );
}
