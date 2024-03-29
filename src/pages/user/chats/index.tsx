import { FC, useContext } from "react";
import styles from "./index.module.scss";
import Chat from "../../../components/common/chat/chatMain/chat";
import { GlobalContext } from "../../../../utils/context/GlobalProvider";
import { Container } from "@mui/material";

const Index: FC = () => {
  const [{ baseUser }] = useContext(GlobalContext);
  return (
    <Container maxWidth="xl">
      <Chat />
    </Container>
  );
};
export default Index;
