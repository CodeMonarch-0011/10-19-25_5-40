import { createContext, useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const MessageContext = createContext({});

export function MessageContextFunction() {
  return useContext(MessageContext);
}

export function MessageContextProvider({ children }) {
  const [messages, setMessages] = useState([]);

  function addMessage(message) {
    setMessages([
      ...messages,
      {
        label: message.label,
        type: message.type,
        id: uuidV4(),
      },
    ]);
  }

  function removeMessage(id) {
    setMessages((messages) => messages.filter((message) => message.id != id));
  }

  function clearAllMessage() {
    setMessages([]);
  }

  return (
    <MessageContext.Provider
      value={{ messages, addMessage, removeMessage, clearAllMessage }}
    >
      {children}
    </MessageContext.Provider>
  );
}
