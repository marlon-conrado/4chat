import React from "react";
import { Container, MessageContainer, Message } from "./Styles";

const ChatMessages = ({ messages }) => {
  return (
    <Container>
      {messages?.map(message => (
        <MessageContainer key={message.id} isMine={message.isMine}>
          <Message isMine={message.isMine}>{message.message}</Message>
        </MessageContainer>
      ))}
    </Container>
  );
};

export default ChatMessages;
