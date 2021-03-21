import ApiChat from "../lib/api/chat";

export const getListChat = ({ userId }) =>
  new Promise((resolve, reject) => {
    new ApiChat()
      .getListChat({ userId })
      .then(response => {
        console.log(response);
        return resolve(response.data);
      })
      .catch(reject);
  });

export const getMessages = ({ selectedChatId }) =>
  new Promise((resolve, reject) => {
    new ApiChat()
      .getMessages({ chatId: selectedChatId })
      .then(response => {
        return resolve(response.data);
      })
      .catch(reject);
  });
