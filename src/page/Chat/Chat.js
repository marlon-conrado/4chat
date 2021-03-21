import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import Contacts from "../../components/Chat/Contacts/Contacts";
import { ContactContainer, Container, ChatMessagesContainer } from "./Styles";
import ChatMessages from "../../components/Chat/ChatMessages/ChatMessages";
import InputChat from "../../components/Chat/InputChat/InputChat";

const api = "http://localhost:8080";
const socket = io(`${api}/profile`);
const clientAxios = axios.create({ baseURL: api });

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState();
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  const sideBarWidth = "400px";

  const scrollToDown = element => {
    element.scrollTop = element.scrollHeight;
  };

  // New messages
  useEffect(() => {
    if (!selectedChat) return;
    socket.removeAllListeners();

    socket.on(`/chat/message/${selectedChat}`, function (msgs = []) {
      setMessages(msgs);
      scrollToDown(document.getElementById("scroll-container"));
    });
  }, [selectedChat]);

  // Get all chats
  useEffect(() => {
    clientAxios.get(`/chats/${userId}`).then(resp => {
      setChats(resp.data);
    });
  }, []);

  // Get all chat messages
  useEffect(() => {
    if (!selectedChat) return;

    clientAxios.get(`/chat/messages/${selectedChat}`).then(resp => {
      setMessages(resp.data);
      scrollToDown(document.getElementById("scroll-container"));
    });
  }, [selectedChat]);

  const sendMessage = () => {
    socket.emit("/chat/message", {
      user: {
        id: userId
      },
      msg: {
        text: message,
        chatId: selectedChat
      }
    });

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
      <ContactContainer width={sideBarWidth}>
        <Contacts
          options={mappedChats}
          onClick={selectChat}
          onSearch={() => {}}
        />
      </ContactContainer>

      <ChatMessagesContainer>
        {selectedChat && (
          <>
            <div
              id="scroll-container"
              style={{
                height: "92vh",
                overflow: "auto"
              }}
            >
              <ChatMessages messages={mappedMessages} />
            </div>

            <div
              style={{
                position: "fixed",
                bottom: "0",
                height: "8vh",
                width: `calc(100% - ${sideBarWidth})`
              }}
            >
              <InputChat
                value={message}
                onChange={onChangeChatMessage}
                onClick={sendMessage}
              />
            </div>
          </>
        )}
      </ChatMessagesContainer>
    </Container>
  );
};

export default Chat;
