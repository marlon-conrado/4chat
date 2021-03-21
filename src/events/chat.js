import Event from "../lib/event";

const EVENT_NAME = "/chat/message";

export const listenNewMessages = ({ selectedChatId }) =>
  Event.listen(`${EVENT_NAME}/${selectedChatId}`);

export const emitNewMessage = ({ userId, message, chatId }) =>
  Event.emit(EVENT_NAME, {
    user: {
      id: userId
    },
    msg: { text: message, chatId }
  });
