import "../../styles/general.css";
import { useEffect } from "react";
import { MessageContextFunction } from "../../context/messages";

function Message({ label, type, id }) {
  const { removeMessage } = MessageContextFunction();

  useEffect(() => {
    setTimeout(() => {
      removeMessage(id);
    }, 1200);
  }, []);

  return (
    <div className="msg">
      {label}
      <div className="msg-load" data-status={type} />
    </div>
  );
}

export function MessageQueue() {
  const { messages } = MessageContextFunction();

  return (
    <>
      {!messages[0] ? (
        <></>
      ) : (
        <div className="message-queue">
          {messages.map((msg, i) => (
            <Message key={i} label={msg.label} type={msg.type} id={msg.id} />
          ))}
        </div>
      )}
    </>
  );
}
