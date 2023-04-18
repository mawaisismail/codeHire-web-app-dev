import { MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const projectId: string = "55dbc7e1-91be-4135-b1fb-81aae28c9e81";
const username: string = "ali";
const secret: string = "111111";

export function ChatDash() {
  const chatProps = useMultiChatLogic(projectId, username, secret);
  return <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />;
}

//
// const projectId: string = "55dbc7e1-91be-4135-b1fb-81aae28c9e81";
// const username: string = "ali";
// const secret: string = "111111";
