import { FC, Fragment, useContext } from "react";
import { ReceivedMessage } from "../messages/chatMessages/reciverMessage/receivedMessage";
import { SendMessage } from "../messages/chatMessages/sendMessage/sendMessage";
import { GlobalContext } from "../../../../../utils/context/GlobalProvider";

interface IChatMessages {
  messages: { text: string; receiver: string; createdAt: string }[];
}
export const ChatMessages: FC<IChatMessages> = ({ messages }) => {
  const [{ baseUser }] = useContext(GlobalContext);
  return (
    <Fragment>
      {messages.length > 0 &&
        messages.map(({ text, receiver, createdAt }, index) => (
          <div key={`${text}-${index}`}>
            {baseUser && baseUser?.uid?.toString() === receiver.toString() ? (
              <ReceivedMessage text={text} createdAt={createdAt} />
            ) : (
              <SendMessage text={text} createdAt={createdAt} />
            )}
          </div>
        ))}
    </Fragment>
  );
};
