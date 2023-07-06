import { FC, useContext } from "react";
import styles from "./index.module.scss";
import Chat from "../../../components/common/chat/chatMain/chat";
import { Container } from "@mui/material";

const Index: FC = () => {
  return (
    <Container maxWidth="lg" className={styles.container_main}>
      <Chat />
    </Container>
  );
};
export default Index;
