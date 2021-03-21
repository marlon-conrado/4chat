import React, { useEffect, useState } from "react";
import Contacts from "../../components/Chat/Contacts/Contacts";
import {
  ContactContainer,
  Container,
  ChatMessagesContainer,
  ScrollContainer,
  ContainerInputChat
} from "./Styles";
import ChatMessages from "../../components/Chat/ChatMessages/ChatMessages";
import InputChat from "../../components/Chat/InputChat/InputChat";
import * as chatService from "../../services/chat";
import * as chatEvent from "../../events/chat";

const SIDE_BAR_WIDTH = "400px";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState();
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");

  const scrollToDown = element => {
    element.scrollTop = element.scrollHeight;
  };

  // New messages
  useEffect(() => {
    if (!selectedChat) return;

    chatEvent
      .listenNewMessages({ selectedChatId: selectedChat })
      .subscribe(msgs => {
        setMessages(msgs);
        scrollToDown(document.getElementById("scroll-container"));
      });
  }, [selectedChat]);

  // Get all chats
  useEffect(() => {
    chatService.getListChat({ userId }).then(setChats);
  }, []);

  // Get all chat messages
  useEffect(() => {
    if (!selectedChat) return;

    chatService.getMessages({ selectedChatId: selectedChat }).then(data => {
      setMessages(data);
      scrollToDown(document.getElementById("scroll-container"));
    });
  }, [selectedChat]);

  const sendMessage = () => {
    chatEvent.emitNewMessage({ userId, chatId: selectedChat, message });
    setMessage("");
  };

  const onChangeChatMessage = value => {
    setMessage(value);
  };

  const selectChat = chat => {
    setSelectedChat(chat.id);
    setChats(
      chats.map(itemChat => {
        if (itemChat.id === chat.id) {
          return { ...itemChat, selected: true };
        }

        return { ...itemChat, selected: false };
      })
    );
  };

  const getReceptorIdChat = chat => {
    const member = chat?.members.find(member => member.id !== userId);
    return `${member?.name} ${member?.lastName}`;
  };

  const mappedChats = chats.map(chat => ({
    id: chat.id,
    name: getReceptorIdChat(chat),
    selected: chat.selected
  }));

  const mappedMessages = messages.map(message => ({
    id: message._id,
    message: message.message,
    isMine: message?.emisor.memberId === userId
  }));

  return (
    <Container>
      <ContactContainer width={SIDE_BAR_WIDTH}>
        <Contacts
          options={mappedChats}
          onClick={selectChat}
          onSearch={() => {}}
        />
      </ContactContainer>

      <ChatMessagesContainer>
        {selectedChat && (
          <>
            <ScrollContainer id="scroll-container">
              <ChatMessages messages={mappedMessages} />
            </ScrollContainer>

            <ContainerInputChat sideBarWidth={SIDE_BAR_WIDTH}>
              <InputChat
                value={message}
                onChange={onChangeChatMessage}
                onClick={sendMessage}
              />
            </ContainerInputChat>
          </>
        )}
      </ChatMessagesContainer>
    </Container>
  );
};

export default Chat;
